'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MessageCircle, Send, X } from 'lucide-react'

export function AIExportAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    {
      role: 'assistant',
      content: 'Hello! I&apos;m your Export Assistant. How can I help you today? I can answer questions about our products, pricing, export process, shipping, and more.',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setLoading(true)

    try {
      // Simulated AI responses - replace with actual AI API call
      const responses: { [key: string]: string } = {
        product: 'We export premium agricultural commodities, spices, beverages, minerals, and construction materials. Our products are ISO certified and meet international quality standards.',
        price: 'Our pricing is highly competitive and based on current market rates, quantity, and destination. Please submit an inquiry for detailed quotes.',
        export: 'Our export process includes: 1) Submit Inquiry → 2) Receive Quote → 3) Documentation → 4) Quality Check → 5) Shipment → 6) Delivery. We handle everything professionally!',
        shipping: 'We provide door-to-door delivery to over 150 countries. Shipping times range from 2-7 weeks depending on destination and quantity.',
        contact: 'You can reach our team via email at info@bigexports.com or call +91-XXXXX-XXXXX. Our team is available 24/7 to assist you.',
        links: 'Quick Links: Home, About Us, Products, FAQs, Gallery. Company: Our Team, Careers, Blogs, Testimonials, Contact Us. Products: Agri Commodities, Spices & Powders, Beverage Ingredients, Oil & Plantation Produce, Minerals & Construction Materials.',
        default: 'Thank you for your question! For more specific information, please visit our website or contact our team directly.',
      }

      let response = responses.default
      const lowercaseInput = userMessage.toLowerCase()

      if (lowercaseInput.includes('product')) response = responses.product
      else if (lowercaseInput.includes('price') || lowercaseInput.includes('cost')) response = responses.price
      else if (lowercaseInput.includes('export') || lowercaseInput.includes('process')) response = responses.export
      else if (lowercaseInput.includes('ship') || lowercaseInput.includes('delivery')) response = responses.shipping
      else if (lowercaseInput.includes('contact')) response = responses.contact
      else if (lowercaseInput.includes('link') || lowercaseInput.includes('menu') || lowercaseInput.includes('navigation')) response = responses.links

      setTimeout(() => {
        setMessages((prev) => [...prev, { role: 'assistant', content: response }])
        setLoading(false)
      }, 500)
    } catch (error) {
      console.error('Error sending message:', error)
      setLoading(false)
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Open AI Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-border/50 w-96 max-w-[calc(100vw-24px)] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold">Export Assistant</h3>
            <p className="text-xs opacity-90">Always here to help</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-white/20 p-1 rounded transition"
          aria-label="Close assistant"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 h-96">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-primary text-white rounded-br-none'
                  : 'bg-card text-foreground border border-border/50 rounded-bl-none'
              }`}
            >
              <p className="text-sm">{msg.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-card text-foreground border border-border/50 px-4 py-2 rounded-lg rounded-bl-none">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-border/50 p-4 space-y-2">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 border-border/50 focus:border-primary"
            disabled={loading}
          />
          <Button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="bg-primary hover:bg-primary/90 text-white px-3"
            size="sm"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">Try asking about products, pricing, shipping, or quick links</p>
      </div>
    </div>
  )
}
