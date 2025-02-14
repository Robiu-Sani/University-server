import mongoose from 'mongoose';
import { userInterface } from './user.interface';
import bcrypt from 'bcrypt';

const generateRandomPassword = () => {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
};

const userSchema = new mongoose.Schema<userInterface>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      default: `ph-hero${generateRandomPassword()}`,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
      default: 'student',
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
  // try {
  //   const salt = await bcrypt.genSalt(10);
  //   this.password = await bcrypt.hash(this.password, salt);
  //   next();
  // } catch (error) {
  //   next(error);
  // }
});

userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

const User = mongoose.model<userInterface>('Users', userSchema);

export default User;
