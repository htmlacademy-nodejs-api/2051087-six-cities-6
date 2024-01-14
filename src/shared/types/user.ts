export type User = {
  name: string,
  email: string,
  avatar?: string,
  password: string,
  userType: UserType,
};

export enum UserType {
  common = 1,
  pro = 2
};
