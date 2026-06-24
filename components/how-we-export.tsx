// ✅ Paste this INSIDE your page.tsx
// Replace the <HowWeExport /> section with this inline version
// OR keep as a separate component - your choice

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FileText, Clock, FileIcon, Package, Truck, Handshake } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    title: 'Submit Inquiry',
    desc: 'Provide product specifications, quantity, and delivery requirements',
    whatHappens: 'Share your requirements with us via our inquiry form or direct contact',
    icon: FileText,
    // ✅ Picsum - always works, no config needed, no hotlink block
    image: 'https://picsum.photos/seed/inquiry/800/600',
    imageAlt: 'Submit Inquiry',
  },
  {
    title: 'Receive Quote',
    desc: 'Get competitive pricing with detailed terms and availability',
    whatHappens: 'Our team sends a detailed quotation within 24 hours',
    icon: Clock,
    image: 'https://picsum.photos/seed/quote/800/600',
    imageAlt: 'Receive Quote',
  },
  {
    title: 'Documentation',
    desc: 'Complete all export documentation and secure buyer approval',
    whatHappens: 'We handle all paperwork: certificates, invoices, compliance docs',
    icon: FileIcon,
    image: 'https://picsum.photos/seed/docs/800/600',
    imageAlt: 'Documentation',
  },
  {
    title: 'Quality Check',
    desc: 'Rigorous inspection and packing with international standards',
    whatHappens: 'Every batch undergoes strict quality inspection before dispatch',
    icon: Package,
    image: 'https://picsum.photos/seed/quality/800/600',
    imageAlt: 'Quality Check',
  },
  {
    title: 'Shipment',
    desc: 'Arrange logistics and provide tracking information',
    whatHappens: 'We coordinate with freight partners and share real-time tracking',
    icon: Truck,
    image: 'https://picsum.photos/seed/shipment/800/600',
    imageAlt: 'Shipment',
  },
  {
    title: 'Delivery',
    desc: 'Door-to-door delivery with proof of shipment',
    whatHappens: 'Goods arrive safely with full delivery confirmation and documentation',
    icon: Handshake,
    image: 'https://picsum.photos/seed/delivery/800/600',
    imageAlt: 'Delivery',
  },
]

export function HowWeExport() {
  const [activeStep, setActiveStep] = useState(0)
  const step = steps[activeStep]
  const progress = Math.round(((activeStep + 1) / steps.length) * 100)
  const StepIcon = step.icon

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-200 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%`, background: 'linear-gradient(to right, #1e3a8a, #16a34a)' }}
        />
      </div>

      {/* Step Tabs */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-8">
        {steps.map((s, i) => {
          const Icon = s.icon
          const isActive = i === activeStep
          const isDone = i < activeStep
          return (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all duration-300 text-center
                ${isActive ? 'border-[#1e3a8a] bg-[#eff6ff] shadow-md'
                  : isDone ? 'border-green-400 bg-green-50'
                  : 'border-gray-200 bg-gray-50 hover:border-gray-300'}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center
                ${isActive ? 'bg-[#1e3a8a] text-white'
                  : isDone ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-500'}`}>
                {isDone ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : <Icon className="w-5 h-5" />}
              </div>
              <span className={`text-xs font-semibold leading-tight ${isActive ? 'text-[#1e3a8a]' : 'text-gray-500'}`}>
                {s.title}
              </span>
            </button>
          )
        })}
      </div>

      {/* Step Detail Card */}
      <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left: Image */}
          <div className="relative h-64 md:h-auto min-h-[300px] overflow-hidden bg-gray-100">
            <img
              key={activeStep}
              src={step.image}
              alt={step.imageAlt}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                Step {activeStep + 1} of {steps.length}
              </span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="p-8 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1e3a8a] flex items-center justify-center flex-shrink-0 shadow-md">
                  <StepIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                    Step {activeStep + 1} of {steps.length}
                  </p>
                  <h3 className="text-2xl font-extrabold text-[#1e3a8a]">{step.title}</h3>
                </div>
              </div>

              <p className="text-gray-600 text-base leading-relaxed">{step.desc}</p>

              <div className="bg-[#f0fdf4] border border-green-200 rounded-xl p-4">
                <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">What Happens</p>
                <p className="text-sm text-gray-700 leading-relaxed">{step.whatHappens}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-green-500 transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
                <span className="text-sm font-bold text-green-600 whitespace-nowrap">{progress}% Complete</span>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setActiveStep((p) => Math.max(0, p - 1))}
                disabled={activeStep === 0}
                className="flex-1 py-2.5 rounded-lg border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                ← Previous
              </button>
              {activeStep < steps.length - 1 ? (
                <button
                  onClick={() => setActiveStep((p) => Math.min(steps.length - 1, p + 1))}
                  className="flex-1 py-2.5 rounded-lg bg-[#1e3a8a] text-white font-semibold text-sm hover:bg-[#1e40af] transition shadow-md"
                >
                  Next →
                </button>
              ) : (
                <Button asChild className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-lg shadow-md">
                  <Link href="/contact">Get Started →</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Step dots */}
      <div className="flex justify-center gap-2 mt-6">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeStep ? 'w-6 h-2.5 bg-[#1e3a8a]'
              : i < activeStep ? 'w-2.5 h-2.5 bg-green-400'
              : 'w-2.5 h-2.5 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}