'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Mail, Phone, Building } from 'lucide-react'

interface Inquiry {
  id: string
  productId: string
  name: string
  email: string
  phone: string
  company: string
  quantity: number
  message: string
  status: string
  createdAt: string
}

interface Params {
  id: string
}

export default function InquiryDetailPage({ params }: { params: Params }) {
  const [inquiry, setInquiry] = useState<Inquiry | null>(null)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)

  useEffect(() => {
    // Mock fetch - In production, fetch from API
    const mockInquiry: Inquiry = {
      id: params.id,
      productId: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+91-9876543210',
      company: 'Global Traders Inc',
      quantity: 500,
      message: 'Very interested in bulk order of premium rice. Can you provide samples?',
      status: 'new',
      createdAt: new Date().toISOString(),
    }
    setInquiry(mockInquiry)
    setStatus(mockInquiry.status)
    setLoading(false)
  }, [params.id])

  const handleStatusChange = async (newStatus: string) => {
    setUpdating(true)
    try {
      // In production, this would update via API
      setStatus(newStatus)
      if (inquiry) {
        setInquiry({ ...inquiry, status: newStatus })
      }
    } catch (error) {
      console.error('Error updating status:', error)
    } finally {
      setUpdating(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading inquiry...</p>
      </div>
    )
  }

  if (!inquiry) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Inquiry not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/inquiries" className="text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold">Inquiry Details</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Inquiry Details */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">{inquiry.name}</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <a href={`mailto:${inquiry.email}`} className="text-primary hover:underline">
                      {inquiry.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <a href={`tel:${inquiry.phone}`} className="text-primary hover:underline">
                      {inquiry.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-muted-foreground" />
                    <span>{inquiry.company}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold mb-2">Inquiry Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Product ID:</span>
                    <span className="font-medium">{inquiry.productId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quantity Requested:</span>
                    <span className="font-medium">{inquiry.quantity} units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date Submitted:</span>
                    <span className="font-medium">
                      {new Date(inquiry.createdAt).toLocaleDateString()} at{' '}
                      {new Date(inquiry.createdAt).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold mb-3">Message</h3>
                <p className="text-muted-foreground whitespace-pre-wrap bg-muted p-4 rounded-lg">
                  {inquiry.message}
                </p>
              </div>
            </div>
          </div>

          {/* Status & Actions */}
          <div>
            <div className="bg-card border border-border rounded-lg p-6 space-y-6 sticky top-24">
              <div>
                <h3 className="font-semibold mb-3">Status</h3>
                <div className="space-y-2">
                  {['new', 'responded', 'archived'].map((s) => (
                    <button
                      key={s}
                      onClick={() => handleStatusChange(s)}
                      disabled={updating}
                      className={`w-full px-4 py-2 rounded-lg border text-sm font-medium transition capitalize ${
                        status === s
                          ? 'bg-primary text-white border-primary'
                          : 'bg-background border-border hover:border-primary'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold mb-3">Actions</h3>
                <div className="space-y-2">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90"
                    size="sm"
                  >
                    <a href={`mailto:${inquiry.email}`}>
                      Send Email
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-sm"
                    size="sm"
                  >
                    Download PDF
                  </Button>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg text-xs text-muted-foreground space-y-1">
                <p>
                  <span className="font-medium">ID:</span> {inquiry.id}
                </p>
                <p>
                  <span className="font-medium">Created:</span>{' '}
                  {new Date(inquiry.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
