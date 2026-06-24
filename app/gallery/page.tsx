'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const galleryImages = [
  { id: 1, category: 'Products', title: 'Premium Spices Collection', description: 'Hand-selected premium spices' },
  { id: 2, category: 'Facilities', title: 'Modern Processing Facility', description: 'State-of-the-art facility' },
  { id: 3, category: 'Quality', title: 'Quality Control Lab', description: 'Rigorous testing procedures' },
  { id: 4, category: 'Products', title: 'Organic Grains', description: 'Certified organic products' },
  { id: 5, category: 'Operations', title: 'Packaging Excellence', description: 'Professional packaging' },
  { id: 6, category: 'Facilities', title: 'Warehouse Storage', description: 'Climate-controlled storage' },
]

const categories = ['All', 'Products', 'Facilities', 'Quality', 'Operations']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">BE</span>
            </div>
            <div>
              <span className="font-bold text-xl hidden sm:inline text-foreground">Big Exports</span>
              <p className="text-xs text-muted-foreground hidden md:inline-block">Delivering Quality, Globally</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-foreground/80 hover:text-primary transition font-medium">Home</Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition font-medium">About Us</Link>
            <Link href="/products" className="text-foreground/80 hover:text-primary transition font-medium">Products</Link>
            <Link href="/faqs" className="text-foreground/80 hover:text-primary transition font-medium">FAQs</Link>
            <Link href="/gallery" className="text-primary font-medium">Gallery</Link>
            <Link href="/contact" className="text-foreground/80 hover:text-primary transition font-medium">Contact</Link>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Let's work together</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setSelectedCategory('All')}>
            {/* Mobile menu placeholder */}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground">Our Gallery</h1>
          <p className="text-lg text-muted-foreground">A visual showcase of our products, facilities, and operations.</p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 flex justify-center gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground'
                : 'bg-card border border-border hover:border-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Gallery Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="card-premium overflow-hidden group cursor-pointer animate-fade-in"
            >
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition">
                <div className="text-center space-y-4">
                  <div className="text-6xl">📸</div>
                  <p className="text-sm text-muted-foreground">{image.category}</p>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-bold text-lg group-hover:text-primary transition">{image.title}</h3>
                <p className="text-sm text-muted-foreground">{image.description}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  {image.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No images in this category</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Partner with Us?</h2>
          <p className="text-lg text-muted-foreground">
            See firsthand the quality and professionalism behind every shipment
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent h-14">
            <Link href="/contact">Schedule a Virtual Tour</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">BE</span>
                </div>
                <span className="font-bold text-lg text-primary">BigBang Exports</span>
              </Link>
              <p className="text-foreground font-semibold mb-2">Delivering Quality, Globally - BBE.</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-primary hover:text-secondary transition">Instagram</a>
                <a href="#" className="text-primary hover:text-secondary transition">YouTube</a>
                <a href="#" className="text-primary hover:text-secondary transition">Facebook</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
                <li><Link href="/products" className="hover:text-primary transition">Products</Link></li>
                <li><Link href="/faqs" className="hover:text-primary transition">FAQs</Link></li>
                <li><Link href="/gallery" className="hover:text-primary transition">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/team" className="hover:text-primary transition">Our Team</Link></li>
                <li><a href="#" className="hover:text-primary transition">Careers</a></li>
                <li><Link href="/blogs" className="hover:text-primary transition">Blogs</Link></li>
                <li><Link href="/testimonials" className="hover:text-primary transition">Testimonials</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Agri Commodities</a></li>
                <li><a href="#" className="hover:text-primary transition">Spices & Powders</a></li>
                <li><a href="#" className="hover:text-primary transition">Beverage Ingredients</a></li>
                <li><a href="#" className="hover:text-primary transition">Oil & Plantation Produce</a></li>
                <li><a href="#" className="hover:text-primary transition">Minerals & Construction</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; BigBang Exports. All Rights Reserved.</p>
            <p>Designed & Developed by <a href="#" className="text-primary hover:underline">Hirola InfoTech Solutions Pvt Ltd</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
