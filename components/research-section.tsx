import { BookOpenText, ShieldAlert, FileText, ChartNetwork, HandCoins, Flag } from 'lucide-react'

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
    image: '/diagram.png', 
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
]

export function ResearchSection() {
  // Check if the entire array is empty or undefined
  if (!researchItems || researchItems.length === 0) {
    return (
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 bg-background">
        <div className="mx-auto max-w-3xl text-center text-muted-foreground">
          <p>Research content is currently unavailable.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 bg-background">
      {/* max-w-3xl creates an optimal reading width for blog layouts */}
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16 sm:mb-24">
          {/* <h2 className="text-3xl font-bold text-primary sm:text-4xl tracking-tight">
            Background of the Issue
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore the findings and ethical frameworks driving our approach.
          </p> */}
        </div>

        {/* Vertical spacing for the scrolling blog feel */}
        <div className="space-y-20 lg:space-y-28">
          {researchItems.map((item) => {
            // Safety check in case an array item is null/undefined
            if (!item) return null;

            // Fallback to FileText icon if one isn't provided
            const Icon = item.icon || FileText; 

            return (
              <article key={item.id} className="group scroll-mt-24">
                <header className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    {/* Only render the title if it exists */}
                    {item.title && (
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                        {item.title}
                      </h3>
                    )}
                  </div>
                  {/* Only render the description if it exists */}
                  {item.description && (
                    <p className="text-lg sm:text-xl text-muted-foreground font-medium border-l-4 border-primary/50 pl-4 py-1">
                      {item.description}
                    </p>
                  )}
                </header>

                {/* OPTIONALLY RENDER THE IMAGE IF IT EXISTS */}
                {item.image && (
                  <div className="w-full rounded-2xl border border-border">
                    <img 
                      src={item.image} 
                      alt={item.title || 'Research image'} 
                      className="mx-auto object-contain"
                    />
                  </div>
                )}

                {/* ONLY RENDER AND SPLIT CONTENT IF IT EXISTS */}
                {item.content && (
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    {/* Splitting by double newlines to create proper paragraph spacing while maintaining list formats */}
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
                
                {/* Visual separator between blog posts, hidden on the last item */}
                <hr className="mt-20 lg:mt-28 border-border/60 group-last:hidden" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}