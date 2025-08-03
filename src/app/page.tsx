import Hero from "@/app/components/Hero";
import { Badge } from "@/app/components/ui/badge";
import { Separator } from "@/app/components/ui/separator";
import { MailIcon } from "lucide-react";
import LinkButton from "./components/LinkButton";
import ServicesSection from "./components/ServicesSection";

const services = [
  {
    title: "Custom Software Development",
    description:
      "We build scalable, maintainable software tailored to your business needs.",
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "CI/CD, containerization, cloud infrastructure, and monitoring handled for you.",
  },
  {
    title: "Consulting",
    description:
      "Technical strategy and audits to unlock your team’s potential.",
  },
];

const technologies = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Azure",
  "Kubernetes",
  "Terraform",
  "CI/CD",
];

export default function HomePage() {
  return (
    <main className="px-6 md:px-12 max-w-6xl mx-auto py-12 space-y-24">
      <Hero />

      <Separator />

      {/* Services */}
      <ServicesSection services={services} />

      <Separator />

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">
          Technologies We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      <Separator />

      {/* Contact CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">
          Let&apos;s build something great
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Whether you&apos;re a startup or scaling team, we can help you deliver
          robust, maintainable systems. Drop us a message to get started.
        </p>
        <LinkButton size="lg" href="/contact">
          <MailIcon className="mr-2 h-4 w-4" />
          Contact Us
        </LinkButton>
      </section>
    </main>
  );
}
