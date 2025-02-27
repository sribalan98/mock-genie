import { Box, Button, Sheet, Typography, useTheme } from '@mui/joy';
import GitHubIcon from '@mui/icons-material/GitHub';

function Navbar() {
  const themeConfig = useTheme(); // Get theme values
  return (
    <>
      <Sheet
        sx={{
          height: '4rem',
          width: 'auto',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: themeConfig.vars.main.MainBgGradient,
          paddingX: '2rem',
        }}
      >
        <Typography
          level="h1"
          sx={{
            fontWeight: 800,
            color: themeConfig.vars.main.MainTextColor,
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
              backgroundImage: themeConfig.vars.main.MainBgGradient,
              backgroundSize: 'cover',
              color: themeConfig.vars.main.MainTextColor,
              fontFamily: 'Roboto',
              fontWeight: 600,
              letterSpacing: '0.9px',
              '&:hover': {
                backgroundImage: themeConfig.vars.main.MainBgGradient, // Keeps gradient on hover
              },
            }}
            startDecorator={
              <GitHubIcon
                sx={{
                  fontSize: '1.5rem',
                  color: themeConfig.vars.main.MainTextColor,
                }}
              />
            }
          >
            Sribalan
          </Button>
        </Box>
      </Sheet>
    </>
  );
}

export default Navbar;
