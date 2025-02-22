import { Box, Sheet, useTheme, Typography, Button } from '@mui/joy';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
  const themeConfig = useTheme(); // Get theme values
  return (
    <>
      <Box sx={{ height: '100vh', width: '100vw', bgcolor: '#242424' }}>
        <Sheet
          sx={{
            height: '5rem',
            width: 'auto',
            display: 'flex',
            alignItems: 'center',
            backgroundImage: themeConfig.vars.palette.primary.solidBg,
            paddingX: '2rem',
          }}
        >
          <Typography
            level="h1"
            sx={{
              fontWeight: 800,
              color: 'white',
              fontFamily: 'Roboto',
              letterSpacing: '1px',
            }}
          >
            Mock Genie
          </Typography>
          {/* icons on right end */}
          <Box
            sx={{
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="solid"
              sx={{
                backgroundImage: themeConfig.vars.palette.primary.solidBg,
                backgroundSize: 'cover',
                color: 'white',
                fontFamily: 'Roboto',
                fontWeight: 600,
                letterSpacing: '0.9px',
                '&:hover': {
                  backgroundImage: themeConfig.vars.palette.primary.solidBg, // Keeps gradient on hover
                },
              }}
              startDecorator={
                <GitHubIcon
                  sx={{
                    fontSize: '1.5rem',
                    color: 'white',
                  }}
                />
              }
            >
              Sribalan
            </Button>
          </Box>
        </Sheet>
      </Box>
    </>
  );
}

export default Home;
