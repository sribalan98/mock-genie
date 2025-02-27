import { Box, useTheme, Typography } from '@mui/joy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import CodeHighlighter from './CodeHighlighter';

function Result() {
  const themeConfig = useTheme();
  const code: string = ``;
  const ResultLoader = () =>
    code === `` ? (
      <Typography
        sx={{
          color: themeConfig.vars.main.MainTextColor,
          fontWeight: 600,
        }}
      >
        No Code Here
      </Typography>
    ) : (
      <CodeHighlighter code={code} />
    );
  return (
    <>
      <Box
        sx={{
          marginTop: '1.5rem',
          '@media (min-width: 1024px)': { gridColumn: 'span 8 / span 8' },
        }}
      >
        <Box
          sx={{
            bgcolor: themeConfig.vars.square.squareBgColor,
            borderRadius: '0.5rem',
            padding: '1.5rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
            }}
          >
            <Typography
              level="h2"
              sx={{
                fontWeight: 600,
                fontSize: '1.5rem',
                color: themeConfig.vars.square.squareTextColor,
              }}
            >
              Result
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: '1rem',
              }}
            >
              <ContentCopyIcon
                sx={{
                  color: themeConfig.vars.main.MainTextColor,
                  cursor: 'pointer',
                  '&:hover': {
                    opacity: 0.8,
                  },
                }}
              />
              <DownloadIcon
                sx={{
                  color: themeConfig.vars.main.MainTextColor,
                  cursor: 'pointer',
                  '&:hover': {
                    opacity: 0.8,
                  },
                }}
              />
            </Box>
          </Box>

          <Box>
            <ResultLoader />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Result;
