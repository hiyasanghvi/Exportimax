'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Factory, Leaf, Zap } from 'lucide-react'

const industries = [
  {
    id: 1,
    name: 'Food & Beverage',
    description: 'Premium agricultural products for global food manufacturers and distributors',
    icon: Leaf,
    products: ['Spices', 'Grains', 'Rice', 'Tea', 'Coffee'],
    clients: '1200+',
    certifications: ['FSSC 22000', 'ISO 22000', 'Organic Certified']
  },
  {
    id: 2,
    name: 'Manufacturing',
    description: 'High-quality mineral resources and raw materials for industrial production',
    icon: Factory,
    products: ['Iron Ore', 'Granite', 'Marble', 'Quartz', 'Minerals'],
    clients: '800+',
    certifications: ['ISO 9001', 'ISO 14001', 'Mine Safety Certified']
  },
  {
    id: 3,
    name: 'Textiles & Apparel',
    description: 'Premium natural fibers and finished textile products for global brands',
    icon: Zap,
    products: ['Cotton', 'Silk', 'Jute', 'Textiles', 'Fabrics'],
    clients: '600+',
    certifications: ['GOTS', 'OEKO-TEX', 'Fair Trade Certified']
  }
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation - reused from home */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">BE</span>
            </div>
            <span className="font-bold text-xl">Big Exports</span>
          </Link>
          <div className="hidden md:flex gap-10 items-center">
            <Link href="/products" className="text-foreground/80 hover:text-primary transition font-medium">
              Products
            </Link>
            <Link href="/" className="text-foreground/80 hover:text-primary transition font-medium">
              Home
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-primary transition font-medium">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold">Industries We Serve</h1>
          <p className="text-lg text-muted-foreground">
            Trusted by leading manufacturers, distributors, and retailers across multiple sectors
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto w-full">
        <div className="space-y-12">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <div key={industry.id} className="card-premium p-10 space-y-8">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">{industry.name}</h2>
                        <p className="text-muted-foreground">{industry.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-accent text-lg font-bold">{industry.clients} Clients</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Key Products</h3>
                    <div className="space-y-2">
                      {industry.products.map((prod) => (
                        <p key={prod} className="text-foreground">{prod}</p>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {industry.certifications.map((cert) => (
                        <span key={cert} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Button asChild className="bg-gradient-to-r from-primary to-accent hover:shadow-lg">
                  <Link href="/products">
                    View {industry.name} Products <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Your Industry Not Listed?</h2>
          <p className="text-lg text-muted-foreground">
            We supply products and materials to countless industries. Contact us to discuss your specific needs.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent h-14">
            <Link href="/contact">Get Industry-Specific Quotes</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto text-center text-sm text-background/70">
          <p>&copy; 2024 Big Exports. Premium Global Trade Partner.</p>
        </div>
      </footer>
    </div>
  )
}
