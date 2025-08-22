# Portfolio Boilerplate (React + Tailwind + Framer Motion)

Um boilerplate de portfólio em **um único arquivo** (componente React) — rápido de editar, bonito e pronto para publicar.

> **Compatibilidade primeiro!**  
> Após clonar o projeto, instale as dependências com:
> ```bash
> npm i --legacy-peer-deps
> ```

---

## 1) Visão geral

- Você edita **um único componente** que já contém todas as seções: *Hero*, *Sobre*, *Experiência*, *Habilidades*, *Projetos* e *Contato*.
- Toda a personalização acontece alterando o objeto **`DEFAULT_CONFIG`** (ou passando sua própria `config` via props).
- Design com **Tailwind CSS**, animações com **Framer Motion** e ícones **lucide-react**.

---

## 2) Requisitos

- **Node** 18+ e **npm** 8+
- Navegador moderno

> Se estiver começando do zero (sem `package.json` pronto), garanta que estas libs estejam instaladas:
> ```bash
> npm i react react-dom framer-motion lucide-react
> # Tailwind é opcional se você já trouxe este arquivo para um projeto que tenha Tailwind configurado.
> ```

---

## 3) Como rodar localmente

1. **Instalar dependências (com compatibilidade):**
   ```bash
   npm i --legacy-peer-deps
   ```

2. **Rodar em desenvolvimento**
    - Se for **Vite** (recomendado):
      ```bash
      npm run dev
      ```
    - Se for **Create React App**:
      ```bash
      npm start
      ```

3. **Build de produção**
   ```bash
   npm run build
   ```

---

## 4) Onde editar (personalização básica)

Abra o arquivo do componente (ex.: `src/App.jsx`) e procure pelo bloco:

```js
// -------------------- TEMPLATE DE CONFIGURAÇÃO --------------------
const DEFAULT_CONFIG = { ... }
```

Edite os campos dentro de `DEFAULT_CONFIG`:

- **`person`**: dados pessoais (nome, stack, cidade, email, telefone, GitHub, LinkedIn).
- **`theme`**: cores/gradientes e estilos de cartão/texto.
- **`hero`**: imagem de capa da seção inicial.
- **`about`**: texto “Sobre mim” e um carrossel de fotos.
- **`experience`**: lista de experiências (empresa, cargo, período, local, descrição, tecnologias).
- **`skills`**: competências com **nome**, **nível** (0–100) e **ícone** (veja “Ícones de skills”).
- **`certifications`**: cursos/selos complementares.
- **`education`**: formação acadêmica.
- **`projects`**: projetos/MVPs (título, descrição, URL, imagem e tecnologias).
- **`contact`**: ilustração da seção de contato.
- **`footer`**: créditos do rodapé.
- **`sectionsEnabled`**: liga/desliga seções (booleans).

> Dica: você também pode passar `<Portfolio config={meuConfig} />` e **ignorar** o `DEFAULT_CONFIG`.

---

## 5) Exemplo rápido de preenchimento

```js
const DEFAULT_CONFIG = {
  person: {
    name: "Maria Silva",
    roleHighlight: "Full-Stack",
    tagline: "Transformo ideias em produtos.",
    location: "São Paulo, SP — Brasil",
    email: "maria@exemplo.com",
    phone: "+55 11 90000 0000",
    github: "https://github.com/mariasilva",
    linkedin: "https://www.linkedin.com/in/mariasilva",
  },
  theme: {
    gradient: "from-slate-900 via-blue-900 to-slate-800",
    accentFrom: "from-blue-400",
    accentTo: "to-purple-400",
    card: "bg-slate-800/50 border border-slate-700",
    textMuted: "text-gray-300",
  },
  hero: {
    coverImg: "..."
  }
}
```

---

## 6) Como publicar na Vercel(Grátis)

1. Crie uma conta em [vercel.com](https://vercel.com/).
2. Clique em **"New Project"** e conecte seu repositório (GitHub, GitLab ou Bitbucket).
3. Selecione o projeto e clique em **"Import"**.
4. Confirme as configurações (Vercel detecta React automaticamente).
5. Clique em **"Deploy"**.

Após alguns segundos, seu portfólio estará disponível em uma URL pública.  
Sempre que fizer alterações e subir para o repositório, a Vercel fará o deploy automaticamente.

---