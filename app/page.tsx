'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ResearchSection } from '@/components/research-section'
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
          <EthicalSection />
          <SolutionSection />
          
          {/* Footer */}
          <footer className="border-t border-border bg-card py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <h3 className="font-bold text-primary mb-3">SafeSpace Standard Project</h3>
                  <p className="text-sm text-muted-foreground">
                    Research-driven online safety platform for children in the Philippines.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3 text-sm">Resources</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-accent transition-colors">Full Research Paper</a></li>
                    <li><a href="#" className="hover:text-accent transition-colors">Methodology</a></li>
                    <li><a href="#" className="hover:text-accent transition-colors">Contributors</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3 text-sm">Learn More</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
                    <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
                <p>© 2024 SafeGuard Project. All rights reserved.</p>
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
