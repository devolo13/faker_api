const express = require("express");
const app = express();
const {faker} = require('@faker-js/faker');

const createUser = () => {
  const newUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    _id: faker.number.int
  };
  return newUser;
}

const createCompany  = () => {
  const newCompany = {
    _id: faker.number.int,
    name: faker.company.name(),
    address: {
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country()
    }
  };
  return newCompany;
};

app.get('/api/users/new', (req, res) => {
  const newFakeUser = createUser();
  res.send(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
  const newFakeCompany = createCompany();
  res.send(newFakeCompany);
});

app.get("/api/user/company", (req, res) => {
  const newFakeCompany = createCompany();
  const newFakeUser = createUser();
  res.send({
    company: newFakeCompany,
    user: newFakeUser
  });
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
