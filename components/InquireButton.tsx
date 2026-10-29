"use client";

type Props = {
  productName: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Scrolls to the enquiry form and pre-fills it with the product the visitor
 * is interested in, so your mum knows exactly which bag they mean.
 */
export default function InquireButton({ productName, children, className }: Props) {
  const handleClick = () => {
    const field = document.getElementById(
      "enquiry-message"
    ) as HTMLTextAreaElement | null;
    if (field) {
      field.value = `Hi! I'm interested in the "${productName}". Could you tell me more about availability, price and delivery?`;
      field.dispatchEvent(new Event("input", { bubbles: true }));
    }
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    // Give the scroll a moment, then focus the name field.
    window.setTimeout(() => {
      document.getElementById("enquiry-name")?.focus({ preventScroll: true });
    }, 600);
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
