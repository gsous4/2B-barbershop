"use client";

import { WHATSAPP_NUMBER } from "@/data/services";

export default function Footer() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de mais informações.")}`;

  return (
    <footer id="contato" className="bg-[#0D0D0D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#C9A84C]/60 flex items-center justify-center">
                <span className="text-[#C9A84C] font-bold text-sm" style={{ fontFamily: "var(--font-bebas)" }}>
                  2B
                </span>
              </div>
              <span
                className="text-white tracking-widest uppercase text-sm"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.2em" }}
              >
                2B Barbershop
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Experiência, precisão e estilo. Agende online 24/7 e venha viver a experiência 2B.
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-4">
            <h3 className="section-label">Localização</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <svg className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Av. Tiradentes - Cidade Jardim, Águas Lindas de Goiás - GO, Quadra 72, Loja 4, Jardim Pérola 2
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <svg className="w-4 h-4 text-[#C9A84C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +55 (61) 99565-4035
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <svg className="w-4 h-4 text-[#C9A84C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Segunda a Sábado · 09:00 – 19:00
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="section-label">Contato</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Tem alguma dúvida? Entre em contato diretamente pelo WhatsApp.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center gap-3 w-fit px-6"
            >
              <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WHATSAPP
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 text-white/20 text-xs">
            <div className="w-6 h-px bg-[#C9A84C]/30" />
            <span className="text-[#C9A84C]/40">✂</span>
            <div className="w-6 h-px bg-[#C9A84C]/30" />
          </div>
          <p className="text-white/25 text-xs tracking-widest uppercase">
            © 2026 2B Barbershop — Todos os direitos reservados
          </p>
          <div className="flex items-center gap-3 text-white/20 text-xs">
            <div className="w-6 h-px bg-[#C9A84C]/30" />
            <span className="text-[#C9A84C]/40">✂</span>
            <div className="w-6 h-px bg-[#C9A84C]/30" />
          </div>
        </div>
      </div>
    </footer>
  );
}
