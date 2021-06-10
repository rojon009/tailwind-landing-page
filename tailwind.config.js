module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'slow-spin': 'spin 20s linear infinite'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
