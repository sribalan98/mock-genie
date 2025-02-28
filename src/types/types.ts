import '@mui/joy/styles';

declare module '@mui/joy/styles' {
  interface ColorSystem {
    main: {
      MainBgGradient: string;
      MainBgColor: string;
      MainTextColor: string;
    };
    square: {
      squareBgColor: string;
      squareTextColor: string;
    };
  }
}

// export interface ConfigurationSelectOption {
//   option: string[];
// }

export interface CodeHighlighterProps {
  code: string;
}

export interface DataTypeProps {
  onChangeDataType: (value: string | null) => void;
  dataType: string | null;
}

export interface OptionalDataTypes {
  optionalDatatype: string[];
  defaultValues?: string[];
}

export interface UserFaker {
  fullName: string;
  sex: string;
  age?: number;
  zodiacSign?: string;
  prefix?: string;
  userAvatar?: string;
  jobTitle?: string;
  jobType?: string;
  email?: string;
  phone?: string;
  address?: string;
  district?: string;
  state?: string;
  zip?: string;
  country?: string;
}
export enum DataTypes {
  Users = 'Users',
  Animal = 'Animal',
  TrainTicket = 'Train Ticket',
}

export enum UserDataTypes {
  fullName = 'fullName',
  sex = 'sex',
  email = 'email',
  phone = 'phone',
  address = 'address',
  district = 'district',
  state = 'state',
  zip = 'zip',
  country = 'country',
  firstName = 'firstName',
  lastName = 'lastName',
  zodiacSign = 'zodiacSign',
  prefix = 'prefix',
  jobTitle = 'jobTitle',
  jobType = 'jobType',
}

export enum AnimalDataTypes {
  animalName = 'animalName',
  animalType = 'animalType',
  animalAge = 'animalAge',
  animalColor = 'animalColor',
}

export enum TrainTicketDataTypes {
  trainNumber = 'trainNumber',
  trainName = 'trainName',
  trainType = 'trainType',
  trainClass = 'trainClass',
  trainSeat = 'trainSeat',
}
