import { BarChart3, TrendingUp, Users, FileText } from 'lucide-react'

const researchItems = [
  {
    id: 'unicef',
    icon: BarChart3,
    title: 'Background of the Issue',
    description: 'The Dangers of the internet for Children in the Philippines',
    content: `Imagine handing your 10-year-old the keys to a bustling, chaotic city where you don't know the language, the laws, or the dangerous neighborhoods. That’s exactly what happens every time we give a child an unmonitored smartphone. We've traded physical playgrounds for digital ones, but we forgot to build the fences.

In the Philippines, the reality of this digital shift is incredibly stark. According to a recent UNICEF Kids Online study, the average Filipino child is fully navigating the web by age 10. While the internet is a vital tool for their education and socialization, it is also a landscape riddled with hidden traps. Most alarming is a 2023 study by the International Justice Mission (IJM), which highlighted a horrifying statistic: the Philippines ranks second globally in online sexual abuse and exploitation of children (OSAEC), a crisis that surged dramatically during the pandemic.

But why is this happening? The core of the problem isn't just the existence of bad actors; it's the very architecture of the platforms our children use. Corporate IT policies and app designs have evolved much faster than modern parenting. Tech companies routinely bury predatory algorithms, unmoderated voice chat features, and aggressive data-harvesting trackers deep inside 50-page "Terms of Service" documents. No busy parent has the time—or often the technical background—to decipher them.

We are expecting non-tech-savvy parents to outsmart billion-dollar corporate algorithms. It’s an entirely unfair fight. Children's locations, gaming habits, and psychological vulnerabilities are being cataloged and sold to third-party data brokers without genuine consent. While agencies like the National Privacy Commission (NPC) are fighting back with 2024 advisories demanding "age-appropriate privacy notices," the gap between complex IT legislation and everyday parenting remains wide. True informed consent does not exist when digital risks are intentionally obscured by tech jargon. The system is broken, and we need a standardized policy to fix it.

`
  },
]

export function ResearchSection() {
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
            const Icon = item.icon
            return (
              <article key={item.id} className="group scroll-mt-24">
                <header className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-lg sm:text-xl text-muted-foreground font-medium border-l-4 border-primary/50 pl-4 py-1">
                    {item.description}
                  </p>
                </header>

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