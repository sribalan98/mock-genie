import { FC, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CodeHighlighterProps } from '../types/types';
import { Box } from '@mui/joy';

const CodeHighlighter: FC<CodeHighlighterProps> = ({ code }) => {
  //   const themeConfig = useTheme();
  const resultRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Box
        ref={resultRef}
        component={SyntaxHighlighter}
        language="json"
        sx={{
          borderRadius: '0.2rem',
          maxHeight: '400px', // Set a maximum height
          overflowY: 'auto', // Enable vertical scrolling
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        }}
      >
        {code}
      </Box>
    </>
  );
};

export default CodeHighlighter;
