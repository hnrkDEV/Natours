const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name']
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
      },
      photo: String,
      password: {
        type: String,
        required: [true, 'Password needed'],
        minlength: 8,
        select: false
      },
      passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
          // THIS ONLY WORKS ON CREATE AND SAVE!!!
          validator: function(el) {
            return el === this.password;
          },
          message: "Passwords are not the same!"
        }
      }
});

userSchema.pre('save', async function(next) {
  // ONLY RUN THIS FUNCTION IF PASSWORD WAS ACTUALLY MODIFIED
  if(!this.isModified('password')) return next();

  // HASH THE PASSWORD WITH COST OF 12
  this.password = await bcrypt.hash(this.password, 12);

  // DELETE THE PASSWORD FIELD TO NOT GO TO THE DB
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;