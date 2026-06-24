import { NextResponse } from 'next/server'

// Mock data - In production, this would come from a database
let inquiries = [
  {
    id: '1',
    productId: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91-9876543210',
    company: 'Global Traders Inc',
    quantity: 500,
    message: 'Interested in bulk order',
    status: 'new',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    productId: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+91-9876543211',
    company: 'Export Solutions Ltd',
    quantity: 100,
    message: 'Looking for regular supply',
    status: 'responded',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    productId: '3',
    name: 'Ahmed Khan',
    email: 'ahmed@example.com',
    phone: '+91-9876543212',
    company: 'Trade & Co',
    quantity: 1000,
    message: 'Need monthly shipments',
    status: 'new',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status')

  if (status) {
    const filtered = inquiries.filter(i => i.status === status)
    return NextResponse.json(filtered)
  }

  return NextResponse.json(inquiries)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newInquiry = {
      id: (inquiries.length + 1).toString(),
      ...body,
      status: 'new',
      createdAt: new Date().toISOString(),
    }
    inquiries.push(newInquiry)
    return NextResponse.json(newInquiry, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
