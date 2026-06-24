'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, ArrowLeft } from 'lucide-react'
import { DownloadCatalogue } from '@/components/download-catalogue'

interface Product {
  id: string
  name: string
  categoryId: string
  description: string
  price: string
  unit: string
  featured: boolean
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch products
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setFilteredProducts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (!search) {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      )
      setFilteredProducts(filtered)
    }
  }, [search, products])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border sticky top-0 z-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <ArrowLeft className="w-5 h-5 hover:text-primary transition" />
            </Link>
            <h1 className="text-3xl font-bold">Our Products</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Download Catalogue */}
            <div className="lg:col-span-1">
              <DownloadCatalogue />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No products found matching your search.</p>
            <Button asChild variant="outline">
              <button onClick={() => setSearch('')}>Clear search</button>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition"
              >
                <div className="h-48 bg-muted" />
                <div className="p-6 space-y-4">
                  {product.featured && (
                    <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="text-lg font-bold text-primary">
                        ${product.price}/{product.unit}
                      </p>
                    </div>
                    <Button asChild size="sm">
                      <Link href={`/products/${product.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 py-12 border-t border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Did Not Find What You&apos;re Looking For?</h2>
            <p className="text-muted-foreground mb-6">
              Contact us for custom product inquiries or bulk orders. Our team can help you find exactly what you need.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contact">
                Request Custom Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
