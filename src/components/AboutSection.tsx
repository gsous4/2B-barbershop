"use client";

export default function AboutSection() {
  const stats = [
    { value: "5+", label: "Anos de Experiência" },
    { value: "3K+", label: "Clientes Atendidos" },
    { value: "5.0", label: "Avaliação Google" },
  ];

  return (
    <section id="sobre" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="section-label">Sobre Nós</span>
            </div>

            <h2 className="text-5xl md:text-6xl leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              Mais do que cortes,{" "}
              <em className="text-[#C9A84C] not-italic" style={{ fontFamily: "var(--font-playfair)" }}>
                Criamos Estilo.
              </em>
            </h2>

            <p className="text-white/60 leading-relaxed text-base">
              A 2B Barbershop nasceu da paixão por transformar a aparência e a confiança de cada cliente.
              Com ambiente premium e profissionais qualificados, oferecemos uma experiência única que vai
              além do corte — é um momento de cuidado pessoal e atitude.
            </p>

            <p className="text-white/50 leading-relaxed text-base">
              Localizada em Águas Lindas de Goiás, nossa barbearia é referência em cortes modernos, barba
              bem feita e atendimento de primeira. Cada detalhe é pensado para que você saia com a melhor
              versão de si mesmo.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80"
                alt="Interior da 2B Barbershop"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-[#C9A84C]/30 px-4 py-3">
              <p className="text-[#C9A84C] text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-bebas)" }}>
                2B Barbershop
              </p>
              <p className="text-white/50 text-xs mt-0.5">Águas Lindas de Goiás</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-white/10 pt-16 grid grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="text-5xl md:text-6xl text-[#C9A84C] mb-2"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                {stat.value}
              </div>
              <div className="text-white/50 text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
