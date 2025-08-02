// app/components/hero.tsx
"use client";

import LinkButton from "@/app/components/LinkButton";

export function Hero() {
  return (
    <section className="text-center space-y-6 py-20 px-6 md:px-12">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Ghavasieh Brothers Except Arsham
      </h1>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        Ghavasieh Brothers Except Arsham (GBEA) doesn&apos;t have any other
        branch!
      </p>
      <div className="pt-6">
        <LinkButton href="/contact">Let&apos;s Work Together</LinkButton>
      </div>
    </section>
  );
}

export default Hero;
