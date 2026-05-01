import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
    </>
  );
}
