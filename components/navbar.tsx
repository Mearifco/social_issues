'use client'

import { Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavbarProps {
  onViewChange: (view: 'blog' | 'prototype') => void
  currentView: 'blog' | 'prototype'
}

export function Navbar({ onViewChange, currentView }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold text-primary">SafeSpace Standard</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant={currentView === 'blog' ? 'default' : 'ghost'}
              onClick={() => onViewChange('blog')}
              className="text-sm"
            >
              Blog
            </Button>
            <Button
              variant={currentView === 'prototype' ? 'default' : 'ghost'}
              onClick={() => onViewChange('prototype')}
              className="text-sm"
            >
              Prototype
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
