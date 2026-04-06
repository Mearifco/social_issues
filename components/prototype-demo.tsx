'use client'

import React, { useState } from 'react'
import { ArrowLeft, AlertTriangle, Lock, Users, ShoppingCart, Shield, ShieldAlert } from 'lucide-react'

// ============================================================================
// SHARED DATA (You can put this in a constants.ts file)
// ============================================================================
const MOCK_APPS = [
  {
    id: 'chat-app',
    name: 'Meta Facebook',
    category: 'Social Media',
    // Replace these URLs with your local paths, e.g., '/icons/chat-app.png'
    icon: 'https://img.icons8.com/?size=100&id=118497&format=png&color=000000',
    tier: 'C',
    tierColor: 'bg-orange-100 text-orange-700 border-orange-300',
    risks: { privacy: 'high', predator: 'medium', bullying: 'high', purchase: 'low' },
    note: '⚠️ Unmoderated voice chat. High correlation with cyberbullying incidents reported by users. Exercise caution with children under 13.'
  },
  {
    id: 'game-app',
    name: 'Roblox',
    category: 'Gaming',
    icon: 'https://img.icons8.com/?size=100&id=111924&format=png&color=000000',
    tier: 'D',
    tierColor: 'bg-red-100 text-red-700 border-red-300',
    risks: { privacy: 'medium', predator: 'high', bullying: 'high', purchase: 'high' },
    note: '🚨 High risk of predatory microtransactions and toxic voice lobbies. Parental controls are easily bypassed by creating a new account.'
  },
  {
    id: 'edu-app',
    name: 'Khan Acadamy',
    category: 'Education',
    icon: 'https://img.icons8.com/?size=100&id=pvi2QSAAgwyj&format=png&color=000000',
    tier: 'S',
    tierColor: 'bg-emerald-100 text-emerald-700 border-emerald-300',
    risks: { privacy: 'low', predator: 'low', bullying: 'low', purchase: 'low' },
    note: '✅ Excellent privacy practices. No chat features, Learning platform, and zero dark patterns for purchases.'
  }
]

// ============================================================================
// FILE: components/mobile-frame.tsx
// ============================================================================

