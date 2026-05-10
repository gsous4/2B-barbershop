# 2B Barbershop 💈

Site profissional da **2B Barbershop** desenvolvido com **Next.js 14 + TypeScript + Tailwind CSS**.

## 🚀 Como rodar o projeto

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar em desenvolvimento
```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

### 3. Build para produção
```bash
npm run build
npm start
```

---

## 📁 Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx        # Layout raiz + metadados SEO
│   ├── page.tsx          # Página principal
│   └── globals.css       # Estilos globais + fontes
├── components/
│   ├── Navbar.tsx        # Navbar fixa com scroll
│   ├── HeroSection.tsx   # Seção hero com CTA
│   ├── AboutSection.tsx  # Sobre nós + estatísticas
│   ├── ServicesSection.tsx # Lista de serviços com WhatsApp
│   ├── GallerySection.tsx  # Galeria de trabalhos
│   └── Footer.tsx        # Rodapé com contato
└── data/
    └── services.ts       # Dados dos serviços + função WhatsApp
```

---

## ✏️ Como personalizar

### Trocar o número do WhatsApp
Edite `src/data/services.ts`:
```ts
export const WHATSAPP_NUMBER = "5561995626375"; // seu número aqui
```

### Adicionar/editar serviços
Edite o array `services` em `src/data/services.ts`.

### Trocar imagens da galeria
Edite o array `galleryImages` em `src/components/GallerySection.tsx`.

---

## 🛠 Tecnologias

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** — ícones
- **Google Fonts** — Playfair Display, Barlow, Bebas Neue

---

## 🌐 Deploy

Recomendado: **[Vercel](https://vercel.com)** (gratuito para projetos pessoais)

1. Crie uma conta em vercel.com
2. Importe o repositório GitHub
3. Deploy automático! ✅
