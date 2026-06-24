'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Edit2, Trash2, Plus } from 'lucide-react'

interface Product {
  id: string
  name: string
  categoryId: string
  price: string
  unit: string
  featured: boolean
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products')
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      try {
        // In a real app, you'd call an API endpoint to delete
        setProducts(products.filter(p => p.id !== id))
      } catch (error) {
        console.error('Error deleting product:', error)
      }
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
            <h1 className="text-2xl font-bold">Products Management</h1>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/admin/products/new">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-6">
          <Input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Products Table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-muted-foreground">
              Loading products...
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-muted-foreground mb-4">No products found</p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/admin/products/new">
                  Create First Product
                </Link>
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Category</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Price</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Unit</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b border-border hover:bg-muted/50 transition">
                      <td className="px-6 py-4">
                        <span className="font-medium">{product.name}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {product.categoryId}
                      </td>
                      <td className="px-6 py-4 font-semibold text-primary">
                        ${product.price}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {product.unit}
                      </td>
                      <td className="px-6 py-4">
                        {product.featured ? (
                          <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded">
                            Featured
                          </span>
                        ) : (
                          <span className="inline-block bg-muted text-muted-foreground text-xs px-2 py-1 rounded">
                            Regular
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 flex gap-2">
                        <Button asChild size="sm" variant="outline">
                          <Link href={`/admin/products/${product.id}`}>
                            <Edit2 className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(product.id)}
                          className="text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-sm text-muted-foreground">
          Showing {filteredProducts.length} of {products.length} products
        </div>
      </main>
    </div>
  )
}
