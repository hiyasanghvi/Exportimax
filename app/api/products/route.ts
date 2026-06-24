import { NextResponse } from 'next/server'

// Mock data - In production, this would come from a database
const products = [
  {
    id: '1',
    name: 'Premium Rice',
    categoryId: 'grains',
    description: 'High-quality white basmati rice meeting international standards',
    price: '450',
    unit: 'MT',
    featured: true,
  },
  {
    id: '2',
    name: 'Organic Tea Leaves',
    categoryId: 'beverages',
    description: 'Premium organic tea from certified tea gardens',
    price: '8',
    unit: 'kg',
    featured: true,
  },
  {
    id: '3',
    name: 'Iron Ore',
    categoryId: 'minerals',
    description: 'High-grade iron ore suitable for steel production',
    price: '120',
    unit: 'MT',
    featured: true,
  },
  {
    id: '4',
    name: 'Spices Mix',
    categoryId: 'spices',
    description: 'Premium blend of Indian spices',
    price: '15',
    unit: 'kg',
    featured: false,
  },
  {
    id: '5',
    name: 'Cotton Textiles',
    categoryId: 'textiles',
    description: 'High-quality cotton fabric for exports',
    price: '5',
    unit: 'meter',
    featured: false,
  },
  {
    id: '6',
    name: 'Cashew Nuts',
    categoryId: 'nuts',
    description: 'Premium cashew nuts processed and quality certified',
    price: '12',
    unit: 'kg',
    featured: false,
  },
]

export async function GET() {
  return NextResponse.json(products)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newProduct = {
      id: Math.random().toString(),
      ...body,
    }
    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
