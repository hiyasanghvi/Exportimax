'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false)
  const phoneNumber = '919999999999' // Replace with actual WhatsApp number
  const message = 'Hi! I am interested in your premium export products.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Window */}
      {open && (
        <div className="absolute bottom-20 right-0 w-80 bg-card rounded-2xl border border-border shadow-2xl p-6 space-y-4 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Chat with us</h3>
              <p className="text-xs text-muted-foreground">Typically replies instantly</p>
            </div>
            <button onClick={() => setOpen(false)} className="p-1">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-foreground">Hi there! 👋 How can we help you today?</p>
            <Button
              asChild
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition flex items-center justify-center animate-floating"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  )
}
