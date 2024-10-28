export interface Profile {
  id: number;
  name: string;
  bio?: string;
  location?: string;
  nationality?: string;
  availability?: boolean;
  dateOfBirth?: Date;
  email?: string;
  phone?: string;
  address?: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
  expectedSalary?: number;
  ownACar?: boolean;
  haveDrivingLicense?: boolean;
  noticePeriod?: number;
  immigrationStatus?: string;
  referees?: string;
  willingToRelocate?: boolean;
  languages?: string[];
  skills?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
