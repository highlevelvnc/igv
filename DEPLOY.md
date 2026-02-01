# 🚀 Guia de Deploy - Instituto Genária Viana

## Opção 1: Vercel (Recomendada - Mais Fácil)

### Via Interface Web

1. **Criar conta no Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Crie conta gratuita com GitHub, GitLab ou e-mail

2. **Fazer upload do projeto**
   - Clique em "Add New Project"
   - Importe do GitHub ou faça upload da pasta

3. **Configurar variáveis de ambiente**
   - Antes do deploy, adicione:
   ```
   VITE_WHATSAPP_NUMBER=5522999999999
   VITE_GA_ID=G-XXXXXXXXXX
   VITE_GTM_ID=GTM-XXXXXXX
   VITE_META_PIXEL_ID=XXXXXXXXXXXXXXX
   ```

4. **Deploy**
   - Clique em "Deploy"
   - Aguarde 1-2 minutos
   - Site estará no ar em `seu-projeto.vercel.app`

5. **Domínio personalizado** (opcional)
   - Em "Settings" > "Domains"
   - Adicione seu domínio
   - Configure DNS conforme instruções

### Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy em produção
vercel --prod

# Adicionar variáveis de ambiente
vercel env add VITE_WHATSAPP_NUMBER
vercel env add VITE_GA_ID
vercel env add VITE_GTM_ID
vercel env add VITE_META_PIXEL_ID
```

---

## Opção 2: Netlify

### Via Interface Web

1. **Criar conta no Netlify**
   - Acesse [netlify.com](https://netlify.com)
   - Crie conta gratuita

2. **Deploy**
   - Arraste a pasta do projeto para Netlify
   - Ou conecte com GitHub

3. **Configurar Build**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Variáveis de ambiente**
   - Em "Site settings" > "Build & deploy" > "Environment"
   - Adicione as variáveis

5. **Domínio**
   - Configure em "Domain settings"

### Via CLI

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Inicializar
netlify init

# Deploy
netlify deploy

# Deploy em produção
netlify deploy --prod
```

---

## Opção 3: Hospedagem Tradicional (cPanel)

1. **Build local**
   ```bash
   npm run build
   ```

2. **Upload**
   - Faça upload da pasta `dist/` via FTP
   - Aponte para a pasta public_html

3. **Configurar .htaccess**
   Crie um arquivo `.htaccess` na raiz:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## Configurações Pós-Deploy

### 1. Google Analytics

```javascript
// Já configurado no código
// Apenas adicione VITE_GA_ID nas variáveis de ambiente
```

### 2. Google Tag Manager

```javascript
// Já configurado no código
// Adicione VITE_GTM_ID nas variáveis de ambiente
```

### 3. Meta Pixel

```javascript
// Já configurado no código
// Adicione VITE_META_PIXEL_ID nas variáveis de ambiente
```

### 4. WhatsApp

```javascript
// Configure o número no .env
VITE_WHATSAPP_NUMBER=5522999999999
```

---

## SEO - Configurações Importantes

### 1. Google Search Console

1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione sua propriedade
3. Verifique propriedade
4. Envie sitemap (se aplicável)

### 2. Google My Business

1. Crie/reivindique perfil da escola
2. Adicione fotos, horários, endereço
3. Link para o site

### 3. Meta Tags

Já configuradas no código:
- Title otimizado
- Description persuasiva
- Keywords locais
- Open Graph
- Schema.org

---

## Performance

### Teste de Velocidade

Após deploy, teste em:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### Otimizações Automáticas

O site já inclui:
- ✅ Minificação de CSS/JS
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Imagens otimizadas
- ✅ Cache headers

---

## Domínio Personalizado

### Registrar Domínio

Sugestões:
- institutogenariaviana.com.br
- colegiogenariaviana.com.br
- igv.edu.br (se disponível)

Registradores confiáveis:
- Registro.br (para .br)
- GoDaddy
- Namecheap
- Google Domains

### Configurar DNS

**Para Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Para Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: seu-site.netlify.app
```

---

## SSL/HTTPS

- ✅ Vercel: SSL automático
- ✅ Netlify: SSL automático
- ⚠️ Hospedagem tradicional: Configure Let's Encrypt

---

## Monitoramento

### Uptime Monitoring

Serviços gratuitos:
- UptimeRobot
- Pingdom
- StatusCake

### Analytics

Configure:
1. Google Analytics 4
2. Google Tag Manager
3. Meta Pixel
4. Hotjar (opcional - mapas de calor)

---

## Backup

### Automático (Vercel/Netlify)
- Backups automáticos a cada deploy
- Histórico de versões
- Rollback fácil

### Manual
```bash
# Backup do código
git push origin main

# Backup dos dados
# Exporte conteúdo de siteData.js
```

---

## Checklist Final

Antes de lançar:

- [ ] Teste em mobile
- [ ] Teste em tablet
- [ ] Teste em desktop
- [ ] Todos os links funcionando
- [ ] WhatsApp configurado
- [ ] Formulário funcionando
- [ ] Analytics instalado
- [ ] SEO verificado
- [ ] Performance > 90
- [ ] SSL ativo
- [ ] Domínio configurado
- [ ] Google My Business atualizado

---

## Suporte Técnico

### Problemas Comuns

**Site não carrega:**
- Verifique build
- Confira variáveis de ambiente
- Veja logs do servidor

**Formulário não envia:**
- Verifique número WhatsApp
- Teste link direto

**Analytics não rastreia:**
- Confirme IDs corretos
- Aguarde 24-48h para dados

**Performance baixa:**
- Teste em 4G
- Otimize imagens
- Verifique cache

---

## Contato

Para suporte adicional ou customizações, entre em contato.

**Desenvolvido com ❤️ para o Instituto Genária Viana**
