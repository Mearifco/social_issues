'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import ResearchSection from '@/components/research-section'
import { EthicalSection } from '@/components/ethical-section'
import { SolutionSection } from '@/components/solution-section'
import { PrototypeDemo } from '@/components/prototype-demo'

export default function Home() {
  const [currentView, setCurrentView] = useState<'blog' | 'prototype'>('blog')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onViewChange={setCurrentView} currentView={currentView} />
      
      {currentView === 'blog' ? (
        <>
          <Hero onCTAClick={() => setCurrentView('prototype')} />
          <ResearchSection />
          {/* <EthicalSection /> */}
          {/* <SolutionSection /> */}
          
          {/* Footer */}
          <footer className="border-t border-border bg-card py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
                <p>© 2024 SafeSpace Standard Project. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <PrototypeDemo onBack={() => setCurrentView('blog')} />
      )}
    </div>
  )
}
