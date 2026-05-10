"use client";

import Image from "next/image";

const galleryImages = [
  { src: "/gallery1.jpg", alt: "Corte de cabelo na 2B Barbershop" },
  { src: "/gallery2.jpg", alt: "Corte social moderno" },
  { src: "/gallery3.jpg", alt: "Acabamento perfeito" },
  { src: "/gallery4.jpg", alt: "Barba bem feita" },
];

export default function GallerySection() {
  return (
    <section id="galeria" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#C9A84C]/40" />
            <span className="text-[#C9A84C] text-xl">✂</span>
            <div className="w-12 h-px bg-[#C9A84C]/40" />
          </div>
          <p className="section-label mb-3">Nossos Trabalhos</p>
          <h2
            className="text-6xl md:text-7xl text-white"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.08em" }}
          >
            GALERIA
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden group cursor-pointer relative">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
