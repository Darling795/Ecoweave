# Ecoweave — Bags n Accessories Shop

A small, fast marketing site for Ecoweave, built with **Next.js + TypeScript**.
One elegant page: hero, collection, our story, and an **enquiry form** that
emails new messages straight to your inbox.

---

## Running it on your computer

```bash
npm install     # once, to download what the site needs
npm run dev     # start a local preview
```

Then open the address it prints (usually **http://localhost:3000**, or
**http://localhost:3001** if 3000 is already in use).

To make the final, optimised version:

```bash
npm run build   # build it
npm start       # run the built version
```

---

## Everyday edits (no coding needed)

### Add or change a bag

Open **`data/products.ts`**. Each bag is one block like this:

```ts
{
  slug: "straw-basket-bag",          // a short unique id, lowercase-with-dashes
  name: "Straw Basket Bag",
  label: "New arrival",              // the little tag above the name
  description: "Hand-woven straw with a soft cotton lining.",
  price: "Ask for price",            // any text: "R250", "$18", "Ask for price"
  image: "/straw-basket-bag.jpg",    // the photo file (see below)
  alt: "Woven straw basket bag with leather handles",
},
```

Copy a block, change the details, and the new card appears automatically.

### Add the photos

Put image files in the **`public/`** folder, named exactly as in `image` above.
The photos currently in use are:

| File in `public/`     | Used for                        |
| --------------------- | ------------------------------- |
| `Ecoweave_logo.jpeg`  | Logo (top-left + story section) |
| `bag1.jpeg`           | Hero photo + "Denim & Lace Bow Tote" |
| `bag2.jpeg`           | "Lace-Strap Shoulder Bag"       |
| `bag3.jpeg`           | "Floral Button Denim Tote"      |
| `bag4.jpeg`           | "Brass-Button Carryall"         |

Until a real photo is added, a tasteful placeholder shows in its place — so
nothing ever looks broken.

### Change wording / contact details

Open **`lib/site.ts`** — the shop name, tagline, announcement bar text, and
contact email all live there.

---

## Making the enquiry form send email

Out of the box the form already works: if email isn't set up, it opens the
visitor's own email app with the message pre-filled to your address. To have
enquiries delivered automatically instead:

1. Create a free account at **https://resend.com** and make an API key.
2. Copy **`.env.example`** to **`.env.local`** and fill in:
   - `RESEND_API_KEY` — your key
   - `ENQUIRY_TO_EMAIL` — where enquiries should arrive (your mum's inbox)
3. Restart `npm run dev` (or redeploy).

See `.env.example` for the optional extras (Facebook / WhatsApp links, custom
"from" address).

---

## Putting it online (free)

The easiest host is **Vercel** (made by the Next.js team):

1. Push this folder to a GitHub repository.
2. Go to **https://vercel.com**, sign in, and **Import** the repository.
3. Add the environment variables from step 2 above in
   **Settings → Environment Variables**, then deploy.

Every time you push a change to GitHub, the site updates itself.

---

## Where things live

```
app/            the pages, layout, and the /api/enquiry email handler
components/     the building blocks (Header, Hero, Collection, Story, Contact…)
data/products.ts  your bag catalogue
lib/site.ts     shop name + contact details
public/         images (logo, photos) and placeholders
Ecoweave/index.html   the original single-file design, kept for reference
```
