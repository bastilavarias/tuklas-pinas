export interface IProfileBaseInput {
  firstName: string;
  lastName: string;
  nationality: string;
  birthDate: Date;
  sex: string;
}

export interface IProfileModelSaveDetailsInput extends IProfileBaseInput {
  imageID: number;
}

export interface IProfileServiceUpdateDetailsInput extends IProfileBaseInput {
  displayImage: Express.Multer.File;
  coverPhoto: Express.Multer.File;
}

export interface IProfileModelUpdateDetailsInput extends IProfileBaseInput {}
