# Mai UI

[![npm version](https://img.shields.io/npm/v/@shiraya-ma/mai-ui)](https://www.npmjs.com/package/@shiraya-ma/mai-ui)
[![MIT License](https://img.shields.io/github/license/shiraya-ma/mai-ui)](./LICENSE)

<div align="center">
  <a href="https://docs.shiraya.ma/mai-ui" target="_blank">
    <img src="https://docs.shiraya.ma/mai-ui/MaiUI_LogoType.svg" alt="Mai UI" height="48">
  </a>
</div>

---

**Mai UI** is a customizable React component library built on top of Tailwind CSS and HeroUI.  
It provides accessible, themeable UI components designed to help you build modern UIs quickly.

🪄 [View the documentation](https://docs.shiraya.ma/mai-ui)

---

## ✨ Features

- Fully typed components with TypeScript
- Built with [Tailwind CSS](https://tailwindcss.com/)
- Compatible with [HeroUI](https://www.heroui.com/docs/guide/introduction)
- Easily customizable tokens
- Accessible & theme-friendly

---

## 🚀 Installation

```bash
npm install @shiraya-ma/mai-ui
# or
bun add @shiraya-ma/mai-ui
```

You also need to install the required peerDependencies:

```bash
npm install react react-dom tailwindcss @emotion/is-prop-valid ...
```

(See full peer dependencies in package.json)

📦 Usage

```tsx
import { MaiButton } from "@shiraya-ma/mai-ui";

export function MyComponent() {
  return <MaiButton variant="primary">Click me</MaiButton>;
}
```
See all components and usage examples in the [Storybook Docs](https://docs.shiraya.ma/mai-ui).

📄 License

- Source code: [MIT](./LICENSE)
- Peer dependency licenses: [LICENSES.md](./LICENSES.md)
