import HeroSection from "./components/hero-section";
import ProblemSection from "./components/problem-section";
import SolutionSection from "./components/solution-section";
import StepsSection from "./components/steps-section";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <StepsSection />
    </div>
  );
}
