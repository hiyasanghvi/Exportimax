'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft } from 'lucide-react'

interface Params {
  id: string
}

export default function EditProductPage({ params }: { params: Params }) {
  const [isNew, setIsNew] = useState(params.id === 'new')
  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    name: '',
    categoryId: '',
    description: '',
    price: '',
    unit: '',
    featured: false,
  })

  useEffect(() => {
    if (!isNew) {
      // Mock fetch product
      setForm({
        name: 'Premium Rice',
        categoryId: 'grains',
        description: 'High-quality white basmati rice',
        price: '450',
        unit: 'MT',
        featured: true,
      })
      setLoading(false)
    }
  }, [isNew])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const method = isNew ? 'POST' : 'PUT'
      const res = await fetch(isNew ? '/api/products' : `/api/products/${params.id}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        // Redirect to products page
        window.location.href = '/admin/products'
      }
    } catch (error) {
      console.error('Error saving product:', error)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/products" className="text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold">
              {isNew ? 'Add New Product' : 'Edit Product'}
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading product...</p>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Product Name *</label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g., Premium Rice"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-2">Category *</label>
                <select
                  required
                  value={form.categoryId}
                  onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a category</option>
                  <option value="grains">Grains</option>
                  <option value="spices">Spices</option>
                  <option value="minerals">Minerals</option>
                  <option value="textiles">Textiles</option>
                  <option value="beverages">Beverages</option>
                  <option value="nuts">Nuts & Seeds</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">Description *</label>
                <textarea
                  required
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Product description"
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Price */}
                <div>
                  <label className="block text-sm font-medium mb-2">Price *</label>
                  <Input
                    required
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    placeholder="0.00"
                    step="0.01"
                  />
                </div>

                {/* Unit */}
                <div>
                  <label className="block text-sm font-medium mb-2">Unit *</label>
                  <select
                    required
                    value={form.unit}
                    onChange={(e) => setForm({ ...form, unit: e.target.value })}
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select unit</option>
                    <option value="MT">Metric Ton (MT)</option>
                    <option value="kg">Kilogram (kg)</option>
                    <option value="liter">Liter</option>
                    <option value="pieces">Pieces</option>
                    <option value="meter">Meter</option>
                  </select>
                </div>
              </div>

              {/* Featured */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={form.featured}
                  onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                  className="rounded border-border"
                />
                <label htmlFor="featured" className="text-sm font-medium">
                  Mark as Featured Product
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-6 border-t border-border">
                <Button asChild variant="outline">
                  <Link href="/admin/products">Cancel</Link>
                </Button>
                <Button
                  type="submit"
                  disabled={saving}
                  className="bg-primary hover:bg-primary/90 flex-1"
                >
                  {saving ? 'Saving...' : 'Save Product'}
                </Button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  )
}
