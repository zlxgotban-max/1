import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import AnimatedBadge from "@/components/AnimatedBadge";

export default function Page() {
  return (
    <main className="page-shell">
      <AnimatedBadge />
      <Hero />
      <FeatureGrid />
    </main>
  );
}
