'use client'

import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Search, Star } from 'lucide-react'

const appsByTier = {
  S: [
    { name: 'Messenger Kids', icon: '👶', description: 'Age-appropriate chat' },
    { name: 'Khan Academy', icon: '📚', description: 'Educational content' },
  ],
  A: [
    { name: 'YouTube Kids', icon: '📺', description: 'Curated content' },
    { name: 'Discord', icon: '💬', description: 'Community chat' },
  ],
  B: [
    { name: 'Roblox', icon: '🎮', description: 'Online gaming' },
    { name: 'TikTok', icon: '🎬', description: 'Short videos' },
  ],
  C: [
    { name: 'Instagram', icon: '📸', description: 'Photo sharing' },
    { name: 'Snapchat', icon: '👻', description: 'Photo messaging' },
  ],
  F: [
    { name: 'Omegle', icon: '⚠️', description: 'Anonymous chat' },
    { name: 'Chatroulette', icon: '⚠️', description: 'Random video chat' },
  ],
}

const tierColors = {
  S: { bg: 'bg-chart-1', text: 'text-chart-1', label: 'Safe', lightBg: 'bg-chart-1/10' },
  A: { bg: 'bg-blue-500', text: 'text-blue-500', label: 'Trustworthy', lightBg: 'bg-blue-500/10' },
  B: { bg: 'bg-chart-2', text: 'text-chart-2', label: 'Caution', lightBg: 'bg-chart-2/10' },
  C: { bg: 'bg-orange-500', text: 'text-orange-500', label: 'Monitor', lightBg: 'bg-orange-500/10' },
  F: { bg: 'bg-chart-3', text: 'text-chart-3', label: 'Dangerous', lightBg: 'bg-chart-3/10' },
}

export function TierDashboard() {
  return (
    <div className="space-y-6 flex-1">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-4">SafeGuard Tiers</h2>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search apps..."
            className="pl-10 bg-card"
          />
        </div>
      </div>

      <div className="space-y-4">
        {(Object.entries(tierColors) as Array<[keyof typeof appsByTier, any]>).map(([tier, colors]) => (
          <div key={tier}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`px-3 py-1 rounded font-bold text-white ${colors.bg}`}>
                Tier {tier}
              </div>
              <span className="text-sm font-medium text-muted-foreground">{colors.label}</span>
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              {appsByTier[tier as keyof typeof appsByTier].map((app) => (
                <Card
                  key={app.name}
                  className={`p-4 cursor-pointer transition-all hover:shadow-md hover:border-accent ${colors.lightBg} border-0`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-2xl">{app.icon}</span>
                      <div>
                        <p className="font-semibold text-sm text-primary">{app.name}</p>
                        <p className="text-xs text-muted-foreground">{app.description}</p>
                      </div>
                    </div>
                    <Star className={`h-4 w-4 flex-shrink-0 ${colors.text}`} />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
