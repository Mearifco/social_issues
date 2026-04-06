'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

export function EthicalSection() {
  return (
    <section className="bg-card px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 border-y border-border">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl mb-4">
          Ethical Framework
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          SafeGuard is grounded in established ethical principles from computer science and moral philosophy
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-8 bg-background border-0 shadow-none">
            <div className="flex items-start gap-4 mb-4">
              <CheckCircle2 className="h-6 w-6 text-chart-1 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  ACM Code of Ethics (Principles 1.1 & 1.2)
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>1.1 Contribute to society and human well-being:</strong> SafeGuard actively promotes child safety and family well-being through evidence-based risk communication.
                  </p>
                  <p>
                    <strong>1.2 Avoid harm:</strong> Every assessment prioritizes harm prevention, particularly for vulnerable populations. Parental/educator tools are designed for empowerment, not surveillance.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-background border-0 shadow-none">
            <div className="flex items-start gap-4 mb-4">
              <CheckCircle2 className="h-6 w-6 text-chart-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Utilitarian Ethics
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>Maximizing aggregate welfare:</strong> SafeGuard balances the safety needs of individual children with broader digital participation rights.
                  </p>
                  <p>
                    <strong>Context-dependent assessment:</strong> Risk is evaluated relative to age, maturity, and regional context—never through a single universal standard.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg border border-secondary/20">
          <h3 className="text-xl font-bold text-primary mb-4">Design Principles</h3>
          <ul className="grid gap-3 text-sm text-foreground sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-accent rounded-full"></span>
              Transparency in all assessments and recommendations
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-accent rounded-full"></span>
              Community-driven verification through trusted guardians
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-accent rounded-full"></span>
              Child autonomy balanced with protective oversight
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-accent rounded-full"></span>
              Equitable access across all socioeconomic backgrounds
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
