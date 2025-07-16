# 🦷 DentalCare - Landing Page para Dentistas

Uma landing page moderna e responsiva desenvolvida para clínicas odontológicas, construída com Next.js, TypeScript e Tailwind CSS.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional focada em saúde bucal
- **Responsivo**: Totalmente adaptável para desktop, tablet e mobile
- **Rápido**: Otimizado com Next.js 15 e App Router
- **Interativo**: Formulário de contato funcional
- **Acessível**: Seguindo boas práticas de acessibilidade
- **SEO Otimizado**: Meta tags e estrutura otimizada para buscadores

## 🚀 Tecnologias Utilizadas

- **Next.js 15**: Framework React com App Router
- **TypeScript**: Tipagem estática para maior segurança
- **Tailwind CSS**: Framework CSS utilitário
- **React 18**: Biblioteca JavaScript para interfaces
- **ESLint**: Linter para qualidade do código

## 📦 Instalação

1. Clone o repositório ou baixe os arquivos
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css     # Estilos globais
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página inicial
└── components/
    ├── Header.tsx      # Cabeçalho com navegação
    ├── Hero.tsx        # Seção principal
    ├── Services.tsx    # Seção de serviços
    ├── About.tsx       # Seção sobre a clínica
    ├── Contact.tsx     # Formulário de contato
    └── Footer.tsx      # Rodapé
```

## 🎨 Seções da Landing Page

### 1. **Header**
- Logo da clínica
- Menu de navegação responsivo
- Botão de call-to-action

### 2. **Hero Section**
- Título impactante
- Subtítulo descritivo
- Botões de ação principais
- Visual atrativo

### 3. **Serviços**
- Grid de serviços oferecidos
- Preços indicativos
- Botões de agendamento
- Ícones representativos

### 4. **Sobre a Clínica**
- Informações da clínica
- Estatísticas importantes
- Diferenciais competitivos
- Design atrativo

### 5. **Contato**
- Formulário funcional
- Informações de contato
- Horário de funcionamento
- Localização

### 6. **Footer**
- Links úteis
- Redes sociais
- Informações de contato
- Copyright

## 🎯 Funcionalidades

- **Navegação Suave**: Menu com scroll suave entre seções
- **Design Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Formulário Validado**: Validação de campos obrigatórios
- **Animações**: Efeitos hover e transições suaves
- **Cores Personalizadas**: Paleta de cores específica para área da saúde

## 🔧 Customização

### Cores
As cores podem ser alteradas no arquivo `tailwind.config.js`:
```javascript
colors: {
  primary: '#0891b2',    // Azul principal
  secondary: '#0f766e',  // Verde secundário
  accent: '#06b6d4',     // Azul accent
}
```

### Conteúdo
Edite os componentes em `src/components/` para alterar:
- Textos e informações
- Serviços oferecidos
- Informações de contato
- Preços e promoções

## 📱 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Servidor de produção
npm run lint     # Verificar código
```

## 🌐 Deploy

Para fazer o deploy, você pode usar:
- **Vercel**: Plataforma recomendada para Next.js
- **Netlify**: Alternativa popular
- **GitHub Pages**: Para hospedagem gratuita

## 📞 Suporte

Para dúvidas ou sugestões sobre esta landing page, entre em contato através do formulário da página ou pelos canais de comunicação da clínica.

---

**Desenvolvido com ❤️ para clínicas odontológicas modernas**
