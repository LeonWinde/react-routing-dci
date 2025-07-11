# React + TypeScript + Vite + Tailwind (GitHub Template)

This is a GitHub template repository for quickly starting a new project with React, TypeScript, Vite, and Tailwind CSS. It includes hot module replacement (HMR), ESLint configuration, and a minimal setup for rapid development.

---

## 🚀 How to Use This Template

1. **Create a new repository from this template:**

   - Click the green **"Use this template"** button on the GitHub page.
   - Choose "Create a new repository" and fill in your new repo details.

2. **Clone your new repository:**

   ```sh
   git clone https://github.com/your-username/your-new-repo.git
   cd your-new-repo
   ```

3. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

4. **Start the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Customize your project:**
   - Edit files in the `src/` directory to start building your app.
   - Update `index.css` and `tailwind.config.js` for Tailwind customization.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,
      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

---

## 📦 Project Structure

- `src/` — Main application source code
- `public/` — Static assets
- `index.html` — Main HTML file
- `vite.config.ts` — Vite configuration
- `tailwind.config.js` — Tailwind CSS configuration

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
