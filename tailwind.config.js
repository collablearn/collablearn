/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'main': '#800000',
        'submain': '#E9BA46',
        'aux': '#8E7E60'
      },
    }
  },
  plugins: []
};