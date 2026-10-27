# Gaadi Bazaar

A mobile-first Indian used-car marketplace built with Next.js 14, TypeScript, Prisma, NextAuth, and Tailwind CSS.

## Run locally

1. Install Node.js 18.17+.
2. Copy `.env.example` to `.env` and set a long `NEXTAUTH_SECRET`.
3. Install dependencies: `npm install`.
4. Create the local database: `npm run db:push`.
5. Start the app: `npm run dev`, then open http://localhost:3000.

Create an account at `/register` to publish car listings. The homepage includes demo listings in Indian cities, with asking prices in rupees and odometers in kilometres. Seller listings and inquiries are stored in SQLite. Configure Cloudinary credentials in `.env` to enable signed image uploads from the listing form.

## Routes

- `/` marketplace inventory
- `/cars/[id]` car detail and inquiry form
- `/register`, `/login` account creation and sign-in
- `/dashboard` seller listings and buyer inquiries
- `/sell` authenticated listing form

## Notes

The default database is SQLite for easy local development. For production, use a hosted PostgreSQL database and configure `DATABASE_URL`, `NEXTAUTH_URL`, and `NEXTAUTH_SECRET`. Image URL fields are ready for Cloudinary-hosted URLs; server-side uploads should use a signed upload flow before public deployment.
