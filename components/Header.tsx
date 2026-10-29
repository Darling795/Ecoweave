"use client";

import { useState } from "react";
import SmartImage from "./SmartImage";
import { site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${site.name} home`} onClick={close}>
          <SmartImage
            src="/Ecoweave_logo.jpeg"
            alt={`${site.fullName} logo`}
            fallback="/placeholder-logo.svg"
          />
          <span className="brand-name">
            {site.name}
            <small>{site.tagline}</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
        <div className={`nav-links${open ? " open" : ""}`} id="navLinks">
          <a href="#collection" onClick={close}>Shop</a>
          <a href="#story" onClick={close}>Our Story</a>
          <a href="#contact" onClick={close}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={close}>
            Find Your Bag <span>↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
