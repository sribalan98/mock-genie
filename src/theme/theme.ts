import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  cssVarPrefix: 'joy',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg:
            'linear-gradient(135deg,rgb(84, 87, 253) 0%,rgb(255, 117, 244) 100%)',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          solidBg: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
        },
      },
    },
  },
});

export default theme;
