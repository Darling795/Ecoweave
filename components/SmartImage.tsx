"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** Placeholder shown until the real image file exists in /public. */
  fallback?: string;
  /** Load immediately (use for above-the-fold images like the hero). */
  priority?: boolean;
};

/**
 * A plain <img> that quietly swaps to a tasteful placeholder if the real
 * photo hasn't been added to /public yet. Once your mum drops the correct
 * file in (matching the `src` path), it shows automatically.
 */
export default function SmartImage({
  src,
  alt,
  className,
  fallback = "/placeholder-product.svg",
  priority = false,
}: Props) {
  const [current, setCurrent] = useState(src);
  return (
    <img
      src={current}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
}
