module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.ts'],
  },
  theme: {
    extend: {
      colors: {
        primary: "#cc0b0e",
        secondar: {
          100: "gray",
          200: "black"
        }
      },
      fontFamily: {
        body: ['Nunito']
      },
      boxShadow: {
        blue: '0 4px 14px 0 rgba(19, 51, 81, 0.39)',
      },
    },
  },
  variants: ['responsive', 'group-hover', 'group-focus', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled'],
  plugins: [],
}
