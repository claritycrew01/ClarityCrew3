import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import jsxA11y from "eslint-plugin-jsx-a11y";

const config = [
  ...nextCoreWebVitals,
  {
    rules: jsxA11y.configs.recommended.rules,
  },
];

export default config;
