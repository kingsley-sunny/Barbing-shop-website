module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        74: '19rem'
      }
    },
  },
  variants: {
    extend: {
      display : ['responsive', 'group-hover', 'group-focus'],
      backgroundColor: ['active'],
      translate: ['active', 'group-hover', 'hover'],
      transitionProperty: ['group-hover'],
      transitionDuration: ['group-hover'],
      scale: ['active', 'group-hover']
    },
  },
  plugins: [],
}