import {
  Box,
  Select,
  Option,
  Input,
  Typography,
  useTheme,
  Button,
} from '@mui/joy';
import { ConfigurationSelectOption } from '../types/types';
import { JSX } from '@emotion/react/jsx-runtime';
import { randomName } from '../Faker/Faker';

function Configuration() {
  const themeConfig = useTheme();

  const Options: ConfigurationSelectOption = {
    option: ['Users', 'Animal', 'Train Ticket'],
  };

  const setOption: JSX.Element[] = Options.option.map((data, index) => (
    <Option value={data} key={index}>
      {data}
    </Option>
  ));
  return (
    <>
      <Box
        sx={{
          marginTop: '1.5rem',
          '@media (min-width: 1024px)': { gridColumn: 'span 4 / span 4' },
        }}
      >
        <Box
          sx={{
            bgcolor: themeConfig.vars.square.squareBgColor,
            borderRadius: '0.5rem',
            padding: '1.5rem',
            boxShadow:
              '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Typography
            level="h2"
            sx={{
              fontWeight: 600,
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
              color: themeConfig.vars.main.MainTextColor,
            }}
          >
            Configuration
          </Typography>
          <Box sx={{ marginY: '1rem' }}>
            <Typography
              component="label"
              htmlFor="optionSelect"
              sx={{
                color: themeConfig.vars.square.squareTextColor,
                fontSize: '1rem',
                fontWeight: 500,
                paddingX: '4px',
              }}
            >
              Data Type
            </Typography>
            <Select id="optionSelect" placeholder="Generate Data Type">
              {setOption}
            </Select>
          </Box>
          <Box sx={{ marginY: '1rem' }}>
            <Typography
              component="label"
              htmlFor="dataSize"
              sx={{
                color: themeConfig.vars.square.squareTextColor,
                fontSize: '1rem',
                fontWeight: 500,
                paddingX: '4px',
              }}
            >
              Data Size
            </Typography>
            <Input id="dataSize" placeholder="Type in here…" type="number" />
          </Box>
          <Box sx={{ marginY: '1rem' }}>
            <Button onClick={randomName}>Generate</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Configuration;
