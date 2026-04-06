'use client'

import { AlertCircle, Lock, Users, ShoppingCart, MessageCircle } from 'lucide-react'

interface RiskMeterProps {
  label: string
  level: 'low' | 'medium' | 'high'
  icon?: React.ReactNode
}

export function RiskMeter({ label, level, icon }: RiskMeterProps) {
  const colors = {
    low: {
      bg: 'bg-chart-1/10',
      bar: 'bg-chart-1',
      text: 'text-chart-1',
      label: 'Low Risk'
    },
    medium: {
      bg: 'bg-chart-2/10',
      bar: 'bg-chart-2',
      text: 'text-chart-2',
      label: 'Medium Risk'
    },
    high: {
      bg: 'bg-chart-3/10',
      bar: 'bg-chart-3',
      text: 'text-chart-3',
      label: 'High Risk'
    }
  }

  const config = colors[level]
  const fillWidth = level === 'low' ? 33 : level === 'medium' ? 66 : 100

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`flex items-center justify-center text-base ${config.text}`}>
            {icon}
          </span>
          <span className="text-sm font-medium text-background">{label}</span>
        </div>
        <span className={`text-xs font-semibold ${config.text}`}>{config.label}</span>
      </div>
      <div className={`h-2 rounded-full ${config.bg} overflow-hidden`}>
        <div
          className={`h-full ${config.bar} transition-all duration-300`}
          style={{ width: `${fillWidth}%` }}
        />
      </div>
    </div>
  )
}
