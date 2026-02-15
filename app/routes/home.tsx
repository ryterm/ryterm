import { Hero } from "@/components/hero";
import { createMeta } from "@/fx/createMeta";

export function meta() {
  return createMeta({
    title: "Home"
  });
}

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
    </main>
  );
}
