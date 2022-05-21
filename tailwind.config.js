module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
      'purple'       : '#5E3B76',
      'purple-400'   : '#826595',
      'purple-200'   : '#C9BDD2',
      'green-500'    : '#25A1AF',
      'green-700'    : '#1B818C',
      'info'         : '#E2D9F3',
      'tertiary'     : '#6C757D',
      'danger'       : '#DC3545',
      'light'        : '#F8F9FA',
      'light-200'    : '#F6F6F6',
      'border-light' : '#EDF2F7',
      'cautions'     : '#FDEFEF',
      'premium'      : '#FFD747',
      'dark'         : '#212529',
      'white'        : '#FFFFFF',
      'transparent'  : 'transparent',
      'gray-400'     : '#CED4DA'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      boxShadow: {
        'innerShadow' : 'inset 0 0 18px -4px rgba(0,0,0,.15)',
      },
    },
    container: {
      center : true,
      padding : '24px'
    }

    
  },
  plugins: [],
}