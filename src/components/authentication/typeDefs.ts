export interface AuthenticationServiceSignupInput {
  firstName: string;
  lastName: string;
  nationality: string;
  email: string;
  birthDate: Date;
  sex: string;
  password: string;
}

export interface AuthenticationServiceSignupResult {
  token: string;
  error: {
    email: string;
  };
}
