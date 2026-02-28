# 🚀 Portfólio Profissional | Eduardo Augusto Pech

Portfólio refatorado para **React (Vite)**, mantendo o layout e recursos principais (i18n PT/EN, modal de projetos com galeria, zoom no mobile e botão de voltar ao topo).

## 👤 Sobre

- **Nome:** Eduardo Augusto Pech
- **Cargo:** Software Developer
- **Stacks principais:** React | Flutter | C# | Java | React Native | Node

## 🔗 Contato

- **Telefone/WhatsApp:** +55 9 9186-4238
- **Email:** eduardo.augusto.pech97@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/eduardoapech
- **GitHub:** https://github.com/eduardoapech

## 🛠️ Tecnologias

- React 18 + Vite 5
- CSS (reaproveitado em `public/assets/css/style.css`)
- Web3Forms (envio do formulário de contato)

## ▶️ Como rodar

```bash
npm install
npm run dev
```

## ✉️ Formulário de contato (Web3Forms)

Para as mensagens chegarem no seu email, você precisa configurar sua própria key do Web3Forms:

1. Crie/acesse sua conta em https://web3forms.com/
2. Gere uma `access_key` e configure o email de recebimento
3. Crie um arquivo `.env` na raiz (use `.env.example` como base) e preencha:

```bash
VITE_WEB3FORMS_ACCESS_KEY=SUACHAVEAQUI
```

Depois reinicie o `npm run dev`.

Build de produção:

```bash
npm run build
npm run preview
```

## 📁 Estrutura

```text
public/
	assets/           # CSS/imagens reaproveitados
src/
	components/       # Seções e UI (Header, Hero, Modal, etc.)
	data/             # Conteúdo/i18n e dados (skills/projetos/links)
	hooks/            # IntersectionObserver para animação reveal
	lib/              # utilitários (scroll, i18n)
index.html          # Entrada do Vite/React
```

