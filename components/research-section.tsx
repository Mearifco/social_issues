import React, { useState } from 'react';
import { 
  BookOpenText, 
  ShieldAlert, 
  FileText, 
  ChartNetwork, 
  HandCoins, 
  Flag,
  User,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Send,
  CheckCircle2
} from 'lucide-react';
import { PrototypeDemo } from './prototype-demo';
import InteractiveDiagram from './interactive-diagram';

type ResearchItem = {
  id: string;
  icon?: any;
  title?: string;
  description?: string;
  metadata?: {
    source: string;
    year: string;
    author: string;
  };
  content?: string;
  image?: string;
};

const researchItems: ResearchItem[] = [
  {
    id: 'unicef',
    icon: ShieldAlert,
    title: 'Background of the Issue',
    description: 'The Dangers of the internet for Children in the Philippines',
    // metadata: {
    //   source: 'UNICEF Philippines',
    //   year: '2019',
    //   author: 'Shehzad Nooran'
    // },
    content: `Imagine handing your 10-year-old the keys to a bustling, chaotic city where you don't know the language, the laws, or the dangerous neighborhoods. That’s exactly what happens every time we give a child an unmonitored smartphone. We've traded physical playgrounds for digital ones, but we forgot to build the fences.

In the Philippines, the reality of this digital shift is incredibly stark. According to a recent UNICEF Kids Online study, the average Filipino child is fully navigating the web by age 10. While the internet is a vital tool for their education and socialization, it is also a landscape riddled with hidden traps. Most alarming is a 2023 study by the International Justice Mission (IJM), which highlighted a horrifying statistic: the Philippines ranks second globally in online sexual abuse and exploitation of children (OSAEC), a crisis that surged dramatically during the pandemic.

But why is this happening? The core of the problem isn't just the existence of bad actors; it's the very architecture of the platforms our children use. Corporate IT policies and app designs have evolved much faster than modern parenting. Tech companies routinely bury predatory algorithms, unmoderated voice chat features, and aggressive data-harvesting trackers deep inside 50-page "Terms of Service" documents. No busy parent has the time—or often the technical background—to decipher them.

We are expecting non-tech-savvy parents to outsmart billion-dollar corporate algorithms. It’s an entirely unfair fight. Children's locations, gaming habits, and psychological vulnerabilities are being cataloged and sold to third-party data brokers without genuine consent. While agencies like the National Privacy Commission (NPC) are fighting back with 2024 advisories demanding "age-appropriate privacy notices," the gap between complex IT legislation and everyday parenting remains wide. True informed consent does not exist when digital risks are intentionally obscured by tech jargon. The system is broken, and we need a standardized policy to fix it.`
  },
  {
    id: 'casestudy',
    icon: BookOpenText,
    title: 'Related Case Study',
    description: 'Young people in the Philippines speak out on online safety',
    metadata: {
      source: 'UNICEF Philippines',
      year: '2025',
      author: 'Charlette Inao'
    },
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

Instead of relying on the current standard where tech companies bury risks in 50-page Terms of Service, our policy mandates a standardized, community-regulated "Safety Rating System" for all platforms accessible by minors. Similar to how the ESRB rates video games, this policy dictates that apps and websites be categorized into easily digestible tiers for parents:`
  },
  {
    id: 'conclusion',
    icon: Flag,
    title: 'Conclusion',
    content: `Ultimately, the digital landscape should be a space for learning, connection, and growth—not a minefield of predatory algorithms and hidden data traps. The SafeSpace Standard is more than just a rating system; it is a necessary evolution in IT policy and digital governance. By bridging the gap between complex corporate jargon and everyday parenting, we can restore informed consent and hold technology companies accountable to ethical standards. We cannot simply disconnect our children from the digital world, but by implementing community-driven transparency, we can finally give parents the map they need to navigate it safely. Technology must be designed to serve human well-being, not to exploit the vulnerabilities of our youngest generation for corporate profit.`
  },
];

const safetyTiers = [
  { rank: 'S', name: 'Safe', color: 'bg-green-500', desc: 'Very safe for minors; strong protection and strict rules.' },
  { rank: 'A', name: 'Low Risk', color: 'bg-emerald-400', desc: 'Generally safe, but still needs basic guidance from parents.' },
  { rank: 'B', name: 'Moderate Risk', color: 'bg-yellow-500', desc: 'Some risks like cyberbullying or data collection; needs supervision.' },
  { rank: 'C', name: 'High Risk', color: 'bg-red-500', desc: 'High chance of harmful content or unsafe interactions.' },
  { rank: 'D', name: 'Severe Risk', color: 'bg-[#8B4513]', desc: 'Very unsafe with serious threats such as predators, explicit content, or major privacy risks; strong exposure to danger.' },
  { rank: 'F', name: 'Do Not Use', color: 'bg-zinc-900 dark:bg-black', desc: 'Extremely unsafe; not recommended at all and should be avoided completely.' },
];

const authors = [
  { name: 'Rjun Agao Nueva', role: 'Researcher/Programmer', initials: 'RN', image: '/nue.jfif' },
  { name: 'Mary Rose L. Fallarco', role: 'Developer/Designer', initials: 'MF', image: '/mar.jpg' }
];

export function ResearchSection() {
  const [feedbackState, setFeedbackState] = useState('idle'); // idle | submitting | success

  interface FeedbackFormEvent extends React.FormEvent<HTMLFormElement> {}

  type FeedbackState = 'idle' | 'submitting' | 'success';

  const handleFeedbackSubmit = (e: FeedbackFormEvent): void => {
    e.preventDefault();
    setFeedbackState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFeedbackState('success');
      e.currentTarget.reset();
      // Reset success message after 5 seconds
      setTimeout(() => setFeedbackState('idle'), 5000);
    }, 1000);
  };

  const references = [
    {
      title: 'The scale of harm: Online sexual abuse and exploitation of children in the Philippines',
      author: 'International Justice Mission',
      year: '2023',
      source: 'ijm.org',
      url: 'https://www.ijm.org'
    },
    {
      title: 'Child-oriented transparency and data protection guidelines',
      author: 'National Privacy Commission',
      year: '2024',
      source: 'privacy.gov.ph',
      url: 'https://privacy.gov.ph'
    },
    {
      title: 'Republic Act No. 11930 (OSAEC Law)',
      author: 'Republic of the Philippines',
      year: '2022',
      source: 'officialgazette.gov.ph',
      url: 'https://www.officialgazette.gov.ph'
    },
    {
      title: 'Children and malicious user interface design',
      author: 'Schäfer, R. et al.',
      year: '2024',
      source: 'ACM Proceedings',
      url: 'https://doi.org/10.1145/3679318.3685358'
    },
    {
      title: 'Online sexual abuse and exploitation of children in the Philippines and related digital safety reports',
      author: 'UNICEF Philippines',
      year: '2021–2025',
      source: 'UNICEF',
      url: 'https://www.unicef.org/philippines/press-releases/safer-online-environment-every-child'
    }
  ];

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
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 bg-background text-foreground">
      <div className="mx-auto max-w-4xl">
        
        {/* Articles Section */}
        <div className="space-y-20 lg:space-y-28">
          {researchItems.map((item) => {
            if (!item) return null;
            const Icon = item.icon || FileText; 

            return (
              <article key={item.id} className="group scroll-mt-24">
                <header className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    {item.title && (
                      <h3 className="text-2xl sm:text-3xl font-bold">
                        {item.title}
                      </h3>
                    )}
                  </div>
                  
                  {item.metadata?.author && (
                    <p className="text-base text-muted-foreground mb-4 font-medium italic">
                      By {item.metadata.author}
                    </p>
                  )}

                  {item.description && (
                    <p className="text-lg sm:text-xl text-muted-foreground font-medium border-l-4 border-primary/50 pl-4 py-1">
                      {item.description}
                    </p>
                  )}
                </header>

                {item.id === 'diagram' ? <InteractiveDiagram /> : item.image && (
                  <div className="w-full rounded-2xl border border-border overflow-hidden bg-muted/20 mb-8">
                    <img 
                      src={item.image} 
                      alt={item.title || 'Research image'} 
                      className="mx-auto object-contain w-full"
                    />
                  </div>
                )}

                { }
                {item.content && (
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    {item.content.split('\n\n').map((paragraph, index) => (
                      <p 
                        key={index} 
                        className="whitespace-pre-wrap text-foreground/85 leading-relaxed text-base sm:text-lg mb-6 last:mb-0"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Custom UI rendering specifically for the Proposed Solution Tiers */}
                {item.id === 'proposedsolution' && (
                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    {safetyTiers.map((tier) => (
                      <div 
                        key={tier.rank} 
                        className="flex flex-col sm:flex-row gap-4 p-5 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-xl font-black text-white shadow-inner ${tier.color}`}>
                          {tier.rank}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{tier.name}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {tier.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div className="sm:col-span-2 mt-4 p-4 bg-muted/40 rounded-xl border border-border text-sm text-muted-foreground italic text-center">
                      To enforce this policy, the SafeSpace Standard platform provides a "Nutrition Label" for digital safety, scoring platforms specifically on: Data Privacy Risk, Predator Risk, Cyberbullying Risk, and In-App Purchase Traps.
                    </div>
                  </div>
                )}
                
                <hr className="mt-20 lg:mt-28 border-border/60 group-last:hidden" />
              </article>
            );
          })}
        </div>

        {/* Interactive Prototype Demo Section */}
        <div className="my-20 lg:my-28 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 bg-muted/20 py-12 lg:py-16">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">Interactive Prototype</h3>
            <p className="text-muted-foreground">Explore our SafeSpace Standard Tiers Platform in action</p>
          </div>
          <PrototypeDemo />
        </div>

        {}
        <hr className="my-16 border-border" />
        
        <section className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2">Meet the Authors</h3>
            <p className="text-muted-foreground">The team behind the SafeSpace Framework</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 sm:gap-24">
            {authors.map((author, idx) => (
              <div key={idx} className="flex flex-col items-center text-center max-w-[200px]">
                <div className="w-32 h-32 mb-4 rounded-full bg-primary/10 border-4 border-background shadow-lg flex items-center justify-center text-3xl font-bold text-primary overflow-hidden relative">
                  {author.image ? (
                    <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
                  ) : (
                    author.initials
                  )}
                </div>
                <h4 className="font-bold text-lg">{author.name}</h4>
                <p className="text-sm text-muted-foreground font-medium">{author.role}</p>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="bg-muted/30 rounded-3xl p-6 sm:p-10 border border-border">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Feedback Form */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">We Value Your Feedback</h3>
                <p className="text-muted-foreground text-sm">
                  Have thoughts on our framework? Send us your comments and suggestions to help us improve.
                </p>
              </div>
              
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name (Optional)</label>
                    <input 
                      id="name"
                      type="text" 
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="juan@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us what you think..."
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={feedbackState !== 'idle'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {feedbackState === 'idle' && (
                    <><Send className="w-4 h-4" /> Submit Feedback</>
                  )}
                  {feedbackState === 'submitting' && 'Sending...'}
                  {feedbackState === 'success' && (
                    <><CheckCircle2 className="w-4 h-4" /> Sent successfully!</>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:border-l lg:border-border lg:pl-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Email</p>
                    <a href="mailto:safespaceframework@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                      safespaceframework@gmail.com
                    </a>
                    <br />
                    <a href="mailto:support.safespace@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                      support.safespace@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Phone</p>
                    <p className="text-muted-foreground text-sm">+63 906 604 4939</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Address</p>
                    <p className="text-muted-foreground text-sm">
                      Bongtod<br />
                      Tandag City, Surigao del Sur<br />
                      Philippines
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-2">
                  <div className="p-2 rounded-lg bg-blue-600/10 text-blue-600 shrink-0">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Follow Us</p>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      SafeSpace Framework
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <hr className="my-16 border-border" />

        <section className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2">References</h3>
            <p className="text-muted-foreground">Sources cited in this research.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {references.map((ref, index) => (
              <div key={index} className="flex flex-col p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-grow">
                  <h4 className="font-bold text-base mb-2">{ref.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{ref.author}</p>
                </div>
                <div>
                  {ref.url ? (
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium">
                      Source: {ref.source}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm font-medium">Source: {ref.source}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
}