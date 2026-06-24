'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ProductInquiryForm } from '@/components/product-inquiry-form'

interface Params {
  id: string
}

export default function ProductDetailPage({ params }: { params: Params }) {
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: params.id,
          ...inquiry,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
        setInquiry({ name: '', email: '', phone: '', company: '', quantity: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/products" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-5 h-5" />
            Back to Products
          </Link>
          <h1 className="text-3xl font-bold">Premium Product</h1>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className="h-96 bg-muted rounded-lg border border-border" />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Premium Product Title</h2>
              <p className="text-muted-foreground mb-4">
                High-quality certified product meeting international standards
              </p>
              <p className="text-3xl font-bold text-primary">$1,200 per Unit</p>
            </div>

            <div className="space-y-4 py-6 border-t border-b border-border">
              <div>
                <h3 className="font-semibold mb-2">Product Details</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Minimum Order: 100 units</li>
                  <li>• Unit: Metric Ton (MT)</li>
                  <li>• Certification: ISO 9001:2015</li>
                  <li>• Shelf Life: 24 months</li>
                  <li>• Packaging: Standard export packaging</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Specifications</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Premium quality agricultural product sourced from certified producers. Meets all international standards and quality requirements. Available for immediate shipment with flexible payment terms.
              </p>
            </div>

            <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
              <a href="#inquiry">Request Quote</a>
            </Button>
          </div>
        </div>

        {/* Inquiry Form */}
        <div id="inquiry" className="mt-20 max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-2">Request a Quote</h2>
            <p className="text-muted-foreground mb-6">
              Fill out the form below and our team will get back to you with a customized quote.
            </p>
            <ProductInquiryForm productId={params.id} productName="Premium Product" />
          </div>
        </div>
      </div>
    </div>
  )
}
