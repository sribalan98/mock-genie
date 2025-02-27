import { Box } from '@mui/joy';
import Configuration from './Configuration';
import Result from './Result';

function GenerateArea() {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1,minmax(0,1fr))',
          gap: '2rem',
          '@media (min-width: 1024px)': {
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
          },
        }}
      >
        <Configuration />
        <Result />
      </Box>
    </>
  );
}

export default GenerateArea;
