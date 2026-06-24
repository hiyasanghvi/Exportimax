import { db } from '@/lib/db'
import { newsletterSubscribers } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { nanoid } from 'nanoid'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return Response.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if already subscribed
    const existing = await db
      .select()
      .from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.email, email))

    if (existing.length > 0) {
      if (!existing[0].subscribed) {
        // Resubscribe
        await db
          .update(newsletterSubscribers)
          .set({ subscribed: true })
          .where(eq(newsletterSubscribers.email, email))
      }
      return Response.json({
        message: 'You are already subscribed',
        status: 'success'
      })
    }

    // Add new subscriber
    await db.insert(newsletterSubscribers).values({
      id: nanoid(),
      email,
      subscribed: true
    })

    return Response.json(
      { message: 'Successfully subscribed to our newsletter' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return Response.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    )
  }
}
