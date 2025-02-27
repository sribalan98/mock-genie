import { Box, Typography, useTheme } from '@mui/joy';

function TitleBoard() {
  const themeConfig = useTheme();
  return (
    <>
      <Box
        sx={{
          width: '100%',
          paddingY: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          level="h1"
          sx={{ color: themeConfig.vars.main.MainTextColor }}
        >
          Generate Mock Data Instantly
        </Typography>
        <Typography
          level="title-lg"
          sx={{ color: themeConfig.vars.main.MainTextColor }}
        >
          Create realistic test data for your applications
        </Typography>
      </Box>
    </>
  );
}

export default TitleBoard;
