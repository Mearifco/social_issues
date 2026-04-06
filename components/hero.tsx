'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  onCTAClick: () => void
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
      
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png" /* Add your image to the /public folder and name it hero-bg.jpg */
          alt="Digital Dangers Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay to blend the image with your dark theme and keep text readable */}
        <div className="absolute inset-0 bg-background/80 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content - Note the relative and z-10 classes to keep it above the background */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-6 border border-accent/20">
          <span>Children's Online Safety and Data Protection</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Decoding Digital Dangers
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          A Community-Driven Transparency Policy Framework for Digital Child Safety, featuring evidence-based insights and an interactive risk assessment platform.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onCTAClick}
            size="lg"
            className="gap-2"
          >
            View Digital Safe Guard Prototype <ArrowRight className="h-4 w-4" />
          </Button>
          {/* <Button
            variant="outline"
            size="lg"
            className="bg-background/50 backdrop-blur-sm"
          >
            Read Full Research
          </Button> */}
        </div>
      </div>
    </section>
  )
}