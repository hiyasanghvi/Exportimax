import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold">About Big Exports</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Mission Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            At Big Exports, we are committed to connecting premium agricultural and mineral producers with international buyers. Our mission is to facilitate global trade by providing high-quality products that meet international standards and deliver exceptional value to our partners.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe in building long-term relationships based on trust, reliability, and excellence in every transaction.
          </p>
        </section>

        {/* Vision Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To become a globally recognized leader in agricultural and mineral exports, known for our unwavering commitment to quality, sustainability, and customer satisfaction.
          </p>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Quality',
                description: 'We ensure every product meets the highest international standards',
              },
              {
                title: 'Integrity',
                description: 'Transparent dealings and honest communication with all partners',
              },
              {
                title: 'Reliability',
                description: 'On-time delivery and consistent performance is our promise',
              },
              {
                title: 'Sustainability',
                description: 'Responsible sourcing with environmental and social consideration',
              },
            ].map((value) => (
              <div key={value.title} className="bg-card border border-border rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-lg">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Why Choose Big Exports</h2>
          <ul className="space-y-4 text-lg text-muted-foreground">
            <li className="flex gap-4">
              <span className="text-primary font-bold flex-shrink-0">✓</span>
              <span>Over 20 years of experience in international trade and logistics</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold flex-shrink-0">✓</span>
              <span>Certified sourcing and quality assurance processes</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold flex-shrink-0">✓</span>
              <span>Network of reliable partners in 100+ countries</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold flex-shrink-0">✓</span>
              <span>Competitive pricing without compromising quality</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold flex-shrink-0">✓</span>
              <span>Customized solutions for unique business requirements</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold flex-shrink-0">✓</span>
              <span>24/7 customer support and dedicated account management</span>
            </li>
          </ul>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Certifications & Accreditations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              'ISO 9001:2015',
              'ISO 22000:2018',
              'FSSAI Certified',
              'Organic Certified',
            ].map((cert) => (
              <div key={cert} className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="font-semibold text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Contact our team to discuss your export requirements and discover how we can serve your business.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
