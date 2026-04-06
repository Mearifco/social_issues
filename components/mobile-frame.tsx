'use client'

import { Badge } from '@/components/ui/badge'
import { AlertTriangle, Lock, Users, ShoppingCart } from 'lucide-react'
import { RiskMeter } from './risk-meter'

export function MobileFrame() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="relative w-full max-w-sm">
        {/* Phone Frame */}
        <div className="bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-slate-900">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl z-20"></div>

          {/* Screen */}
          <div className="bg-slate-50 aspect-[9/19] relative overflow-hidden flex flex-col">
            {/* Status Bar */}
            <div className="bg-white px-4 py-2 border-b border-border text-xs text-background/60">
              <div className="flex justify-between items-center">
                <span>9:41</span>
                <div className="flex gap-1">
                  <span>📶</span>
                  <span>📡</span>
                  <span>🔋</span>
                </div>
              </div>
            </div>

            {/* App Header */}
            <div className="bg-gradient-to-b from-secondary to-secondary/80 text-white px-4 py-3">
              <h3 className="font-bold text-sm">Generic Chat App</h3>
              <p className="text-xs text-white/70">Safety Assessment</p>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto px-4 py-4 bg-white space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-chart-3" />
                  <h4 className="font-bold text-sm text-background">Risk Profile</h4>
                </div>

                <RiskMeter
                  label="Privacy Risk"
                  level="high"
                  icon={<Lock className="h-4 w-4" />}
                />

                <RiskMeter
                  label="Predator Risk"
                  level="medium"
                  icon={<Users className="h-4 w-4" />}
                />

                <RiskMeter
                  label="Cyberbullying"
                  level="high"
                  icon={<Users className="h-4 w-4" />}
                />

                <RiskMeter
                  label="Purchase Traps"
                  level="low"
                  icon={<ShoppingCart className="h-4 w-4" />}
                />
              </div>

              <div className="border-t border-border pt-3 mt-4">
                <p className="text-xs text-background font-medium mb-2">Community Note:</p>
                <p className="text-xs text-background leading-relaxed">
                  ⚠️ Recent update added unmoderated voice chat. Exercise caution with children under 13.
                </p>
              </div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="bg-black h-6 flex items-center justify-center">
            <div className="w-32 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
