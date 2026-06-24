'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'

export function ProductInquiryForm({ productId, productName }: { productId?: string; productName?: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    quantity: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          productId: productId || 'general',
        }),
      })
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', company: '', phone: '', quantity: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {productName && (
        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-sm font-medium text-primary">Product: {productName}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Name *</label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="border-border/50 focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Email *</label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="border-border/50 focus:border-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Company</label>
          <Input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company"
            className="border-border/50 focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Phone</label>
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1234567890"
            className="border-border/50 focus:border-primary"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-foreground">Quantity Needed</label>
        <Input
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="e.g., 1000 kg"
          className="border-border/50 focus:border-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your requirements..."
          rows={4}
          className="w-full px-3 py-2 border border-border/50 rounded-lg focus:outline-none focus:border-primary bg-background text-foreground resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-primary hover:bg-primary/90 text-white h-11 font-semibold"
      >
        {loading ? (
          'Sending...'
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Inquiry
          </>
        )}
      </Button>

      {submitted && (
        <div className="p-4 bg-secondary/10 border border-secondary/30 rounded-lg text-center">
          <p className="text-sm font-medium text-secondary">Thank you! We&apos;ll respond within 24 hours.</p>
        </div>
      )}
    </form>
  )
}
