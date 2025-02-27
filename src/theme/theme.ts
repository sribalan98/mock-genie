import { extendTheme } from '@mui/joy/styles';
const theme = extendTheme({
  cssVarPrefix: 'joy',
  colorSchemes: {
    light: {
      main: {
        MainBgGradient:
          'linear-gradient(135deg, rgb(84, 87, 253) 0%, rgb(255, 117, 244) 100%)',
        MainTextColor: 'white',
        MainBgColor: '#242424',
      },
      square: {
        squareBgColor: 'rgb(27, 62, 90)',
        squareTextColor: '#eeeee4',
      },
    },
    dark: {
      main: {
        MainBgGradient: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
        MainTextColor: 'white',
        MainBgColor: '#242424',
      },
      square: {
        squareBgColor: '#eeeee4',
        squareTextColor: '#21130d',
      },
    },
  },
});

export default theme;
