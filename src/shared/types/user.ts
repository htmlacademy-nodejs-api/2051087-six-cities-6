export type User = {
  name: string,
  email: string,
  avatar?: string,
  password: string,
  userType: UserType,
};

export enum UserType {
  common = 'common',
  pro = 'pro'
};
