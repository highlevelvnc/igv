# 🎨 Guia de Customização - Instituto Genária Viana

Este guia mostra como personalizar diferentes aspectos do site de forma fácil e segura.

## 📝 Editando Textos

### Todos os textos estão em um único arquivo

**Arquivo:** `src/data/siteData.js`

### Exemplos de Edição

#### 1. Mudar texto do Hero (Tela inicial)

```javascript
hero: {
  headline: "Seu novo título aqui",
  subheadline: "Sua nova descrição aqui",
  ctas: [
    { text: "Novo texto do botão", type: "primary", action: "matricula" },
  ]
}
```

#### 2. Atualizar informações da escola

```javascript
school: {
  name: "Instituto Genária Viana",
  location: "Iguaba Grande – RJ",
  years: 25,
  phone: "5522999999999", // Seu número
  email: "seuemail@escola.com.br",
  address: "Seu endereço completo aqui",
}
```

#### 3. Adicionar/Editar depoimentos

```javascript
testimonials: [
  {
    name: "Nome do Responsável",
    role: "Pai/Mãe de aluno do...",
    content: "Texto do depoimento aqui",
    rating: 5
  },
  // Adicione mais depoimentos...
]
```

#### 4. Editar FAQ

```javascript
faq: [
  {
    question: "Sua pergunta?",
    answer: "Sua resposta detalhada aqui."
  },
  // Adicione mais perguntas...
]
```

---

## 🎨 Mudando Cores

**Arquivo:** `tailwind.config.js`

### Cor Principal (Vermelho)

```javascript
primary: {
  50: '#fff1f1',   // Muito claro
  100: '#ffe1e1',  // Claro
  200: '#ffc7c7',
  300: '#ffa0a0',
  400: '#ff6b6b',
  500: '#f83838',
  600: '#e51d1d',  // ← COR PRINCIPAL
  700: '#c11414',  // Escuro
  800: '#a01414',
  900: '#841818',  // Muito escuro
}
```

### Cor Secundária (Azul)

```javascript
secondary: {
  500: '#3b82f6',  // ← ALTERE AQUI
  600: '#2563eb',  // ← E AQUI
  700: '#1d4ed8',
}
```

### Aplicando em Todo o Site

As cores são aplicadas automaticamente usando as classes Tailwind:
- `bg-primary-600` = fundo vermelho
- `text-primary-600` = texto vermelho
- `bg-secondary-600` = fundo azul

---

## 🔤 Alterando Fontes

**Arquivo:** `src/index.css`

### 1. Escolher nova fonte no Google Fonts

