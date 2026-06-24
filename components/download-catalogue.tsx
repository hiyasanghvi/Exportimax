'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download, FileText } from 'lucide-react'

export function DownloadCatalogue() {
  const [downloading, setDownloading] = useState(false)

  const handleDownload = async () => {
    setDownloading(true)
    try {
      // In a real app, this would fetch from your server
      const response = await fetch('/catalogue.pdf', { method: 'GET' })
      
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'Big-Exports-Catalogue.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      } else {
        // Fallback: Create a simple mock PDF
        alert('Catalogue PDF not found. Please contact us for the catalogue.')
      }
    } catch (error) {
      console.error('Download error:', error)
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="w-full">
      <Button
        onClick={handleDownload}
        disabled={downloading}
        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white h-14 font-semibold text-base"
      >
        <Download className="w-5 h-5 mr-2" />
        {downloading ? 'Preparing...' : 'Download Full Catalogue (PDF)'}
      </Button>
      <p className="text-xs text-muted-foreground mt-2 text-center">
        <FileText className="w-4 h-4 inline mr-1" />
        Complete product listing with specifications and pricing
      </p>
    </div>
  )
}
