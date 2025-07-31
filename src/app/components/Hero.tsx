'use client'

import { Button } from '@/app/components/ui/button'
import { useRouter } from 'next/navigation'

const Hero = () => {
  const router = useRouter()

  return (
    <section className="py-20 text-center space-y-6">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        Ghavasieh Brothers Except Arsham
      </h1>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Ghavasieh Brothers Except Arsham (GBEA) doesn&apos;t have any other branch!
      </p>
      <Button onClick={() => router.push('/contact')} size="lg">
        Contact Us
      </Button>
    </section>
  )
}

export default Hero
