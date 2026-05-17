import React, { useState, useEffect } from 'react';
import { 
  Users, 
  ShieldCheck, 
  Database, 
  LayoutTemplate, 
  UsersRound, 
  Smartphone, 
  ArrowRight, 
  ArrowDown,
  Activity,
  Pause,
  Play
} from 'lucide-react';

// --- Flow Data Configuration ---
interface FlowStep {
  id: number;
  title: string;
  subtitle: string;
  action: string;
  icon: React.ElementType;
  theme: 'amber' | 'blue' | 'emerald';
}
const flowSteps: FlowStep[] = [
  {
    id: 0,
    title: "Community Policy Auditors",
    subtitle: "(Cybersec Students, NGOs, Tech Parents)",
    action: "Submits risk data & policy violations",
    icon: Users,
    theme: "amber"
  },
  {
    id: 1,
    title: "Moderation Algorithm & Core Team",
    subtitle: "Security & Validation",
    action: "Verifies, Approves, & Updates",
    icon: ShieldCheck,
    theme: "blue"
  },
  {
    id: 2,
    title: "Central Tier List Database",
    subtitle: "Core Storage",
    action: "Feeds rating data to",
    icon: Database,
    theme: "emerald"
  },
  {
    id: 3,
    title: "Simplified Rating UI",
    subtitle: "(Digital Nutrition Label)",
    action: "Displays easy-to-read safety tiers",
    icon: LayoutTemplate,
    theme: "blue"
  },
  {
    id: 4,
    title: "Non-Tech Savvy Parents",
    subtitle: "End User Decision",
    action: "Applies informed safety controls on",
    icon: UsersRound,
    theme: "amber"
  },
  {
    id: 5,
    title: "Child's Device",
    subtitle: "Target Endpoint",
    action: "Protected Status Active",
    icon: Smartphone,
    theme: "amber"
  }
];

// --- Helper component for individual Nodes ---
interface SystemNodeProps {
  data: FlowStep;
  isActive: boolean;
  onClick: () => void;
}
const SystemNode = ({ data, isActive, onClick }: SystemNodeProps) => {
  const Icon = data.icon;
  
  // Theme color maps for the wireframe aesthetic
  const themes = {
    amber: {
      border: isActive ? 'border-amber-400' : 'border-amber-900/50',
      bg: isActive ? 'bg-amber-400/10' : 'bg-slate-900/40',
      text: isActive ? 'text-amber-400' : 'text-slate-400',
      shadow: isActive ? 'shadow-[0_0_15px_rgba(251,191,36,0.2)]' : 'shadow-none',
      iconBg: isActive ? 'bg-amber-400/20' : 'bg-slate-800'
    },
    blue: {
      border: isActive ? 'border-blue-400' : 'border-blue-900/50',
      bg: isActive ? 'bg-blue-400/10' : 'bg-slate-900/40',
      text: isActive ? 'text-blue-400' : 'text-slate-400',
      shadow: isActive ? 'shadow-[0_0_15px_rgba(96,165,250,0.2)]' : 'shadow-none',
      iconBg: isActive ? 'bg-blue-400/20' : 'bg-slate-800'
    },
    emerald: {
      border: isActive ? 'border-emerald-400' : 'border-emerald-900/50',
      bg: isActive ? 'bg-emerald-400/10' : 'bg-slate-900/40',
      text: isActive ? 'text-emerald-400' : 'text-slate-400',
      shadow: isActive ? 'shadow-[0_0_15px_rgba(52,211,153,0.2)]' : 'shadow-none',
      iconBg: isActive ? 'bg-emerald-400/20' : 'bg-slate-800'
    }
  };

  const currentTheme = themes[data.theme as keyof typeof themes];

  return (
    <div 
      onClick={onClick}
      className={`relative w-full flex flex-col font-mono transition-all duration-500 cursor-pointer
        border ${currentTheme.border} ${currentTheme.bg} ${currentTheme.shadow} rounded-lg overflow-hidden backdrop-blur-sm`}
    >
      {/* Node Header */}
      <div className="p-4 flex items-start gap-3">
        <div className={`p-2 rounded-md ${currentTheme.iconBg} transition-colors duration-500`}>
          <Icon className={`w-5 h-5 ${currentTheme.text}`} />
        </div>
        <div className="flex-1">
          <h4 className={`text-sm font-bold tracking-tight mb-1 ${isActive ? 'text-slate-100' : 'text-slate-300'}`}>
            {data.title}
          </h4>
          <p className="text-[10px] text-slate-500 uppercase tracking-wider">
            {data.subtitle}
          </p>
        </div>
      </div>

      {/* Node Action/Output (The Wireframe "Edge")
      <div className={`px-4 py-2 text-xs border-t ${isActive ? currentTheme.border : 'border-slate-800/50'} 
        bg-slate-950/50 flex items-center justify-between`}>
        <span className={`${currentTheme.text} opacity-80`}>
          {data.id === 5 ? "STATUS: " : "OUTPUT: "} 
          {data.action}
        </span>
        {data.id !== 5 && (
          <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-current animate-pulse' : 'bg-slate-700'} ${currentTheme.text}`} />
        )}
      </div> */}
    </div>
  );
};

