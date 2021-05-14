import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../errors/bad-request-error";
import { validateRequest } from "../middleware/validate-request";
import { User } from "../models/users";
import { Password } from "../tools/password";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must apply a valid password"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new BadRequestError("Invalid credentials");
    }

    const isMatchedPassword = Password.compare(existingUser.password, password);

    if (!isMatchedPassword) {
      throw new BadRequestError("Invalid credentials");
    }

    // Generate json web token
    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.password,
      },
      process.env.JWT_KEY!
    );

    //  store jwt in cookies session

    req.session = {
      jwt: userJwt,
    };

    res.status(200).send(existingUser);
  }
);

export { router as signinRouter };
