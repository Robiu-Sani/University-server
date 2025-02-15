import { ObjectId } from 'mongoose';

export interface departmentInterface {
  name: string;
  faculty: ObjectId;
}
