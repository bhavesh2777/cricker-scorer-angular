/** @type {import('tailwindcss').Config} */
const extendedTheme = {
  textColor: {
    skin: {
      "sidenav-primary": "var(--sidenav-text-primary)",
      "sidenav-muted": "var(--sidenav-text-muted)",
    },
  },
  backgroundColor: {
    skin: {
      "sidenav-primary": "var(--sidenav-bg-primary)",
      "sidenav-muted": "var(--sidenav-bg-muted)",
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
