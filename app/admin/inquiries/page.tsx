'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Eye } from 'lucide-react'

interface Inquiry {
  id: string
  productId: string
  name: string
  email: string
  company: string
  quantity: number | null
  status: string
  createdAt: string
}

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchInquiries()
  }, [])

  const fetchInquiries = async () => {
    try {
      const res = await fetch('/api/inquiries')
      const data = await res.json()
      setInquiries(data)
    } catch (error) {
      console.error('Error fetching inquiries:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredInquiries = filter === 'all'
    ? inquiries
    : inquiries.filter(i => i.status === filter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800'
      case 'responded':
        return 'bg-green-100 text-green-800'
      case 'archived':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-muted text-muted-foreground'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold">Inquiries Management</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {[
            { value: 'all', label: 'All Inquiries', count: inquiries.length },
            { value: 'new', label: 'New', count: inquiries.filter(i => i.status === 'new').length },
            { value: 'responded', label: 'Responded', count: inquiries.filter(i => i.status === 'responded').length },
            { value: 'archived', label: 'Archived', count: inquiries.filter(i => i.status === 'archived').length },
          ].map((tab) => (
            <Button
              key={tab.value}
              variant={filter === tab.value ? 'default' : 'outline'}
              onClick={() => setFilter(tab.value)}
              className={filter === tab.value ? 'bg-primary hover:bg-primary/90' : ''}
            >
              {tab.label} ({tab.count})
            </Button>
          ))}
        </div>

        {/* Inquiries List */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-muted-foreground">
              Loading inquiries...
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No inquiries found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">From</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Company</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Quantity</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="border-b border-border hover:bg-muted/50 transition">
                      <td className="px-6 py-4 font-medium">{inquiry.name}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        <a href={`mailto:${inquiry.email}`} className="hover:text-primary">
                          {inquiry.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {inquiry.company || '—'}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {inquiry.quantity || '—'}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded capitalize ${getStatusColor(inquiry.status)}`}>
                          {inquiry.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {new Date(inquiry.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <Button asChild size="sm" variant="outline">
                          <Link href={`/admin/inquiries/${inquiry.id}`}>
                            <Eye className="w-4 h-4" />
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="mt-6 p-4 bg-card border border-border rounded-lg text-sm text-muted-foreground">
          <p>Total inquiries: {inquiries.length} | New: {inquiries.filter(i => i.status === 'new').length} | Responded: {inquiries.filter(i => i.status === 'responded').length}</p>
        </div>
      </main>
    </div>
  )
}
