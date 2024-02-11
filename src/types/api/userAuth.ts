export type SignInParams = {
  email: string;
  password: string;
};

export type SignUpParams = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  image?: string;
};

export type User = {
  id: number;
  uid: string;
  provider: string;
  email: string;
  name: string;
  nickname?: string;
  image?: string;
  allowPasswordChange: boolean;
  role: string;
  created_at: Date;
  updated_at: Date;
};
