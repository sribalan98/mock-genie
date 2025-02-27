import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

export const randomUser = (dataSize?: number): void => {
  const gender: 'male' | 'female' = 'male';
  const firstName: string = faker.person.firstName(gender);
  const lastName: string = faker.person.lastName(gender);
  const fullName: string = faker.person.fullName({
    firstName: firstName,
    lastName: lastName,
    sex: gender,
  });

  const email = faker.internet.email({
    firstName: firstName,
    lastName: lastName,
    provider: 'google.com',
  });
  const phonePrefix: number = faker.helpers.arrayElement([6, 8, 7, 9]);
  const phone = `+91-${phonePrefix}${faker.string.numeric(9)}`;

  const address = faker.location.streetAddress();
  const city = faker.location.city();
  const state = faker.location.state();
  const zip = faker.location.zipCode({ format: '######' });
  const country = faker.location.country();
  console.log({ fullName, email, phone, address, city, state, zip, country });
};
