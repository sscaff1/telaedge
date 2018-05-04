import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Ubuntu Mono',
      styles: ['300', '300i', '400', '400i', '500', '500i', '700', '700i'],
    },
    {
      name: 'Montserrat',
      styles: ['300', '300i', '400', '400i', '500', '500i', '700', '700i'],
    },
  ],
  headerFontFamily: ['Ubuntu Mono'],
  bodyFontFamily: ['Montserrat'],
});

export default typography;
