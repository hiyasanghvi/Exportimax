'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)

  try {
    const response = await fetch('https://formspree.io/f/xzdldooq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        type: 'Contact Form',
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
      }),
    })

    if (response.ok) {
      setSubmitted(true)

      setForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })

      setTimeout(() => setSubmitted(false), 5000)
    } else {
      alert('Failed to send message')
    }
  } catch (error) {
    console.error(error)
    alert('Something went wrong')
  } finally {
    setLoading(false)
  }
}

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-muted-foreground text-lg mt-2">
            Get in touch with our team for inquiries, quotes, or partnerships
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            </div>

            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'info@bigexports.com',
                subtext: 'We respond within 24 hours',
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+91-XXXXX-XXXXX',
                subtext: 'Available 24/7',
              },
              {
                icon: MapPin,
                title: 'Address',
                content: 'Export Plaza, Commercial District',
                subtext: 'City, Country - PIN CODE',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="space-y-2">
                  <div className="flex gap-3">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.subtext}</p>
                    </div>
                  </div>
                  <p className="ml-9 font-medium">{item.content}</p>
                </div>
              )
            })}

            {/* Business Hours */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-4">Business Hours</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <Input
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={6}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" required className="rounded border-border" />
                    <span>
                      I agree to the privacy policy and terms & conditions
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
