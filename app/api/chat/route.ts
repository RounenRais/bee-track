import { BEETRACK_KNOWLEDGE_BASE } from '../../lib/knowledge-base';

const GROQ_API_KEY = process.env.GROQ_API_KEY;

const GROQ_MODEL =
  process.env.GROQ_MODEL || 'openai/gpt-oss-120b';

const OUT_OF_SCOPE_REPLY =
  'Bu konuda yardımcı olamıyorum — ben yalnızca BeeTrack projesi hakkındaki sorulara cevap veren bir asistanım.';

const SYSTEM_PROMPT = `
Sen BeeTrack projesinin resmi web sitesinde çalışan,
dar kapsamlı bir asistansın.

Yalnızca BeeTrack projesiyle ilgili soruları cevapla.

Kapsam:
- Donanım
- Sensörler
- Ölçüm sistemi
- Kalibrasyon
- Enerji ve batarya
- Veri ve haberleşme
- Mekanik tasarım
- Saha testleri
- Pazar analizi
- Proje ekibi
- İletişim

Kapsam dışındaki soruları cevaplama.

Kapsam dışı soru geldiğinde:
"Bu konuda yardımcı olamıyorum — ben yalnızca BeeTrack projesi hakkında sorulara cevap veren bir asistanım."
de.

BeeTrack hakkında sorulan bilgi aşağıdaki bilgi tabanında yoksa
kesinlikle bilgi uydurma.

Kısa, anlaşılır ve Türkçe cevap ver.

---

BİLGİ TABANI:

${BEETRACK_KNOWLEDGE_BASE}
`;

export async function POST(request: Request) {
  try {
    console.log('✅ /api/chat isteği geldi');

    if (!GROQ_API_KEY) {
      console.error('❌ GROQ_API_KEY bulunamadı');

      return Response.json(
        {
          error: 'GROQ_API_KEY tanımlı değil.',
        },
        {
          status: 500,
        }
      );
    }

    const body = await request.json();
    const { messages } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json(
        {
          error: 'messages dizisi gerekli.',
        },
        {
          status: 400,
        }
      );
    }

    const safeMessages = messages
      .filter(
        (message) =>
          (message.role === 'user' ||
            message.role === 'assistant') &&
          typeof message.content === 'string'
      )
      .slice(-20)
      .map((message) => ({
        role: message.role,
        content: message.content.slice(0, 8000),
      }));

    if (safeMessages.length === 0) {
      return Response.json(
        {
          error: 'Geçerli mesaj bulunamadı.',
        },
        {
          status: 400,
        }
      );
    }

    const groqMessages = [
      {
        role: 'system',
        content: SYSTEM_PROMPT,
      },
      ...safeMessages,
    ];

    console.log('🤖 Groq modeli:', GROQ_MODEL);

    const response = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },

        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: groqMessages,
          temperature: 0.2,
          max_completion_tokens: 1000,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error('======================');
      console.error('❌ GROQ API HATASI');
      console.error('Status:', response.status);
      console.error('Body:', errorText);
      console.error('======================');

      return Response.json(
        {
          error: 'Yapay zeka servisine ulaşılamadı.',
          groqStatus: response.status,
          detail: errorText,
        },
        {
          status: response.status,
        }
      );
    }

    const data = await response.json();

    console.log('✅ Groq cevabı alındı');

    const reply =
      data?.choices?.[0]?.message?.content?.trim() ||
      OUT_OF_SCOPE_REPLY;

    return Response.json({
      reply,
    });
  } catch (error) {
    console.error('❌ Chat API hatası:', error);

    return Response.json(
      {
        error: 'Beklenmeyen bir hata oluştu.',
      },
      {
        status: 500,
      }
    );
  }
}