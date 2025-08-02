// app/contact/page.tsx
"use client";

import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { MailIcon } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 md:px-0 py-20 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground text-lg">
          We&apos;d love to hear about your project. Fill out the form and
          we&apos;ll get back to you.
        </p>
      </section>

      <form className="space-y-6">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your idea..."
              rows={5}
              required
            />
          </div>
        </div>

        <Button type="submit">
          <MailIcon className="w-4 h-4 mr-2" /> Send Message
        </Button>
      </form>
    </main>
  );
}
