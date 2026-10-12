# MF Futuretech — website

SEO, AI Automation aur Etsy services ki website (Next.js 16 + Tailwind CSS 4 + Supabase). Poori planning `PRD.md` mein hai.

## Local par chalana

```bash
npm install
npm run dev        # http://localhost:3000
```

Production check: `npm run build && npm start`

## Sab se zaroori files (yahan se site badlein)

| Kya badalna hai | File |
| --- | --- |
| Email, WhatsApp, stats, badges, social links, owner naam | `src/data/site.ts` |
| Prices on/off (abhi **off** — har jagah "Get a quote") | `src/data/site.ts` → `showPrices` |
| 19 services + gig pages (text, packages, FAQ) | `src/data/services.ts` |
| /gigs page ke 15 gigs | `src/data/services.ts` → `gigSlugs` |
| 6 backlink services | `src/data/backlinks.ts` |
| Case studies (**placeholder — asli se badlein**) | `src/data/case-studies.ts` |
| Testimonials (**placeholder — asli se badlein**) | `src/data/testimonials.ts` |
| Guest post sites (sample — asli 50+ Supabase mein) | `src/data/guest-sites.ts` / Supabase `guest_sites` |
| Blog posts | `src/data/posts.ts` |
| Chatbot ke sawal-jawab | `src/lib/chatbot.ts` |
| Header menu | `src/data/nav.ts` |
| Legal pages ka text | `src/data/legal.ts` |
| Colors | `src/app/globals.css` (`@theme`) |
| Aap ki photo | `public/pic.png` (portrait, ~800×1000px) |

## Live karne se pehle

1. `.env.example` ko copy karke `.env.local` banayein aur values bharein.
2. **Domain:** decide hone par `NEXT_PUBLIC_SITE_URL` mein daalein (canonical, sitemap, OG isi se bante hain).
3. **Supabase:** naya project → SQL Editor mein `supabase/schema.sql` run karein → Authentication mein Email + Google provider on karein → Redirect URL: `https://YOUR-DOMAIN/auth/callback`.
4. **Resend:** API key `RESEND_API_KEY` mein; domain verify karke `EMAIL_FROM` badlein. Key na ho toh form chalte hain lekin email nahi jaati (WhatsApp button phir bhi milta hai).
5. Placeholder content (case studies, testimonials, stats, badges, About timeline/certificates) apne asli data se badlein.
6. Vercel par deploy: GitHub repo connect karein, wahi env variables Vercel mein daalein.

## Orders kaise aate hain

Client service chun kar "Order / Request a quote" bharta hai → reference number (jaise `MFT-1001`) milta hai → aap ko email + Supabase `orders` table mein entry → client "Confirm on WhatsApp" dabata hai. Price aur payment WhatsApp/email par confirm hoti hai (site par payment methods abhi nahi).
