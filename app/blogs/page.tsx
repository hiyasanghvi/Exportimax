'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Calendar, User } from 'lucide-react'
import { useState } from 'react'

export default function BlogsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const blogs = [
    {
      id: 1,
      title: 'Top 5 Agricultural Exports from India in 2024',
      excerpt: 'Discover the leading agricultural products India exports and their global impact on trade.',
      date: 'March 15, 2024',
      author: 'John Anderson',
      category: 'Agriculture',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Navigating International Export Regulations',
      excerpt: 'A comprehensive guide to understanding export compliance and regulatory requirements.',
      date: 'March 10, 2024',
      author: 'Sarah Mitchell',
      category: 'Regulations',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Sustainable Mineral Extraction Practices',
      excerpt: 'How modern mining is adopting sustainable practices for environmental protection.',
      date: 'March 5, 2024',
      author: 'David Kumar',
      category: 'Minerals',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Spice Trade: An Ancient History Continues',
      excerpt: 'Exploring the rich history and current significance of the global spice trade.',
      date: 'February 28, 2024',
      author: 'Emma Richardson',
      category: 'Spices',
      image: 'https://images.unsplash.com/photo-1596040999023-7e4bb5a59a6c?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Digital Transformation in Export Logistics',
      excerpt: 'How technology is revolutionizing the way exports are managed and tracked.',
      date: 'February 22, 2024',
      author: 'Michael Chen',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Quality Assurance in Export Products',
      excerpt: 'Best practices for maintaining exceptional quality throughout the export process.',
      date: 'February 15, 2024',
      author: 'Lisa Wong',
      category: 'Quality',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
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
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground">Insights & Updates</h1>
          <p className="text-lg text-muted-foreground">Latest news, trends, and insights from the export industry.</p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition">
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">{blog.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground line-clamp-2">{blog.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">{blog.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      {blog.author}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
