import { pgTable, text, timestamp, integer, boolean, decimal, unique } from 'drizzle-orm/pg-core'

// Better Auth Tables
export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name'),
  email: text('email').unique(),
  emailVerified: boolean('emailVerified'),
  image: text('image'),
  createdAt: timestamp('createdAt'),
  updatedAt: timestamp('updatedAt'),
})

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expiresAt').notNull(),
  token: text('token').unique().notNull(),
  createdAt: timestamp('createdAt'),
  updatedAt: timestamp('updatedAt'),
  ipAddress: text('ipAddress'),
  userAgent: text('userAgent'),
  userId: text('userId')
    .notNull()
    .references(() => user.id),
})

export const account = pgTable(
  'account',
  {
    id: text('id').primaryKey(),
    accountId: text('accountId').notNull(),
    providerId: text('providerId').notNull(),
    userId: text('userId')
      .notNull()
      .references(() => user.id),
    accessToken: text('accessToken'),
    refreshToken: text('refreshToken'),
    idToken: text('idToken'),
    accessTokenExpiresAt: timestamp('accessTokenExpiresAt'),
    refreshTokenExpiresAt: timestamp('refreshTokenExpiresAt'),
    scope: text('scope'),
    password: text('password'),
    createdAt: timestamp('createdAt'),
    updatedAt: timestamp('updatedAt'),
  },
  (table) => ({
    accountProviderUnique: unique().on(table.userId, table.providerId),
  })
)

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expiresAt').notNull(),
  createdAt: timestamp('createdAt'),
  updatedAt: timestamp('updatedAt'),
})

// App Tables
export const categories = pgTable('categories', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  createdAt: timestamp('createdAt').defaultNow(),
})

export const products = pgTable('products', {
  id: text('id').primaryKey(),
  categoryId: text('categoryId').notNull(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  image: text('image'),
  price: decimal('price', { precision: 10, scale: 2 }),
  unit: text('unit'),
  minOrder: integer('minOrder'),
  specifications: text('specifications'),
  featured: boolean('featured').default(false),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
})

export const inquiries = pgTable('inquiries', {
  id: text('id').primaryKey(),
  productId: text('productId').notNull(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  company: text('company'),
  quantity: integer('quantity'),
  message: text('message'),
  status: text('status').default('new'), // new, responded, archived
  response: text('response'),
  respondedAt: timestamp('respondedAt'),
  createdAt: timestamp('createdAt').defaultNow(),
})

export const companyInfo = pgTable('companyInfo', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  about: text('about'),
  logo: text('logo'),
  email: text('email'),
  phone: text('phone'),
  address: text('address'),
  website: text('website'),
  certifications: text('certifications'),
  updatedAt: timestamp('updatedAt').defaultNow(),
})

export const newsletterSubscribers = pgTable('newsletterSubscribers', {
  id: text('id').primaryKey(),
  email: text('email').unique().notNull(),
  name: text('name'),
  subscribed: boolean('subscribed').default(true),
  createdAt: timestamp('createdAt').defaultNow(),
})
