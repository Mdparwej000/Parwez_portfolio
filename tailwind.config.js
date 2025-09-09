/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add explicit paths to all your component files
    "./src/App.jsx",
    "./src/main.jsx",
    "./src/components/*.jsx",
    "./src/components/**/*.jsx"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#8b5cf6',
        accent: '#ec4899',
        dark: '#0f172a',
        light: '#f8fafc'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite'
      }
    },
  },
  plugins: [],
}