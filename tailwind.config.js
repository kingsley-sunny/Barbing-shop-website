module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        74: '19rem'

      },
      maxWidth: {
        'max': '81rem',
        'maxa': '88rem'
      },
      maxHeight: {
        100: '30rem',
        105: '35rem'
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