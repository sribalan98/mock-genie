import {
  Box,
  Select,
  Option,
  Input,
  Typography,
  useTheme,
  Button,
  Chip,
} from '@mui/joy';
import {
  DataTypes,
  DataTypeProps,
  UserDataTypes,
  OptionalDataTypes,
  AnimalDataTypes,
  TrainTicketDataTypes,
} from '../types/types';
import { JSX } from '@emotion/react/jsx-runtime';
import { randomUser } from '../Faker/UserFaker';
import { FC, useEffect, useState } from 'react';

function Configuration() {
  const themeConfig = useTheme();
  const [dataType, setDataType] = useState<string | null>(null);
  const [optionalDataTypes, setOptionalDataType] =
    useState<OptionalDataTypes>();

  useEffect(() => {
    if (dataType == null) return;

    switch (dataType) {
      case DataTypes.Users:
        setOptionalDataType({
          optionalDatatype: Object.values(UserDataTypes),
          defaultValues: [UserDataTypes.fullName, UserDataTypes.sex],
        });
        break;
      case DataTypes.Animal:
        setOptionalDataType({
          optionalDatatype: Object.values(AnimalDataTypes),
          defaultValues: [
            AnimalDataTypes.animalName,
            AnimalDataTypes.animalType,
          ],
        });
        break;
      case DataTypes.TrainTicket:
        setOptionalDataType({
          optionalDatatype: Object.values(TrainTicketDataTypes),
          defaultValues: [
            TrainTicketDataTypes.trainNumber,
            TrainTicketDataTypes.trainName,
          ],
        });
        break;
      // add a case based on enum DataTypes in types.ts
    }
  }, [dataType]);

  const onChangeDataType = (value: string | null): void => {
    setDataType(value);
  };
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
          <DataType onChangeDataType={onChangeDataType} dataType={dataType} />
          <OptionalData
            optionalDatatype={optionalDataTypes?.optionalDatatype || []}
            defaultValues={optionalDataTypes?.defaultValues || []}
          />
          <DataSize />
          <GenerateButton />
        </Box>
      </Box>
    </>
  );
}

export default Configuration;

const DataType: FC<DataTypeProps> = ({
  onChangeDataType,
  dataType,
}): JSX.Element => {
  const themeConfig = useTheme();

  const setOption: JSX.Element[] = Object.values(DataTypes).map(
    (data, index) => (
      <Option value={data} key={index}>
        {data}
      </Option>
    )
  );

  return (
    <>
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
        <Select
          id="optionSelect"
          placeholder="Generate Data Type"
          value={dataType}
          onChange={(_, value: string | null) => onChangeDataType(value)}
        >
          {setOption}
        </Select>
      </Box>
    </>
  );
};

const OptionalData: FC<OptionalDataTypes> = ({
  optionalDatatype,
  defaultValues,
}) => {
  const themeConfig = useTheme();
  const [selectedValues, setSelectedValues] = useState<string[]>(
    defaultValues || []
  );

  useEffect(() => {
    setSelectedValues(defaultValues || []);
  }, [defaultValues]);

  const userDataTypes = optionalDatatype.map((data: string, index: number) => (
    <Option
      value={data}
      key={index}
      disabled={defaultValues?.includes(data)}
      sx={{ color: themeConfig.vars.square.squareBgColor, fontWeight: 600 }}
    >
      {data}
    </Option>
  ));

  return (
    <>
      <Box>
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
          Select Optional Data
        </Typography>
        <Select
          multiple
          value={selectedValues}
          onChange={(_, value) => {
            if (Array.isArray(value)) {
              const stringValues = value.map((v) => String(v));
              setSelectedValues(stringValues);
            }
          }}
          renderValue={(selected) => (
            <Box
              sx={{
                display: 'flex',
                gap: '0.15rem',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              {selected.map((selectedOption, index) => (
                <Chip
                  variant="solid"
                  color="primary"
                  key={`${selectedOption.label}-${index}`}
                  sx={{
                    textAlign: 'center',
                    fontSize: '0.6rem',
                    letterSpacing: '0.5px',
                    borderRadius: '1rem',
                  }}
                >
                  {selectedOption.label}
                </Chip>
              ))}
            </Box>
          )}
          sx={{ minWidth: '15rem' }}
          slotProps={{
            listbox: {
              sx: {
                width: '100%',
                maxHeight: '10rem',
                minHeight: '10rem',
              },
            },
          }}
        >
          {userDataTypes}
        </Select>
      </Box>
    </>
  );
};

const DataSize = (): JSX.Element => {
  const themeConfig = useTheme();
  return (
    <>
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
        <Input id="dataSize" placeholder="100..." type="number" />
      </Box>
    </>
  );
};

const GenerateButton = (): JSX.Element => {
  return (
    <>
      <Box sx={{ marginY: '1rem' }}>
        <Button onClick={() => randomUser(10)}>Generate</Button>
      </Box>
    </>
  );
};
