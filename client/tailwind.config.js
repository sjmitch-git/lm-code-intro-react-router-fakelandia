/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "var(--theme-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        tertiary: "var(--tertiary-color)",
        neutral: "var(--neutral-color)",
        dark: "var(--dark-color)",
        light: "var(--light-color)",
        info: "var(--info-color)",
        success: "var(--success-color)",
        warning: "var(--warning-color)",
        error: "var(--error-color)",
        danger: "var(--error-color)",
        current: "currentColor",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