export function RiskMeter({ label, level, icon }) {
  const levels = {
    low: { color: 'bg-emerald-500', width: 'w-1/3', text: 'Low' },
    medium: { color: 'bg-amber-500', width: 'w-2/3', text: 'Medium' },
    high: { color: 'bg-rose-500', width: 'w-full', text: 'High' }
  }

  const current = levels[level] || levels.low

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center text-xs">
        <div className="flex items-center gap-1.5 text-slate-600 font-medium">
          {icon}
          <span>{label}</span>
        </div>
        <span className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-sm ${current.color} text-white`}>
          {current.text}
        </span>
      </div>
      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <div 
          className={`h-full ${current.color} ${current.width} transition-all duration-700 ease-out`}
        />
      </div>
    </div>
  )
}

export function MobileFrame({ app }) {
  if (!app) return null

  return (
    <div className="flex items-center justify-center py-6">
      <div className="relative w-full max-w-[320px]">
        {/* Phone Hardware Frame */}
        <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border-[12px] border-slate-900 relative">
          
          {/* Hardware Buttons */}
          <div className="absolute -left-[14px] top-24 w-1 h-12 bg-slate-800 rounded-l-md"></div>
          <div className="absolute -left-[14px] top-40 w-1 h-12 bg-slate-800 rounded-l-md"></div>
          <div className="absolute -right-[14px] top-32 w-1 h-16 bg-slate-800 rounded-r-md"></div>

          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-3xl z-20 flex justify-center items-center gap-2">
            <div className="w-12 h-1.5 bg-slate-800 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
          </div>

          {/* Screen Content */}
          <div className="bg-slate-50 aspect-[9/19] relative overflow-hidden flex flex-col rounded-[1.5rem]">
            {/* Status Bar */}
            <div className="bg-white px-5 pt-3 pb-2 text-[10px] text-slate-800 font-medium flex justify-between items-center z-10">
              <span>9:41</span>
              <div className="flex gap-1.5 items-center">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16"/></svg>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"/><path d="M22 11v2"/></svg>
              </div>
            </div>

            {/* App Header */}
            <div className="bg-slate-900 text-white px-5 py-4 shadow-sm transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                  {/* Changed from a Lucide React component to an img tag */}
                  <img src={app.icon} alt={`${app.name} icon`} className="h-6 w-6 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">{app.name}</h3>
                  <p className="text-[10px] text-slate-300">{app.category}</p>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-auto px-5 py-5 bg-slate-50 space-y-6">
              
              {/* Tier Badge */}
              <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                <span className="text-xs font-semibold text-slate-600">SafeSpace Standard Tier</span>
                <span className={`text-lg font-black w-8 h-8 flex items-center justify-center rounded-lg border ${app.tierColor}`}>
                  {app.tier}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldAlert className="h-4 w-4 text-slate-800" />
                  <h4 className="font-bold text-sm text-slate-800">Risk Profile</h4>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 space-y-4">
                  <RiskMeter
                    label="Privacy Risk"
                    level={app.risks.privacy}
                    icon={<Lock className="h-3.5 w-3.5" />}
                  />
                  <RiskMeter
                    label="Predator Risk"
                    level={app.risks.predator}
                    icon={<Users className="h-3.5 w-3.5" />}
                  />
                  <RiskMeter
                    label="Cyberbullying"
                    level={app.risks.bullying}
                    // Since MessageSquare was removed from the app icon import, you can keep using it here if desired,
                    // but for consistency let's use the AlertTriangle as a fallback for the bullying icon here.
                    icon={<AlertTriangle className="h-3.5 w-3.5" />}
                  />
                  <RiskMeter
                    label="Purchase Traps"
                    level={app.risks.purchase}
                    icon={<ShoppingCart className="h-3.5 w-3.5" />}
                  />
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <p className="text-xs font-bold text-amber-900">Community Note</p>
                </div>
                <p className="text-[11px] text-amber-800 leading-relaxed font-medium">
                  {app.note}
                </p>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="bg-slate-50 h-8 flex items-end pb-2 justify-center absolute bottom-0 w-full z-10">
              <div className="w-32 h-1 bg-slate-900 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// FILE: components/tier-dashboard.tsx
// ============================================================================

export function TierDashboard({ apps, selectedApp, onSelect }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">App Directory</h2>
        <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
          {apps.length} Apps Analyzed
        </span>
      </div>

      <div className="space-y-3">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => onSelect(app)}
            className={`w-full text-left transition-all duration-200 rounded-2xl p-4 border-2 flex items-center gap-4
              ${selectedApp.id === app.id 
                ? 'border-blue-600 bg-blue-50 shadow-md transform scale-[1.02]' 
                : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm'
              }
            `}
          >
            <div className={`p-3 rounded-xl flex-shrink-0 ${selectedApp.id === app.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
              {/* Changed from a Lucide React component to an img tag */}
              <img src={app.icon} alt={`${app.name} icon`} className={`h-8 w-8 object-contain ${selectedApp.id === app.id ? 'brightness-0 invert' : ''}`} />
            </div>
            
            <div className="flex-1">
              <h3 className="font-bold text-slate-900 text-lg">{app.name}</h3>
              <p className="text-sm text-slate-500 font-medium">{app.category}</p>
            </div>

            <div className={`text-xl font-black w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-xl border-2 ${app.tierColor} bg-white shadow-sm`}>
              {app.tier}
            </div>
          </button>
        ))}
      </div>

      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mt-8">
        <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600" />
          How Tiers Work
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          SafeSpace Standard assigns a tier from <strong>S (Safest)</strong> to <strong>F (Highest Risk)</strong> based on a weighted algorithm analyzing privacy policies, community reports, and behavioral patterns.
        </p>
        <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-600">
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> S - Recommended</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-lime-500"></div> A - Low Risk</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-400"></div> B - Moderate Risk</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-500"></div> C - High Risk</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div> D - Severe Risk</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-900"></div> F - Do Not Use</div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// FILE: components/prototype-demo.tsx
// ============================================================================

export function PrototypeDemo({ onBack }) {
  const [selectedApp, setSelectedApp] = useState(MOCK_APPS[0])

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-4 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Research
          </button>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">SafeSpace Standard Tiers Platform</h1>
            <p className="mt-2 text-slate-500 text-lg max-w-2xl">
              Interactive prototype demonstrating our risk assessment algorithm and community-driven safety platform.
            </p>
          </div>
        </div>
      </div>

      {/* Main Interactive Area */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">
            
            {/* Left Side - Dashboard */}
            <div className="order-2 lg:order-1">
              <TierDashboard 
                apps={MOCK_APPS} 
                selectedApp={selectedApp} 
                onSelect={setSelectedApp} 
              />
            </div>

            {/* Right Side - Mobile Frame */}
            <div className="order-1 lg:order-2 flex justify-center lg:sticky lg:top-32">
              <MobileFrame app={selectedApp} />
            </div>

          </div>
        </div>
      </div>

      {/* Footer Section */}
      <section className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">How The SafeSpace Standard Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center text-xl font-black mb-4">1</div>
              <h3 className="font-bold text-white text-lg mb-2">Research & Assessment</h3>
              <p className="text-slate-400 leading-relaxed">
                Expert and community review of app safety across four risk vectors: privacy, predators, bullying, and purchases.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center text-xl font-black mb-4">2</div>
              <h3 className="font-bold text-white text-lg mb-2">Transparent Tiers</h3>
              <p className="text-slate-400 leading-relaxed">
                Apps are categorized into tiers with clear explanations of risks. Not a blacklist, but an educational guide.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center text-xl font-black mb-4">3</div>
              <h3 className="font-bold text-white text-lg mb-2">Continuous Updates</h3>
              <p className="text-slate-400 leading-relaxed">
                As threats evolve and new apps emerge, the Trusted Guardians community updates assessments in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// ============================================================================
// CANVAS RUNTIME WRAPPER (Do not copy this to your local files)
// ============================================================================

export default function App() {
  const handleBack = () => alert('Would navigate back to research in full app.')
  
  return <PrototypeDemo onBack={handleBack} />
}