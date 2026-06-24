'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Globe, Award, TrendingUp, Shield } from 'lucide-react'
import { useState } from 'react'
import { NewsletterSignup } from '@/components/newsletter-signup'
import { HowWeExport } from '@/components/how-we-export'
import { DownloadCatalogue } from '@/components/download-catalogue'
import { ProductInquiryForm } from '@/components/product-inquiry-form'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Premium Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-lg">BE</span>
            </div>
            <div>
              <span className="font-bold text-xl hidden sm:inline text-foreground">Big Exports</span>
              <p className="text-xs text-muted-foreground hidden md:inline-block">Premium Global Trade</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground/80 hover:text-primary transition font-medium">Home</Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition font-medium">About Us</Link>
            <Link href="/products" className="text-foreground/80 hover:text-primary transition font-medium">Products</Link>
            <Link href="/industries" className="text-foreground/80 hover:text-primary transition font-medium">Industries</Link>
            <Link href="/blogs" className="text-foreground/80 hover:text-primary transition font-medium">Resources</Link>
            <Link href="/contact" className="text-foreground/80 hover:text-primary transition font-medium">Contact Us</Link>
            <Button asChild className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full px-6">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 p-4 space-y-4 bg-background/95">
            <Link href="/products" className="block text-foreground hover:text-primary font-medium">Products</Link>
            <Link href="/about" className="block text-foreground hover:text-primary font-medium">About</Link>
            <Link href="/contact" className="block text-foreground hover:text-primary font-medium">Contact</Link>
            <Button asChild className="w-full bg-gradient-to-r from-primary to-accent">
              <Link href="/products#inquiry">Request Quote</Link>
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24 lg:py-32 min-h-[90vh] flex items-center">
        <img
          src="/images/hero.jpg"
          alt="BigBang Exports"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-block px-5 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
            <span className="text-white font-medium text-sm">
              Trusted Export Partner • 150+ Countries • ISO Certified
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
            Exporting India's Finest
            <br />
            <span className="text-[#22C55E]">Agricultural & Mineral Products</span>
            <br />
            Worldwide
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Delivering premium quality agricultural commodities, minerals, and industrial products to global markets with
            trusted sourcing, competitive pricing, and reliable export logistics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white h-14 px-8 text-base">
              <Link href="/contact">Request A Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link href="/products">Explore Products</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20">
            <div><h3 className="text-3xl font-bold text-white">20+</h3><p className="text-white/80 text-sm">Years Experience</p></div>
            <div><h3 className="text-3xl font-bold text-white">150+</h3><p className="text-white/80 text-sm">Countries Served</p></div>
            <div><h3 className="text-3xl font-bold text-white">5000+</h3><p className="text-white/80 text-sm">Global Clients</p></div>
            <div><h3 className="text-3xl font-bold text-white">50+</h3><p className="text-white/80 text-sm">Product Categories</p></div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Our Product Categories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Premium selections across agriculture and minerals, all certified for international standards</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Agricultural Products', 'Mineral Exports', 'Spices & Herbs', 'Grains & Cereals', 'Textiles', 'Metals & Alloys'].map((cat, i) => (
              <div key={i} className="card-premium p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mx-auto flex items-center justify-center">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg">{cat}</h3>
                <p className="text-sm text-muted-foreground">Premium quality with international certifications</p>
                <Link href="/products" className="text-primary hover:text-accent transition font-semibold text-sm">View Collection →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Why Global Traders Choose Us</h2>
            <p className="text-muted-foreground text-lg">Unmatched quality, reliability, and expertise in international trade</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Award, title: 'ISO Certified Quality', description: 'All products meet international standards with rigorous quality control throughout the supply chain.' },
              { icon: TrendingUp, title: 'Competitive Pricing', description: 'Direct from source pricing without middlemen. Volume discounts and flexible payment terms available.' },
              { icon: Shield, title: 'Secure Transactions', description: 'Multiple payment options, secure documentation, and buyer protection for every transaction.' },
              { icon: Globe, title: 'Global Logistics', description: 'Reliable shipping partners with tracking to any destination. Door-to-door delivery available.' }
            ].map((feature, i) => (
              <div key={i} className="flex gap-6 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition">
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ How We Export - Interactive Stepper WITH IMAGES (Our Export Process simple list is REMOVED) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">How We Export</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A transparent, step-by-step guide to our seamless export process</p>
          </div>
          <HowWeExport />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Client Testimonials</h2>
            <p className="text-muted-foreground text-lg">Trusted by hundreds of international traders</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Ahmed Hassan', company: 'Gulf Trading Co.', testimonial: 'Exceptional quality and reliable delivery every time. Our partnership has been seamless for 5 years.' },
              { name: 'Lisa Chen', company: 'Asian Imports Ltd.', testimonial: 'Professional team, competitive prices, and outstanding customer service. Highly recommended!' },
              { name: 'Roberto Silva', company: 'Brazilian Commerce', testimonial: "The best export partner we've worked with. Consistent quality and transparent pricing." }
            ].map((item, i) => (
              <div key={i} className="card-premium p-8 space-y-4">
                <div className="flex gap-1">{[...Array(5)].map((_, j) => <span key={j} className="text-accent">★</span>)}</div>
                <p className="italic text-foreground/90">{item.testimonial}</p>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Ready to Partner with Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with our team today to explore premium export opportunities tailored to your business needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent h-14 text-base hover:shadow-2xl transition">
              <Link href="/contact">Start Your Journey</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 text-base hover:bg-primary/10">
              <Link href="/products">Browse Catalog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border/50">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Stay Updated</h2>
            <p className="text-muted-foreground">Get the latest export market insights and premium opportunities</p>
          </div>
          <NewsletterSignup />
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-white border-t border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
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
              <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-primary transition">About Us</Link></li>
                <li><Link href="/products" className="hover:text-primary transition">Products</Link></li>
                <li><Link href="/faqs" className="hover:text-primary transition">FAQs</Link></li>
                <li><Link href="/gallery" className="hover:text-primary transition">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/team" className="hover:text-primary transition">Our Team</Link></li>
                <li><a href="#" className="hover:text-primary transition">Careers</a></li>
                <li><Link href="/blogs" className="hover:text-primary transition">Blogs</Link></li>
                <li><Link href="/testimonials" className="hover:text-primary transition">Testimonials</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Products</h4>
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