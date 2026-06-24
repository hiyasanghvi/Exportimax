'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function TeamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const team = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      role: 'Founder & CEO',
      bio: 'With 20+ years in international trade, Rajesh leads BigBang Exports vision to deliver quality globally.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Priya Verma',
      role: 'Head of Operations',
      bio: 'Priya oversees all export operations ensuring timely and quality delivery to clients worldwide.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Vikram Singh',
      role: 'Export Manager',
      bio: 'Vikram manages our export logistics and maintains relationships with global shipping partners.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Meera Patel',
      role: 'Quality Assurance Director',
      bio: 'Meera ensures all products meet stringent international quality standards before export.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Arjun Kumar',
      role: 'Sales Manager',
      bio: 'Arjun builds and maintains client relationships, understanding their specific export needs.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Anjali Singh',
      role: 'Compliance Officer',
      bio: 'Anjali ensures all exports comply with international regulations and documentation requirements.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
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
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground">Our Team</h1>
          <p className="text-lg text-muted-foreground">Meet the talented professionals behind BigBang Exports success.</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="text-center space-y-4">
                <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-100">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
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
            <h2 className="text-4xl font-bold mb-4">Join Our Growing Team</h2>
            <p className="text-lg text-muted-foreground">We are always looking for talented individuals to join our mission of delivering quality exports globally.</p>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">View Careers</Link>
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
