import { BEETRACK_KNOWLEDGE_BASE } from '../../lib/knowledge-base'

const GROQ_API_KEY = process.env.GROQ_API_KEY;

const GROQ_MODEL =
  process.env.GROQ_MODEL || 'llama3-70b-8192';

const SITE_URL = process.env.SITE_URL || '';
const SITE_NAME = process.env.SITE_NAME || 'BeeTrack';

const OUT_OF_SCOPE_REPLY =
  'Bu konuda yardımcı olamıyorum — ben yalnızca BeeTrack projesi hakkındaki sorulara cevap veren bir asistanım. ' +
  'Proje hakkında bir soru sorabilir ya da ekiple iletişime geçebilirsiniz.';

const SYSTEM_PROMPT = `
Sen BeeTrack projesinin resmi web sitesinde çalışan,
DAR KAPSAMLI bir asistansın.

SENİN TEK GÖREVİN:
Ziyaretçilerin BeeTrack projesi hakkındaki sorularını,
aşağıda verilen bilgi tabanına dayanarak yanıtlamak.

KAPSAM KURALI:

- Yalnızca BeeTrack projesiyle doğrudan ilgili sorulara cevap ver.
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

şeklinde cevap ver.

Bilgi tabanında olmayan bir BeeTrack konusu sorulursa bilgi uydurma.
Bilginin mevcut olmadığını söyle ve ekiple iletişime geçmesini öner.

Kısa, anlaşılır ve samimi Türkçe kullan.

---

BİLGİ TABANI:

${BEETRACK_KNOWLEDGE_BASE}
`;

export async function POST(request) {
  try {
    if (!GROQ_API_KEY) {
      console.error('GROQ_API_KEY tanımlı değil.');

      return Response.json(
        {
          error: 'Sunucu yapılandırma hatası.',
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

    // Client'ın system/developer rolü göndermesine izin vermiyoruz.
    const safeMessages = messages
      .filter(
        (message) =>
          (message.role === 'user' || message.role === 'assistant') &&
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

    const openRouterMessages = [
      {
        role: 'system',
        content: SYSTEM_PROMPT,
      },
      ...safeMessages,
    ];

    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',

          Authorization: `Bearer ${GROQ_API_KEY}`,

          ...(SITE_URL && {
            'HTTP-Referer': SITE_URL,
          }),

          ...(SITE_NAME && {
            'X-OpenRouter-Title': SITE_NAME,
          }),
        },

        body: JSON.stringify({
          model: GROQ_MODEL,

          max_tokens: 1000,

          messages: openRouterMessages,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        'OpenRouter API hatası:',
        response.status,
        errorText
      );

      return Response.json(
        {
          error: 'Yapay zeka servisine ulaşılamadı.',
        },
        {
          status: 502,
        }
      );
    }

    const data = await response.json();

    let reply =
      data?.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      reply = OUT_OF_SCOPE_REPLY;
    }

    return Response.json({
      reply,
    });
  } catch (error) {
    console.error('Chat API hatası:', error);

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