export interface studentInterface {
  id: string;
  name: {
    firstName: string;
    middleName: string;
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
  parmanentAddress: string;
  guardian: {
    name: string;
    occupation: string;
    contactNumber: string;
  };
  profileImage?: string;
  isActive: 'active' | 'inActive';
}
