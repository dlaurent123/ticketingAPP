import mongoose from "mongoose";

// An Interface that describes the properties that are required to create a new user

interface UserAttributes {
  email: string;
  password: string;
}
// An Interface that descibes the properties that the user model has

interface UserModel extends mongoose.Model<UserDoc> {
  build(attributes: UserAttributes): UserDoc;
}

// An Interface that descibes the properties that a user model has

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attributes: UserAttributes) => {
  return new User(attributes);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
