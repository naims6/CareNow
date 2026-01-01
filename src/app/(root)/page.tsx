import HeroSection from "@/src/components/Home/HeroSection";

export default function Home() {
  return (
    <div>
      {/*Grid Background */}
      <div
        className="absolute inset-0 -z-10 opacity-50 dark:opacity-15"
        style={{
          backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
        }}
      />
      <HeroSection />
    </div>
  );
}
