import React, { useState, useEffect } from 'react';
import { 
  BookOpenText, ShieldAlert, FileText, ChartNetwork, HandCoins, Flag,
  Users, ShieldCheck, Database, LayoutTemplate, UsersRound, Smartphone, 
  ArrowRight, ArrowDown, Activity, Pause, Play
} from 'lucide-react';

// --- Flow Data Configuration for Diagram ---
const flowSteps: Array<{ id: number; title: string; subtitle: string; action: string; icon: typeof Users; theme: 'amber' | 'blue' | 'emerald' }> = [
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
const SystemNode = ({ data, isActive, onClick }: { data: typeof flowSteps[0]; isActive: boolean; onClick: () => void }) => {
  const Icon = data.icon;
  
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

  const currentTheme = themes[data.theme];

  return (
    <div 
      onClick={onClick}
      className={`relative w-full flex flex-col font-mono transition-all duration-500 cursor-pointer
        border ${currentTheme.border} ${currentTheme.bg} ${currentTheme.shadow} rounded-lg overflow-hidden backdrop-blur-sm`}
    >
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
      <div className={`px-4 py-2 text-xs border-t ${isActive ? currentTheme.border : 'border-slate-800/50'} 
        bg-slate-950/50 flex items-center justify-between`}>
        <span className={`${currentTheme.text} opacity-80`}>
          {data.id === 5 ? "STATUS: " : "OUTPUT: "} 
          {data.action}
        </span>
        {data.id !== 5 && (
          <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-current animate-pulse' : 'bg-slate-700'} ${currentTheme.text}`} />
        )}
      </div>
    </div>
  );
};

// --- Interactive Diagram Component ---
const InteractiveDiagram = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= flowSteps.length - 1 ? 0 : prev + 1));
    }, 2500); 
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="w-full min-h-[600px] bg-[#020617] p-4 md:p-8 flex flex-col items-center justify-center font-sans"
      style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #1e293b 1px, transparent 0)',
        backgroundSize: '24px 24px'
      }}
    >
      <div 
        className="w-full max-w-6xl flex flex-col gap-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex flex-col md:flex-row justify-between items-center bg-slate-900/80 border border-slate-800 p-4 rounded-xl backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Activity className="w-6 h-6 text-blue-500" />
            <div>
              <h2 className="text-xl font-bold text-slate-100 font-mono tracking-tight">System Flow Diagram</h2>
              <p className="text-xs text-slate-400 font-mono uppercase">SafeSpace Platform Architecture</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-slate-950 p-2 px-4 rounded-lg border border-slate-800 font-mono text-xs">
            <span className="text-slate-400">STATUS:</span>
            <span className="text-blue-400 font-bold flex items-center gap-2 w-24">
              {isPaused ? <><Pause className="w-3 h-3" /> PAUSED</> : <><Play className="w-3 h-3" /> RUNNING</>}
            </span>
            <div className="flex gap-1 ml-2">
              {flowSteps.map((step, i) => (
                <div 
                  key={i} 
                  onClick={() => setActiveStep(i)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                    activeStep === i ? 'bg-blue-400 scale-125' : 'bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 relative">
          <div className="flex flex-col justify-start lg:pt-12 relative z-10">
            <div className="relative">
              <SystemNode data={flowSteps[0]} isActive={activeStep === 0} onClick={() => setActiveStep(0)} />
              <div className="hidden lg:flex absolute top-1/2 -right-12 transform -translate-y-1/2 items-center">
                <div className={`h-0.5 w-8 border-t border-dashed transition-colors duration-500 ${activeStep === 0 ? 'border-amber-400' : 'border-slate-700'}`} />
                <ArrowRight className={`w-4 h-4 transition-colors duration-500 ${activeStep === 0 ? 'text-amber-400' : 'text-slate-700'}`} />
              </div>
            </div>
            <div className="flex justify-center my-4 lg:hidden">
               <ArrowDown className={`w-5 h-5 transition-colors duration-500 ${activeStep === 0 ? 'text-amber-400' : 'text-slate-700'}`} />
            </div>
          </div>

          <div className="relative border-2 border-dashed border-slate-700/50 bg-slate-900/20 rounded-2xl p-6 lg:p-8 flex flex-col gap-6 z-0">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 lg:-translate-x-0 lg:left-6 bg-[#020617] px-4 py-1 text-[10px] font-mono text-slate-400 border border-slate-700 uppercase tracking-widest rounded-full flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              The SafeSpace Standard Platform
            </div>

            <SystemNode data={flowSteps[1]} isActive={activeStep === 1} onClick={() => setActiveStep(1)} />
            <div className="flex justify-center -my-2"><ArrowDown className={`w-5 h-5 transition-colors duration-500 ${activeStep === 1 ? 'text-blue-400' : 'text-slate-700'}`} /></div>
            
            <SystemNode data={flowSteps[2]} isActive={activeStep === 2} onClick={() => setActiveStep(2)} />
            <div className="flex justify-center -my-2"><ArrowDown className={`w-5 h-5 transition-colors duration-500 ${activeStep === 2 ? 'text-emerald-400' : 'text-slate-700'}`} /></div>
            
            <div className="relative">
              <SystemNode data={flowSteps[3]} isActive={activeStep === 3} onClick={() => setActiveStep(3)} />
              <div className="hidden lg:flex absolute top-1/2 -right-14 transform -translate-y-1/2 items-center z-20">
                <div className={`h-0.5 w-10 border-t border-dashed transition-colors duration-500 ${activeStep === 3 ? 'border-blue-400' : 'border-slate-700'}`} />
                <ArrowRight className={`w-4 h-4 transition-colors duration-500 ${activeStep === 3 ? 'text-blue-400' : 'text-slate-700'}`} />
              </div>
            </div>

            <div className="flex justify-center my-2 lg:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full">
               <ArrowDown className={`w-5 h-5 transition-colors duration-500 ${activeStep === 3 ? 'text-blue-400' : 'text-slate-700'}`} />
            </div>
          </div>

          <div className="flex flex-col justify-end lg:pb-12 mt-8 lg:mt-0 relative z-10">
            <SystemNode data={flowSteps[4]} isActive={activeStep === 4} onClick={() => setActiveStep(4)} />
            <div className="flex justify-center my-4">
              <ArrowDown className={`w-5 h-5 transition-colors duration-500 ${activeStep === 4 ? 'text-amber-400' : 'text-slate-700'}`} />
            </div>
            <SystemNode data={flowSteps[5]} isActive={activeStep === 5} onClick={() => setActiveStep(5)} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Research Content Data ---
const researchItems = [
  {
    id: 'unicef',
    icon: ShieldAlert,
    title: 'Background of the Issue',
    description: 'The Dangers of the internet for Children in the Philippines',
    content: `Imagine handing your 10-year-old the keys to a bustling, chaotic city where you don't know the language, the laws, or the dangerous neighborhoods. That’s exactly what happens every time we give a child an unmonitored smartphone. We've traded physical playgrounds for digital ones, but we forgot to build the fences.

In the Philippines, the reality of this digital shift is incredibly stark. According to a recent UNICEF Kids Online study, the average Filipino child is fully navigating the web by age 10. While the internet is a vital tool for their education and socialization, it is also a landscape riddled with hidden traps. Most alarming is a 2023 study by the International Justice Mission (IJM), which highlighted a horrifying statistic: the Philippines ranks second globally in online sexual abuse and exploitation of children (OSAEC), a crisis that surged dramatically during the pandemic.

But why is this happening? The core of the problem isn't just the existence of bad actors; it's the very architecture of the platforms our children use. Corporate IT policies and app designs have evolved much faster than modern parenting. Tech companies routinely bury predatory algorithms, unmoderated voice chat features, and aggressive data-harvesting trackers deep inside 50-page "Terms of Service" documents. No busy parent has the time—or often the technical background—to decipher them.

We are expecting non-tech-savvy parents to outsmart billion-dollar corporate algorithms. It’s an entirely unfair fight. Children's locations, gaming habits, and psychological vulnerabilities are being cataloged and sold to third-party data brokers without genuine consent. While agencies like the National Privacy Commission (NPC) are fighting back with 2024 advisories demanding "age-appropriate privacy notices," the gap between complex IT legislation and everyday parenting remains wide. True informed consent does not exist when digital risks are intentionally obscured by tech jargon. The system is broken, and we need a standardized policy to fix it.

`
  },
  {
    id: 'casestudy',
    icon: BookOpenText,
    title: 'Related Case Study',
    description: 'Young people in the Philippines speak out on online safety',
    content: `To illustrate the real-world consequences of opaque IT policies and the gap in parental awareness, we look directly at the lived experiences of Filipino youth. In a recent dialogue documented by UNICEF Philippines titled "Young people in the Philippines speak out on online safety," youth advocates highlighted the severe, everyday consequences of corporate negligence. During these consultations, young Filipinos reported persistent exposure to cyberbullying and harassment because platforms fail to enforce their own guidelines with effective, easily accessible reporting mechanisms. Furthermore, they emphasized the dangers of weak default privacy settings on social media and gaming apps, which frequently leave "public" profiles exposed to strangers, unwanted solicitations, and potential grooming. The resounding message from these youth advocates was an urgent demand for platforms to implement transparent, easy-to-understand safety features—proving that current IT architectures are failing to help families distinguish between secure environments and dangerous ones.`
  },
  {
    id: 'diagram',
    icon: ChartNetwork,
    title: 'Prototype Diagram',
  },
  {
    id: 'proposedsolution',
    icon: HandCoins,
    title: 'Proposed Solution',
    description: 'Community-Driven Transparency Policy Framework',
    content: `Our proposed technical solution is a Community-Driven Transparency Policy Framework, which is operationalized and enforced through a platform called The SafeSpace Standard.

Instead of relying on the current standard where tech companies bury risks in 50-page Terms of Service, our policy mandates a standardized, community-regulated "Safety Rating System" for all platforms accessible by minors. Similar to how the ESRB rates video games, this policy dictates that apps and websites be categorized into easily digestible tiers for parents:

🟢 Tier S (Safe): Policy compliance includes strict age verification, default private accounts for minors, no targeted ads, and robust active moderation (e.g., Messenger Kids).

🟡 Tier B (Caution): Policy compliance shows moderate risk. Collects some data, user-to-user messaging exists but has parental controls, moderate risk of cyberbullying.

🔴 Tier F (Danger): Policy violation zone. High prevalence of predators, unmoderated explicit content, aggressive data mining, anonymous chatting (e.g., Omegle alternatives).

To enforce this policy, the SafeSpace Standard platform provides a "Nutrition Label" for digital safety, scoring platforms specifically on: Data Privacy Risk, Predator Risk, Cyberbullying Risk, and In-App Purchase Traps.`
  },
  {
    id: 'conclusion',
    icon: Flag,
    title: 'Conclusion',
    content: `Ultimately, the digital landscape should be a space for learning, connection, and growth—not a minefield of predatory algorithms and hidden data traps. The SafeSpace Standard is more than just a rating system; it is a necessary evolution in IT policy and digital governance. By bridging the gap between complex corporate jargon and everyday parenting, we can restore informed consent and hold technology companies accountable to ethical standards. We cannot simply disconnect our children from the digital world, but by implementing community-driven transparency, we can finally give parents the map they need to navigate it safely. Technology must be designed to serve human well-being, not to exploit the vulnerabilities of our youngest generation for corporate profit.`
  },
];

// --- Main Export Component ---
export default function ResearchSection() {
  if (!researchItems || researchItems.length === 0) {
    return (
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 bg-background">
        <div className="mx-auto max-w-3xl text-center text-muted-foreground">
          <p>Research content is currently unavailable.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 bg-background">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16 sm:mb-24"></div>

        <div className="space-y-20 lg:space-y-28">
          {researchItems.map((item) => {
            if (!item) return null;
            const Icon = item.icon || FileText; 

            return (
              <article key={item.id} className="group scroll-mt-24">
                <header className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    {item.title && (
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                        {item.title}
                      </h3>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-lg sm:text-xl text-muted-foreground font-medium border-l-4 border-primary/50 pl-4 py-1">
                      {item.description}
                    </p>
                  )}
                </header>

                {item.id === 'diagram' && (
                  <div className="w-full my-8 rounded-2xl border border-border overflow-hidden bg-[#020617] shadow-xl">
                    <InteractiveDiagram />
                  </div>
                )}

                {/* Image rendering removed - not part of research items */}

                {item.content && (
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    {item.content.split('\n\n').map((paragraph, index) => (
                      <p 
                        key={index} 
                        className="whitespace-pre-wrap text-foreground/80 leading-relaxed text-base sm:text-lg mb-6 last:mb-0"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
                
                <hr className="mt-20 lg:mt-28 border-border/60 group-last:hidden" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}