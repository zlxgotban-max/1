import Hero from "@/components/Hero";
import NosComparison from "@/components/NosComparison";
import TeamSection from "@/components/TeamSection";
import Conclusion from "@/components/Conclusion";

export default function Page() {
  return (
    <main className="container">
      <Hero />
      <NosComparison />
      <TeamSection />
      <Conclusion />
    </main>
  );
}