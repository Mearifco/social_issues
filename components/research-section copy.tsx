'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ResearchModal } from './research-modal'
import { BarChart3, TrendingUp, Users, FileText } from 'lucide-react'

const researchItems = [
  {
    id: 'unicef',
    icon: BarChart3,
    title: 'UNICEF Kids Online Study',
    description: 'Global research on children\'s digital experiences',
    content: `The UNICEF Kids Online study provides comprehensive data on how children across the world experience the digital environment. Our analysis of this research reveals critical patterns in online risk exposure, particularly among children aged 9-16 in Southeast Asian markets including the Philippines.

Key findings:
- 45% of children reported exposure to harmful content
- Social media platforms remain the primary risk vector
- Parental awareness significantly correlates with safer online behavior
- Real-time monitoring and intervention are crucial for risk mitigation

This study formed the foundation for developing SafeGuard\'s risk assessment framework, specifically tailored to address regional vulnerabilities and cultural contexts.`
  },
  {
    id: 'tech-trends',
    icon: TrendingUp,
    title: 'Technology Adoption Trends',
    description: 'Philippine digital landscape and youth connectivity patterns',
    content: `The Philippines experiences one of the highest social media penetration rates globally, with an average of 4+ accounts per user. This unique digital behavior creates both opportunities and risks for child safety.

Regional insights:
- 87% of children aged 7-17 have internet access
- Mobile-first adoption dominates (92% access via smartphones)
- Average daily online time: 4.5 hours for school-age children
- Gaming platforms and social apps are primary engagement channels

SafeGuard\'s Tiers framework addresses these specific adoption patterns, recognizing that regional context fundamentally shapes risk assessment. Apps popular in Western markets may present different risk profiles in Philippine contexts.`
  },
  {
    id: 'threats',
    icon: Users,
    title: 'Emerging Threat Landscape',
    description: 'Analysis of online safety risks facing Philippine youth',
    content: `Contemporary threats extend beyond traditional categories. Our research identifies four primary risk vectors:

1. Predatory Behavior: Online grooming and sextortion scams specifically targeting economically vulnerable populations

2. Cyberbullying: Often interconnected with offline social dynamics, creating compounded psychological impact

3. Predatory Commerce: In-app purchases, gambling mechanics, and financial exploitation through games

4. Data Privacy: Unauthorized collection and monetization of personal information, particularly concerning for minors

Each threat category is weighted differently depending on app design, user demographics, and cultural factors. SafeGuard Tiers reflect these nuanced risk assessments rather than one-size-fits-all categorization.`
  },
  {
    id: 'framework',
    icon: FileText,
    title: 'Safety Framework Overview',
    description: 'Ethical principles guiding SafeGuard\'s design',
    content: `SafeGuard operates at the intersection of ACM Code of Ethics principles and utilitarian ethics:

ACM Code of Ethics (1.1 & 1.2):
- Contribute to human well-being and social good
- Avoid harm to stakeholders, particularly vulnerable populations

Utilitarian Approach:
- Maximize overall safety benefit to child users
- Balance parent/educator needs with child autonomy
- Ensure accessibility and equity in risk communication

Implementation Principles:
- Transparency: All assessments must be explainable to parents and educators
- Community-driven: Crowd-sourced verification through trusted guardians
- Continuous improvement: Regular updates based on emerging threats
- Accessibility: Cross-platform support and multiple language options

This framework ensures SafeGuard serves as an educational tool rather than restrictive technology.`
  }
]

export function ResearchSection() {
  const [selectedModal, setSelectedModal] = useState<string | null>(null)

  const selectedItem = researchItems.find(item => item.id === selectedModal)

  return (
    <>
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Research & Background
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Click any card to explore detailed research findings
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {researchItems.map((item) => {
              const Icon = item.icon
              return (
                <Card
                  key={item.id}
                  className="cursor-pointer transition-all hover:shadow-lg hover:border-accent group"
                  onClick={() => setSelectedModal(item.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Icon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm group-hover:text-foreground/80 transition-colors">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {selectedItem && (
        <ResearchModal
          isOpen={selectedModal !== null}
          onClose={() => setSelectedModal(null)}
          title={selectedItem.title}
          description={selectedItem.description}
          content={selectedItem.content}
          icon={selectedItem.icon}
        />
      )}
    </>
  )
}
