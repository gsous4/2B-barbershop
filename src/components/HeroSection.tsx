"use client";

import Image from "next/image";
import { WHATSAPP_NUMBER } from "@/data/services";

export default function HeroSection() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de agendar um horário.")}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero.png')`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
        }}
      />
      <div className="absolute inset-0 bg-black/70" />
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/5 to-black/80" />

      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-8 animate-fade-in">
        {/* Real logo */}
        <div className="w-52 h-52 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="2B Barbershop"
            width={210}
            height={210}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="text-[#C9A84C] text-2xl">✂</span>
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Cidade Jardim, Águas Lindas - GO
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Seg – Sáb · 09:00–19:00
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <a href="#servicos" className="btn-gold">AGENDAR AGORA</a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-outline">WHATSAPP</a>
        </div>
      </div>
    </section>
  );
}
