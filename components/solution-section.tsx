'use client'

import { Card } from '@/components/ui/card'
import { Lightbulb, Users, TrendingUp } from 'lucide-react'

export function SolutionSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-4">
          SafeGuard Tiers Solution
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          A risk assessment platform built on community expertise and continuous improvement
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="p-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-chart-1/10 mb-6">
              <Lightbulb className="h-6 w-6 text-chart-1" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-3">Smart Risk Indexing</h3>
            <p className="text-sm text-muted-foreground">
              SafeGuard categorizes apps into five tiers (S, A, B, C, F) based on four key risk vectors: data privacy, predatory behavior, cyberbullying potential, and purchase manipulation.
            </p>
          </Card>

          <Card className="p-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-chart-4/10 mb-6">
              <Users className="h-6 w-6 text-chart-4" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-3">Trusted Guardians</h3>
            <p className="text-sm text-muted-foreground">
              Safety educators, parents, and digital literacy experts form a community verification network. Like Wikipedia, assessments are peer-reviewed and updated as threats evolve.
            </p>
          </Card>

          <Card className="p-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-chart-2/10 mb-6">
              <TrendingUp className="h-6 w-6 text-chart-2" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-3">Continuous Evolution</h3>
            <p className="text-sm text-muted-foreground">
              As new apps emerge and threats evolve, SafeGuard assessments are continuously updated. Real-world feedback improves accuracy and relevance over time.
            </p>
          </Card>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Feasibility & Sustainability</h3>
              <p className="text-muted-foreground text-sm mb-4">
                SafeGuard is designed as a scalable, community-maintained platform:
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">✓</span>
                  <span><strong>Low operational cost:</strong> Crowdsourced assessment model reduces reliance on expensive proprietary research</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">✓</span>
                  <span><strong>Scalable architecture:</strong> Open data format allows integration into parental control apps, school systems, and libraries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">✓</span>
                  <span><strong>Educator-friendly:</strong> Designed to support classroom discussions about digital literacy, not restrict access</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Limitations & Future Work</h3>
              <p className="text-muted-foreground text-sm mb-4">
                We acknowledge key limitations in the current prototype:
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-chart-3/20 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">!</span>
                  <span><strong>Assessment accuracy:</strong> Fully automated risk detection remains challenging; human expertise is critical</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-chart-3/20 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">!</span>
                  <span><strong>Real-time updates:</strong> Apps update faster than community verification; some risks emerge between assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-chart-3/20 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">!</span>
                  <span><strong>Cultural adaptation:</strong> Risk varies by region; requires localized assessment teams for relevance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