Acesse [fonts.google.com](https://fonts.google.com) e escolha suas fontes.

### 2. Importar no CSS

```css
/* Substitua esta linha */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap');

/* Por sua nova fonte */
@import url('https://fonts.googleapis.com/css2?family=Sua+Fonte:wght@400;700&display=swap');
```

### 3. Atualizar Tailwind Config

**Arquivo:** `tailwind.config.js`

```javascript
fontFamily: {
  sans: ['Sua Fonte Sans', 'system-ui', 'sans-serif'],
  display: ['Sua Fonte Display', 'system-ui', 'sans-serif'],
}
```

---

## 📱 WhatsApp

### Alterar número

**Arquivo:** `.env`

```env
VITE_WHATSAPP_NUMBER=5522999999999
```

### Personalizar mensagem automática

**Arquivo:** `src/components/WhatsAppButton.jsx`

```javascript
const message = encodeURIComponent('Sua mensagem personalizada aqui');
```

---

## 📊 Analytics

### Google Analytics

1. Criar conta em [analytics.google.com](https://analytics.google.com)
2. Obter ID (formato: G-XXXXXXXXXX)
3. Adicionar no `.env`:

```env
VITE_GA_ID=G-XXXXXXXXXX
```

### Google Tag Manager

1. Criar conta em [tagmanager.google.com](https://tagmanager.google.com)
2. Obter ID (formato: GTM-XXXXXXX)
3. Adicionar no `.env`:

```env
VITE_GTM_ID=GTM-XXXXXXX
```

### Meta Pixel (Facebook)

1. Criar pixel em [business.facebook.com](https://business.facebook.com)
2. Obter ID
3. Adicionar no `.env`:

```env
VITE_META_PIXEL_ID=XXXXXXXXXXXXXXX
```

---

## 🖼️ Adicionando Imagens

### Logo da Escola

1. Salve logo em `public/logo.png`
2. Edite `src/components/Header.jsx`:

```jsx
// Substitua isto:
<div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl">
  <span className="text-white font-display font-bold text-xl">IGV</span>
</div>

// Por isto:
<img src="/logo.png" alt="Instituto Genária Viana" className="w-12 h-12" />
```

### Fotos nos Depoimentos

```javascript
testimonials: [
  {
    name: "Maria Silva",
    role: "Mãe de aluno",
    content: "Depoimento...",
    rating: 5,
    photo: "/fotos/maria.jpg" // Adicione esta linha
  }
]
```

E atualize o componente Testimonials para exibir a foto.

---

## 🎯 Botões e CTAs

### Mudar textos dos botões

**Arquivo:** `src/data/siteData.js`

```javascript
enrollment: {
  ctas: [
    { text: "Novo texto botão 1", type: "whatsapp", icon: "message-circle" },
    { text: "Novo texto botão 2", type: "visit", icon: "calendar" },
    { text: "Novo texto botão 3", type: "form", icon: "info" }
  ]
}
```

### Estilos dos botões

**Arquivo:** `src/index.css`

```css
.btn-primary {
  @apply bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-xl;
}

/* Personalize tamanho, cores, bordas, etc */
```

---

## 📍 Informações de Contato

**Arquivo:** `src/data/siteData.js`

```javascript
contact: {
  phone: "(22) 9999-9999",
  whatsapp: "5522999999999",
  email: "contato@escola.com.br",
  address: "Rua X, 123 - Bairro, Iguaba Grande - RJ, CEP 00000-000",
  socials: {
    facebook: "https://facebook.com/suapagina",
    instagram: "https://instagram.com/seuperfil",
  }
}
```

---

## ➕ Adicionando Nova Seção

### 1. Criar componente

**Arquivo:** `src/sections/MinhaNovaSecao.jsx`

```jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MinhaNovaSecao = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-title text-center mb-12"
        >
          Título da Nova Seção
        </motion.h2>
        
        {/* Seu conteúdo aqui */}
      </div>
    </section>
  );
};

export default MinhaNovaSecao;
```

### 2. Adicionar ao App

**Arquivo:** `src/App.jsx`

```jsx
// Importar
import MinhaNovaSecao from './sections/MinhaNovaSecao';

// Adicionar no render
<main>
  <Hero />
  <Stats />
  <MinhaNovaSecao /> {/* ← AQUI */}
  <WhyChoose />
  ...
</main>
```

---

## 🎬 Animações

### Velocidade das animações

Altere `duration` para controlar velocidade:

```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }} // ← 0.3 = rápido, 1.0 = lento
>
```

### Delay (atraso)

```jsx
transition={{ duration: 0.6, delay: 0.2 }} // Espera 0.2s antes de animar
```

### Desabilitar animações

Remova as props `initial`, `animate` e `transition`:

```jsx
// Com animação
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>

// Sem animação
<div>
```

---

## 📱 Responsividade

### Breakpoints Tailwind

- `sm:` = 640px (celular grande)
- `md:` = 768px (tablet)
- `lg:` = 1024px (desktop pequeno)
- `xl:` = 1280px (desktop grande)

### Exemplo

```jsx
<div className="
  text-2xl      // Padrão (mobile)
  md:text-3xl   // Tablet
  lg:text-4xl   // Desktop
">
```

---

## 🔍 SEO

### Título da página

**Arquivo:** `src/data/siteData.js`

```javascript
seo: {
  home: {
    title: "Seu novo título | Escola em Iguaba Grande",
    description: "Sua nova descrição otimizada para SEO",
    keywords: "suas, palavras, chave, aqui"
  }
}
```

### Meta tags adicionais

**Arquivo:** `index.html`

```html
<meta name="sua-meta" content="valor" />
```

---

## 🚀 Performance

### Otimizar imagens antes de usar

- Use [tinypng.com](https://tinypng.com) para comprimir
- Formato WebP quando possível
- Tamanho máximo: 200KB por imagem

### Lazy loading automático

O Vite já faz isso! Apenas use:

```jsx
<img src="/sua-imagem.jpg" loading="lazy" />
```

---

## 🐛 Dicas de Debug

### Ver erros no navegador

1. Abra DevTools (F12)
2. Vá para "Console"
3. Veja erros em vermelho

### Testar localmente

```bash
npm run dev
```

Acesse: http://localhost:3000

### Build de produção

```bash
npm run build
npm run preview
```

---

## 📋 Checklist de Customização

Antes de publicar, verifique:

- [ ] Todos os textos atualizados
- [ ] Número de WhatsApp correto
- [ ] E-mail correto
- [ ] Endereço atualizado
- [ ] Links de redes sociais
- [ ] Cores personalizadas (se desejado)
- [ ] Logo adicionado (se tiver)
- [ ] Analytics configurados
- [ ] Testado em mobile
- [ ] Testado em desktop
- [ ] Formulário funcionando
- [ ] Todos os links funcionando

---

## 💡 Dicas Finais

1. **Faça backup** antes de grandes mudanças
2. **Teste sempre** em desenvolvimento antes de publicar
3. **Use Git** para controle de versão
4. **Documente** suas personalizações
5. **Mantenha simples** - menos é mais

---

## 🆘 Precisa de Ajuda?

Se tiver dúvidas ou precisar de customizações mais complexas, entre em contato.

**Boas customizações! 🎨✨**
