import request from "supertest";
import { app } from "../../app";

it("returns a 201 on succesful signup", async () => {
  return await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);
});
