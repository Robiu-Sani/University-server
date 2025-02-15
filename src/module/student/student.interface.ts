import { Model, ObjectId } from 'mongoose';

export interface studentInterface {
  user: ObjectId;
  roll: number;
  id: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  gender: 'male' | 'female';
  email: string;
  avatar?: string;
  dateOfBirth: string;
  contactNumber: string;
  emergencyContactNumber: string;
  bloodGroup?: 'A+' | 'O+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  department: ObjectId;
  guardian: {
    name: string;
    occupation: string;
    contactNumber: string;
  };
  profileImage?: string;
  samester?: ObjectId;
  isActive: 'active' | 'inActive';
}

export interface instanceStudentMethod {
  isStudentExits(id: string): Promise<studentInterface | null>;
}
export type intanceStudentModel = Model<
  studentInterface,
  Record<string, never>,
  instanceStudentMethod
>;
