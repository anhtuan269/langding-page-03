module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'slide': 'url(@/static/image/background-slide.png)'
      },
      backgroundColor:{
        'orange':'#F48F38',
        'blue':'#0F69C9',
        'purple':'#673E66'
      },
      textColor:{
          'rgba':'#1D3547'
      },

      fontSize: {
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
        '18': '1.125rem',
        '20': '1.25rem',
        '22': '1.375rem',
        '24': '1.5rem',
        '25':'1.5625rem',
        '28': '1.75rem',
        '34':'2.125rem',
        '42': '2.625rem',
        '50': '3.125rem',
        '60':'3.75rem',
        '80':'5rem',
        '200':'12.5rem'
      },
      lineHeight: {
        'l-80':'5rem',
        'l-68':'4.25rem',
        'l-34':'2.125rem',
        'l-21':'1.3125rem',
        'l-27':'1.8125rem',
        'l-272':'272.8px',
        '42':'51.2px',
        '44':'44.2px',
        '36':'36.4px'
      },
      borderColor: {
        'blue': '#0F69C9',
        'red': '#F05F6B',
        'orange':'#F48F38'
      },
      padding:{
        'p10': '0.625rem',
        'p20':'1.25rem',
        'p31':'1.9375rem',
        'p39':'2.4375rem',
        'p60':'3.75rem',
        'p65':'4.0625rem',
        'p130':'8.125rem'

      },
      borderWidth: {
          '4':'4px'
      },
      borderRadius: {
        '20':'1.25rem'
      },

      translate: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '7/10': '-65%',
        '8/10': '-79%'
       },
       width: {
         '338': '338px',
         '400':'400px',
         
       },
       height: {
        '150':'150px',
        '50': '50px'
       },
       maxWidth: {
         '480':'480px',
         '358':'348px'
       }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
