import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number },
  categoryList: [
    {
      ref: "categorys",
      type: mongoose.Types.ObjectId,
    },
  ],
});

//generating jwt tokens

UserSchema.methods.generateJWT = function () {
  return jwt.sign({ user: this._id.toString() }, process.env.SECRET_KEY);
};

UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {
  const checkUserByEmail = await UserModel.findOne({ email });
  const checkUserByPhone = await UserModel.findOne({ phoneNumber });
  console.log(checkUserByEmail || checkUserByPhone);
  if (checkUserByEmail) {
    throw new Error("User Already Exists ...!");
  }
  return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
  const user = await UserModel.findOne({ email });
  console.log(user);
  if (!user) throw new Error("User does not exist !!! ");

  // Comparing Stored & Encrypted Password and (Encrypting user filled password)
  const doesPasswordMatch = await bcrypt.compare(password, user.password);

  if (!doesPasswordMatch) throw new Error("Invalid Credentials !!!");
  return user;
};

UserSchema.pre("save", function (next) {
  const user = this;
  console.log(user);

  bcrypt.genSalt(8, function (error, salt) {
    //error(1)
    if (error) return next(error);

    bcrypt.hash(user.password, salt, function (error, hash) {
      // error (1)
      if (error) return next(error);

      user.password = hash;
      return next();
    });
  });
});

export const UserModel = mongoose.model("users", UserSchema);

// Difference between statics and methods

/**
 * n Mongoose, a schema is used to define the structure of the documents in a MongoDB collection. 
 * The statics and methods properties on a schema are used to add static and instance methods to 
 * the schema, respectively.

statics is an object that allows you to add static methods to the schema, which 
can be called on the model directly. For example, if you have a User model and you add a 
static method called findByName, you can call User.findByName(name, cb) to find a user by their
 name.

methods is an object that allows you to add methods to the schema, which can be called 
on the instances of the model. For example, if you have a User model and you add a method 
called generateJWT, you can call user.generateJWT() on an instance of a User to generate a 
JSON Web Token.

Both statics and methods are used to add custom functions to Mongoose schema and model,
 but the only difference is that statics methods are attached to the model and can be called on 
 the model and methods methods are attached to the document and can be called on the document.
 */

// (1)

/**
 * 
 *
You may be getting 'undefined' for the current instance of the Mongoose model for several reasons. 
Some possible causes include:
You are trying to access the current instance of the model outside of a Mongoose 
middleware function or method, where 'this' does not refer to the current model instance.
You are using an arrow function instead of a regular function, which changes the value of 'this'.
There is an error in your Mongoose schema, causing the model instance to be undefined.
There is an error in your code that is preventing the model instance from being properly 
created or accessed.
It would be helpful to see the code in context and the error message.
 * 
 */

// Example for JWT Token

/**
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjNkMmE2MjMyNDBiZGFhNzJiODE5NGQwIiwiaWF0IjoxNjc0NzQ5NDc2fQ.fSKu__ZTeBYCVOl9Tm2HDkfyhFsT23Q-P57NnH6lqMk
 */
