'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function TestimonialsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      company: 'Gulf Trading Co.',
      role: 'Import Manager',
      testimonial: 'Exceptional quality and reliable delivery every time. Our partnership with BigBang Exports has been seamless for 5 years. Highly recommend for anyone looking for trusted export partners.',
      rating: 5
    },
    {
      id: 2,
      name: 'Lisa Chen',
      company: 'Asian Imports Ltd.',
      role: 'CEO',
      testimonial: 'Professional team, competitive prices, and outstanding customer service. They understand the complexities of international trade and handle everything with expertise.',
      rating: 5
    },
    {
      id: 3,
      name: 'Roberto Silva',
      company: 'Brazilian Commerce',
      role: 'Procurement Director',
      testimonial: 'The best export partner we have worked with. Consistent quality and transparent pricing. Their commitment to excellence is evident in every transaction.',
      rating: 5
    },
    {
      id: 4,
      name: 'Maria Garcia',
      company: 'European Trading Group',
      role: 'Supply Chain Manager',
      testimonial: 'Reliable, professional, and always willing to go the extra mile. BigBang Exports has become our preferred supplier for agricultural products.',
      rating: 5
    },
    {
      id: 5,
      name: 'James Wilson',
      company: 'North American Imports',
      role: 'Business Manager',
      testimonial: 'From order placement to delivery, everything is handled efficiently. Their attention to detail and quality control is unmatched in the industry.',
      rating: 5
    },
    {
      id: 6,
      name: 'Yuki Tanaka',
      company: 'Tokyo Trading Corporation',
      role: 'Sourcing Manager',
      testimonial: 'Outstanding service and product quality. BigBang Exports is our trusted partner for mineral exports. Highly professional and reliable.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white text-foreground">
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
            <Link href="/gallery" className="text-foreground/80 hover:text-primary transition font-medium">Gallery</Link>
            <Link href="/contact" className="text-foreground/80 hover:text-primary transition font-medium">Contact</Link>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Let's work together</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 p-4 space-y-4 bg-white">
            <Link href="/" className="block text-foreground hover:text-primary font-medium">Home</Link>
            <Link href="/about" className="block text-foreground hover:text-primary font-medium">About Us</Link>
            <Link href="/products" className="block text-foreground hover:text-primary font-medium">Products</Link>
            <Link href="/faqs" className="block text-foreground hover:text-primary font-medium">FAQs</Link>
            <Link href="/gallery" className="block text-foreground hover:text-primary font-medium">Gallery</Link>
            <Link href="/contact" className="block text-foreground hover:text-primary font-medium">Contact</Link>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/contact">Let's work together</Link>
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground">What Our Clients Say</h1>
          <p className="text-lg text-muted-foreground">Trusted by hundreds of international traders and businesses worldwide.</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 border border-gray-200 rounded-lg p-8 space-y-4 hover:shadow-lg transition">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-foreground italic leading-relaxed">&quot;{testimonial.testimonial}&quot;</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary font-semibold">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Ready to experience the difference?</h2>
            <p className="text-lg text-muted-foreground">Join hundreds of satisfied clients who trust BigBang Exports for their international trade needs.</p>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Get Started Today</Link>
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
