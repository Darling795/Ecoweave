// Your product catalogue. To add a bag:
//   1. Drop its photo into the /public folder (e.g. public/bag5.jpeg)
//   2. Copy one block below and fill in the details.
// The grid lays out automatically, so add as many as you like.

export type Product = {
  slug: string;
  name: string;
  label: string; // small uppercase tag above the name
  description: string;
  price: string; // free text, e.g. "Ask for price", "₱580"
  image: string; // path inside /public, e.g. "/bag1.jpeg"
  alt: string; // description of the photo for accessibility
};

export const products: Product[] = [
  {
    slug: "denim-lace-bow-tote",
    name: "Denim & Lace Bow Tote",
    label: "Featured piece",
    description:
      "Upcycled denim tote finished with a hand-tied cream lace bow and dainty lace-trimmed pockets.",
    price: "Ask for price",
    image: "/bag1.jpeg",
    alt: "Blue denim tote bag with a large cream lace bow and lace-trimmed pockets",
  },
  {
    slug: "lace-strap-shoulder-bag",
    name: "Lace-Strap Shoulder Bag",
    label: "Handcrafted",
    description:
      "Soft denim shoulder bag with crochet-lace straps and a relaxed, frayed top edge.",
    price: "₱580",
    image: "/bag2.jpeg",
    alt: "Denim shoulder bag with crochet lace trim on the straps and top",
  },
  {
    slug: "floral-button-denim-tote",
    name: "Floral Button Denim Tote",
    label: "One of a kind",
    description:
      "Pleated denim tote with lace trim and sweet embroidered floral button accents.",
    price: "₱480",
    image: "/bag3.jpeg",
    alt: "Denim tote with lace trim and embroidered floral button details",
  },
  {
    slug: "brass-button-carryall",
    name: "Brass-Button Carryall",
    label: "Everyday carryall",
    description:
      "Structured denim carryall with lace-trimmed handles, vintage brass buttons and a printed lining.",
    price: "Ask for price",
    image: "/bag4.jpeg",
    alt: "Structured denim carryall with lace-trimmed handles and brass buttons",
  },
];
