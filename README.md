# Instituto Genária Viana - Site Institucional

Site institucional moderno, mobile-first e focado em conversão de matrículas para o Instituto Genária Viana em Iguaba Grande - RJ.

## 🎯 Características

- **Mobile First**: Experiência otimizada para dispositivos móveis
- **Alta Performance**: Carregamento rápido e otimizado
- **Conversão**: Design focado em gerar matrículas
- **SEO Otimizado**: Schema.org, meta tags e otimização local
- **Animações Suaves**: Microinterações com Framer Motion
- **Responsivo**: Adaptado para mobile, tablet e desktop

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animações fluidas
- **Lucide React** - Ícones modernos

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Editar .env com suas credenciais
# VITE_WHATSAPP_NUMBER=5522999999999
# VITE_GA_ID=G-XXXXXXXXXX
# VITE_GTM_ID=GTM-XXXXXXX
# VITE_META_PIXEL_ID=XXXXXXXXXXXXXXX

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
instituto-genaria-viana/
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Preloader.jsx
│   │   ├── Header.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── Footer.jsx
│   │   ├── SEO.jsx
│   │   └── Analytics.jsx
│   ├── sections/          # Seções da página
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── WhyChoose.jsx
│   │   ├── Segments.jsx
│   │   ├── SASPartnership.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Enrollment.jsx
│   │   ├── FAQ.jsx
│   │   └── Contact.jsx
│   ├── data/              # Dados do site
│   │   └── siteData.js
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Entry point
│   └── index.css          # Estilos globais
├── public/                # Arquivos estáticos
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## ✏️ Como Editar Conteúdo

### 1. Textos e Informações

Todos os textos estão centralizados em `src/data/siteData.js`. Edite este arquivo para atualizar:

- Informações da escola
- Textos do hero
- Depoimentos
- FAQ
- Informações de contato
- Segmentos de ensino

```javascript
// Exemplo: Alterar headline do hero
export const siteData = {
  hero: {
    headline: "Seu novo texto aqui",
    // ...
  }
}
```

### 2. Cores

Edite `tailwind.config.js` para mudar as cores:

```javascript
colors: {
  primary: {
    // Vermelho principal
    600: '#e51d1d',
  },
  secondary: {
    // Azul secundário
    600: '#2563eb',
  }
}
```

### 3. Fontes

As fontes são importadas em `src/index.css`. Para mudar:

```css
@import url('https://fonts.googleapis.com/css2?family=Sua+Fonte:wght@400;700&display=swap');
```

E atualize em `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Sua Fonte', 'system-ui', 'sans-serif'],
}
```

### 4. WhatsApp

Edite o número no `.env`:

```
VITE_WHATSAPP_NUMBER=5522999999999
```

## 🎨 Customização Visual

### Adicionar Nova Seção

1. Crie um novo arquivo em `src/sections/MinhaSecao.jsx`
2. Importe e adicione em `src/App.jsx`
3. Use os componentes existentes como referência

### Modificar Animações

As animações usam Framer Motion. Exemplo:

```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Conteúdo
</motion.div>
```

## 📊 Analytics e Tracking

### Google Analytics

1. Crie uma propriedade GA4
2. Adicione o ID no `.env`:
```
VITE_GA_ID=G-XXXXXXXXXX
```

### Google Tag Manager

1. Crie um container GTM
2. Adicione o ID no `.env`:
```
VITE_GTM_ID=GTM-XXXXXXX
```

### Meta Pixel

1. Crie um pixel no Facebook Business
2. Adicione o ID no `.env`:
```
VITE_META_PIXEL_ID=XXXXXXXXXXXXXXX
```

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy em produção
vercel --prod
```

### Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Deploy em produção
netlify deploy --prod
```

### Build Manual

```bash
# Gerar build
npm run build

# A pasta 'dist' estará pronta para deploy
```

## 📱 SEO Local - Palavras-chave

O site está otimizado para:

- escola iguaba grande
- colégio iguaba grande
- educação infantil iguaba grande
- ensino fundamental iguaba grande
- ensino médio iguaba grande
- instituto genária viana
- escola particular iguaba grande
- melhor escola iguaba grande
- escola SAS iguaba grande

## ⚡ Performance

- **Mobile First**: Design otimizado para celular
- **Lazy Loading**: Imagens e componentes carregados sob demanda
- **Code Splitting**: JavaScript dividido em chunks
- **Minificação**: CSS e JS minificados
- **Cache**: Headers otimizados para cache

## 🔒 Segurança

- HTTPS obrigatório
- Sanitização de inputs
- Proteção contra XSS
- Headers de segurança configurados

## 📞 Suporte

Para dúvidas ou personalizações adicionais, entre em contato.

## 📄 Licença

Todos os direitos reservados © Instituto Genária Viana

---

**Desenvolvido com ❤️ para educação de qualidade**
