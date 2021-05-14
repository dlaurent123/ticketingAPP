import request from "supertest";
import { app } from "../../app";

const email = "dan@dan.com";
const password = "password";
const invalidEmail = "dan@dan.com";
const incorrectPassword = "passwords";

it("fails when email that does not exist is applied", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email,
      password,
    })
    .expect(400);
});

it("fails when an incorrect password is applied", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email,
      password,
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email,
      password: "jestjest",
    })
    .expect(400);
});

it("responds with a cookie when given valid credentials", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email,
      password,
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email,
      password,
    })
    .expect(200);

  expect(response.get("Set-Cookie"));
});
