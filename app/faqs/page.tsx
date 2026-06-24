'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is the minimum order quantity?',
      answer: 'The minimum order quantity varies by product. For most products, we accept orders from 500 kg onwards. For bulk orders, we offer special pricing and custom arrangements.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, letters of credit (LC), and other standard international payment methods. Payment terms can be negotiated based on order volume and buyer profile.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping time depends on the destination. Typically, shipments to Asia take 2-4 weeks, to Europe 4-6 weeks, and to Americas 5-7 weeks from the port of loading.'
    },
    {
      question: 'Do you provide samples?',
      answer: 'Yes, we provide product samples at a nominal cost. Samples help you verify quality before placing bulk orders. Please contact our team for sample requests.'
    },
    {
      question: 'What certifications do your products have?',
      answer: 'Our products are ISO certified and meet international quality standards including FSSAI, APEDA, and various country-specific requirements. Detailed certifications are available upon request.'
    },
    {
      question: 'Can you customize products according to our requirements?',
      answer: 'Yes, we can customize packaging and product specifications based on your needs. Please discuss your requirements with our team, and we will provide a customized quote.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We ensure all products meet quality standards before shipping. In case of quality issues, we offer replacement or refund within 30 days of delivery.'
    },
    {
      question: 'Do you offer logistics support?',
      answer: 'Yes, we handle all export documentation and can arrange logistics. We work with trusted shipping partners to ensure safe and timely delivery.'
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
            <Link href="/faqs" className="text-primary font-medium">FAQs</Link>
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
            <Link href="/faqs" className="block text-primary font-medium">FAQs</Link>
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
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">Find answers to common questions about our products, services, and export process.</p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 max-w-4xl mx-auto w-full">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-primary transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openFaq === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Still have questions?</h2>
            <p className="text-lg text-muted-foreground">Our team is ready to help. Get in touch with us today.</p>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Contact Us</Link>
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
