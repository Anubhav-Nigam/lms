# setup steps

npm create vite@latest lms-frontend -- --template react
cd lms-frontend
npm install
npm install axios react-router-dom

## using tailwindcss v3
(tailwindcss v4 has different steps)
(https://github.com/tailwindlabs/tailwindcss/discussions/18350)
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

Then update tailwind.config.js:
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

Update src/index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;

## Project Structure:
lms-frontend/
  src/
    api/
      axiosInstance.js
    pages/
      Login.jsx
      Dashboard.jsx
    components/
      Navbar.jsx
    context/
      AuthContext.jsx
    App.jsx
    main.jsx
    index.css
  index.html
  package.json
  vite.config.js
  postcss.config.js
  tailwind.config.js



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
