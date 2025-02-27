import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

export const randomUser = (dataSize?: number): void => {
  const name = faker.person.fullName({ sex: 'female' });
  const email = faker.internet.email();
  const phone = faker.phone.number();
  const address = faker.location.streetAddress();
  const city = faker.location.city();
  const state = faker.location.state();
  const zip = faker.location.zipCode({ format: '######' });
  const country = faker.location.country();
  console.log({ name, email, phone, address, city, state, zip, country });
};
