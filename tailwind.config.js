/** @type {import('tailwindcss').Config} */
const extendedTheme = {
  textColor: {
    skin: {
      "sidenav-primary": "var(--sidenav-text-primary)",
      "sidenav-muted": "var(--sidenav-text-muted)",
      "main-primary": "var(--main-text-primary)",
    },
  },
  backgroundColor: {
    skin: {
      "sidenav-primary": "var(--sidenav-bg-primary)",
      "sidenav-muted": "var(--sidenav-bg-muted)",
      "main-primary": "var(--main-bg-primary)",
    },
  },
};
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      textColor: extendedTheme.textColor,
      backgroundColor: extendedTheme.backgroundColor,
    },
  },
  plugins: [],
};
