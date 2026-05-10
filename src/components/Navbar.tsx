"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { WHATSAPP_NUMBER } from "@/data/services";

const navLinks = [
  { label: "Página Inicial", href: "home"    },
  { label: "Galeria",        href: "galeria" },
  { label: "Contato",        href: "contato" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="2B Barbershop"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <span
            className="text-white text-sm tracking-widest uppercase"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.2em" }}
          >
            2B Barbershop
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-white/60 hover:text-[#C9A84C] transition-colors text-xs tracking-widest uppercase"
              style={{ fontFamily: "var(--font-barlow)", letterSpacing: "0.18em" }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("servicos")}
            className="btn-gold text-sm px-5 py-2.5"
          >
            Agendar
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((item) => (
            <button
              key={item.href}
              onClick={() => { scrollTo(item.href); setMenuOpen(false); }}
              className="text-white/70 hover:text-[#C9A84C] transition-colors text-sm tracking-widest uppercase text-left"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { scrollTo("servicos"); setMenuOpen(false); }}
            className="btn-gold text-center text-sm"
          >
            Agendar
          </button>
        </div>
      )}
    </nav>
  );
}