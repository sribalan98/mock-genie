import { faker } from '@faker-js/faker';
import { UserFaker } from '../types/types';
import { indiaStatesAndUTs, indiaDistricts } from '../datas/IndiaLocationData';

export const randomUser = (dataSize?: number): UserFaker => {
  // static data fullName , sex
  // Dynamic data email , phone , address , district , state , zip , country , firstName , lastName , zodiacSign , prefix , jobTitle , jobType
  const gender: 'male' | 'female' = faker.helpers.arrayElement([
    'male',
    'female',
  ]);
  const sex: string = gender;

  const firstName: string = faker.person.firstName(gender);
  const lastName: string = faker.person.lastName(gender);
  const fullName: string = faker.person.fullName({
    firstName: firstName,
    lastName: lastName,
    sex: gender,
  });
  const age: number = faker.number.int({ min: 18, max: 60 });
  const prefix: string = faker.person.prefix(gender);

  const userAvatar: string = faker.image.personPortrait({
    sex: gender,
    size: 512,
  });

  const email = faker.internet.email({
    firstName: firstName,
    lastName: lastName,
    provider: 'gmail.com',
  });
  const jobTitle: string = faker.person.jobTitle();
  const jobType: string = faker.person.jobType();

  const phonePrefix: number = faker.helpers.arrayElement([6, 8, 7, 9]);
  const phone: string = `+91-${phonePrefix}${faker.string.numeric(9)}`;

  const state: string = faker.helpers.arrayElement(indiaStatesAndUTs);
  const district: string = faker.helpers.arrayElement(indiaDistricts[state]);
  const address: string = faker.location.streetAddress();
  const zip: string = faker.location.zipCode({ format: '######' });
  const country: string = 'India';

  const zodiacSign: string = faker.person.zodiacSign();

  // console.log({
  //   fullName,
  //   sex,
  //   age,
  //   zodiacSign,
  //   prefix,
  //   userAvatar,
  //   jobTitle,
  //   jobType,
  //   email,
  //   phone,
  //   address,
  //   district,
  //   state,
  //   zip,
  //   country,
  // });
  return {
    fullName,
    sex,
  };
};
