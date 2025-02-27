import { Box, useTheme } from '@mui/joy';
import Navbar from '../components/Navbar';
import TitleBoard from '../components/TitleBoard';
import GenerateArea from '../components/GenerateArea';

function Home() {
  const themeConfig = useTheme();
  return (
    <>
      <Box
        sx={{
          height: 'auto',
          width: 'auto',
          bgcolor: themeConfig.vars.main.MainBgColor,
        }}
      >
        <Navbar />
        <Box
          sx={{
            flexGrow: 1,
            padding: '4rem',
          }}
        >
          <TitleBoard />
          <GenerateArea />
        </Box>
      </Box>
    </>
  );
}

export default Home;
