export interface SignupInputs {
  fistName: string;
  lastName: string;
  nationality: string;
  email: string;
  birthDate: Date;
  sex: string;
  password: string;
}

export interface SignupResult {
  token: string;
  error: {
    email: string;
  };
}
