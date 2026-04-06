'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { LucideIcon } from 'lucide-react'

interface ResearchModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  content: string
  icon: LucideIcon
}

export function ResearchModal({
  isOpen,
  onClose,
  title,
  description,
  content,
  icon: Icon,
}: ResearchModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <Icon className="h-6 w-6 text-accent flex-shrink-0" />
            <DialogTitle className="text-2xl">{title}</DialogTitle>
          </div>
          <DialogDescription className="text-base">{description}</DialogDescription>
        </DialogHeader>
        <div className="mt-6 space-y-4 text-foreground">
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
