import Hero from "@/app/components/Hero";
import ServiceCard from "@/app/components/ServiceCard";

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

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="my-16">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </>
  );
}
