# Netlify deploy do DentalCare Landing Page

Este projeto foi configurado para deploy automático na Netlify.

## Configuração do Deploy

### 1. Conectar repositório no Netlify
1. Acesse [netlify.com](https://netlify.com) e faça login
2. Clique em "New site from Git"
3. Conecte sua conta GitHub
4. Selecione o repositório `Nova-pasta`

### 2. Configurações de Build
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18

### 3. Variáveis de Ambiente (se usando Supabase)
No painel da Netlify, vá em Site settings > Environment variables e adicione:

```
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_publica_do_supabase
```

### 4. Deploy Automático
- Cada push na branch `main` fará deploy automático
- Pull requests criam preview deployments
- Configurações de segurança e cache já incluídas

### 5. Domínio Personalizado (opcional)
No painel da Netlify:
1. Vá em Site settings > Domain management
2. Adicione seu domínio customizado
3. Configure DNS conforme instruções

## Comandos Úteis

```bash
# Build local para testar
npm run build

# Instalar Netlify CLI (opcional)
npm install -g netlify-cli

# Deploy manual via CLI
netlify deploy --prod
```

## Arquivos de Configuração

- `netlify.toml`: Configurações de build e deploy
- `next.config.js`: Configurações do Next.js
- `package.json`: Scripts e dependências

## Monitoramento

- Logs de deploy disponíveis no painel da Netlify
- Analytics e performance insights incluídos
- Notificações de deploy por email/Slack (configurável)