export default function InteractiveDiagram() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play flow animation
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= flowSteps.length - 1 ? 0 : prev + 1));
    }, 2500); // Change step every 2.5 seconds
    
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="w-full min-h-screen bg-[#020617] p-4 md:p-12 flex flex-col items-center justify-start pt-8 font-sans"
      style={{
        // Subtle blueprint/wireframe grid background
        backgroundImage: 'radial-gradient(circle at 1px 1px, #1e293b 1px, transparent 0)',
        backgroundSize: '24px 24px'
      }}
    >
      <div 
        className="w-full max-w-6xl flex flex-col gap-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Header & Controls */}

        {/* --- Vertical Diagram Layout --- */}
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto mt-4 md:mt-8 relative pb-8">
          
          {/* Top: External Input */}
          <SystemNode data={flowSteps[0]} isActive={activeStep === 0} onClick={() => setActiveStep(0)} />
          
          <div className="flex justify-center my-3 md:my-4">
             <ArrowDown className={`w-6 h-6 transition-colors duration-500 ${activeStep === 0 ? 'text-amber-400' : 'text-slate-700'}`} />
          </div>

          {/* Middle: The Core Platform Subgraph */}
          <div className="relative w-full border-2 border-dashed border-slate-700/50 bg-slate-900/20 rounded-2xl p-5 md:p-8 flex flex-col z-0 my-2">
            {/* Platform Label */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#020617] px-4 py-1 text-[10px] md:text-xs font-mono text-slate-400 border border-slate-700 uppercase tracking-widest rounded-full flex items-center gap-2 whitespace-nowrap">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
              The SafeSpace Standard
            </div>

            <SystemNode data={flowSteps[1]} isActive={activeStep === 1} onClick={() => setActiveStep(1)} />
            <div className="flex justify-center my-3"><ArrowDown className={`w-6 h-6 transition-colors duration-500 ${activeStep === 1 ? 'text-blue-400' : 'text-slate-700'}`} /></div>
            
            <SystemNode data={flowSteps[2]} isActive={activeStep === 2} onClick={() => setActiveStep(2)} />
            <div className="flex justify-center my-3"><ArrowDown className={`w-6 h-6 transition-colors duration-500 ${activeStep === 2 ? 'text-emerald-400' : 'text-slate-700'}`} /></div>
            
            <SystemNode data={flowSteps[3]} isActive={activeStep === 3} onClick={() => setActiveStep(3)} />
          </div>

          {/* Arrow out of Platform */}
          <div className="flex justify-center my-3 md:my-4">
             <ArrowDown className={`w-6 h-6 transition-colors duration-500 ${activeStep === 3 ? 'text-blue-400' : 'text-slate-700'}`} />
          </div>

          {/* Bottom: External Outputs */}
          <SystemNode data={flowSteps[4]} isActive={activeStep === 4} onClick={() => setActiveStep(4)} />
          
          <div className="flex justify-center my-3 md:my-4">
            <ArrowDown className={`w-6 h-6 transition-colors duration-500 ${activeStep === 4 ? 'text-amber-400' : 'text-slate-700'}`} />
          </div>
          
          <SystemNode data={flowSteps[5]} isActive={activeStep === 5} onClick={() => setActiveStep(5)} />

        </div>
      </div>
    </div>
  );
}