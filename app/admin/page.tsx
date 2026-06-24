'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LogOut, Plus } from 'lucide-react'

interface DashboardStats {
  totalProducts: number
  totalInquiries: number
  newInquiries: number
  categories: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalInquiries: 0,
    newInquiries: 0,
    categories: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch dashboard stats
    const fetchStats = async () => {
      try {
        const [productsRes, inquiriesRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/inquiries'),
        ])

        const products = await productsRes.json()
        const inquiries = await inquiriesRes.json()

        setStats({
          totalProducts: products.length,
          totalInquiries: inquiries.length,
          newInquiries: inquiries.filter((i: any) => i.status === 'new').length,
          categories: new Set(products.map((p: any) => p.categoryId)).size,
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">Manage your export business</p>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/">
              <LogOut className="w-4 h-4 mr-2" />
              Exit Admin
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              label: 'Total Products',
              value: stats.totalProducts,
              color: 'text-blue-600',
              bgColor: 'bg-blue-50',
            },
            {
              label: 'Total Categories',
              value: stats.categories,
              color: 'text-green-600',
              bgColor: 'bg-green-50',
            },
            {
              label: 'Total Inquiries',
              value: stats.totalInquiries,
              color: 'text-purple-600',
              bgColor: 'bg-purple-50',
            },
            {
              label: 'New Inquiries',
              value: stats.newInquiries,
              color: 'text-orange-600',
              bgColor: 'bg-orange-50',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`${stat.bgColor} border border-border rounded-lg p-6`}
            >
              <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Admin Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Products Management */}
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Products</h2>
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                <Link href="/admin/products/new">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </Link>
              </Button>
            </div>

            <p className="text-muted-foreground mb-6">
              Manage your product catalog, add new products, update descriptions, and set pricing.
            </p>

            <div className="space-y-2">
              <Button asChild className="w-full justify-start" variant="outline">
                <Link href="/admin/products">View All Products</Link>
              </Button>
              <Button asChild className="w-full justify-start" variant="outline">
                <Link href="/admin/categories">Manage Categories</Link>
              </Button>
            </div>
          </div>

          {/* Inquiries Management */}
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Inquiries</h2>
              {stats.newInquiries > 0 && (
                <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {stats.newInquiries} New
                </span>
              )}
            </div>

            <p className="text-muted-foreground mb-6">
              View and respond to customer inquiries and RFQ requests. Track inquiry status and history.
            </p>

            <div className="space-y-2">
              <Button asChild className="w-full justify-start" variant="outline">
                <Link href="/admin/inquiries">View All Inquiries</Link>
              </Button>
              <Button asChild className="w-full justify-start" variant="outline">
                <Link href="/admin/inquiries?status=new">View New Inquiries</Link>
              </Button>
            </div>
          </div>

          {/* Company Information */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Company Information</h2>

            <p className="text-muted-foreground mb-6">
              Update your company profile, contact details, certifications, and about information.
            </p>

            <Button asChild className="w-full justify-start" variant="outline">
              <Link href="/admin/company">Edit Company Info</Link>
            </Button>
          </div>

          {/* Settings */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Settings</h2>

            <p className="text-muted-foreground mb-6">
              Configure site settings, email notifications, and general preferences.
            </p>

            <Button asChild className="w-full justify-start" variant="outline">
              <Link href="/admin/settings">Go to Settings</Link>
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-primary text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Quick Stats</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold">{stats.totalProducts}</p>
              <p className="text-sm opacity-90">Products Listed</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{stats.newInquiries}</p>
              <p className="text-sm opacity-90">Pending Responses</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{stats.categories}</p>
              <p className="text-sm opacity-90">Categories</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100+</p>
              <p className="text-sm opacity-90">Countries Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold">20+</p>
              <p className="text-sm opacity-90">Years Active</p>
            </div>
            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm opacity-90">Support Available</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
