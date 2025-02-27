import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

export const randomName = (): void => {
  const name = faker.person.fullName({ sex: 'female' });
  console.log(name);
}; // Rowan Nikolaus

export const randomEmail = (): string => {
  return faker.internet.email();
}; // Kassandra.Haley@erich.biz
