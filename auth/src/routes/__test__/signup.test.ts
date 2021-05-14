import request from "supertest";
import { app } from "../../app";

const email = "test@test.com";
const password = "password";
const invalidEmail = "test@test";
const invalidPassword = "pa";

it("returns a 201 on succesful signup", async () => {
  return await request(app)
    .post("/api/users/signup")
    .send({
      email,
      password,
    })
    .expect(201);
});

it("returns a 400 with an invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: invalidEmail,
      password,
    })
    .expect(400);
});

it("returns a 400 with an invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email,
      password: invalidPassword,
    })
    .expect(400);
});

it("returns a 400 with an invalid password and email", async () => {
  return request(app).post("/api/users/signup").send({}).expect(400);
});

it("disallows duplicate emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email,
      password,
    })
    .expect(201);

  await request(app)
    .post("/api/users/signup")
    .send({
      email,
      password,
    })
    .expect(400);
});

it("sets a cookie after succeful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email,
      password,
    })
    .expect(201);
  2;
  expect(response.get("Set-Cookie")).toBeDefined();
});
