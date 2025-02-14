// import { ObjectId } from 'mongoose';

export interface userInterface {
  id: string;
  password: string;
  // student: ObjectId;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
}
