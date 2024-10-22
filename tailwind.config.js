/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        appear: {
          from: {
            opacity: 0,
            transform: 'translateY(2.1rem)',
          },
          to: {
            opacity: 100,
          },
        },
      },
      animation: {
        appear: 'appear 1s',
      },
      fontFamily: {
        monospace: ['Droid Sans Mono', 'monospace', 'monospace'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      violet: colors.violet,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      alabaster: '#fcecc0',
      alabaster_hover: '#d9cba5',
    },
  },
  plugins: [],
};
