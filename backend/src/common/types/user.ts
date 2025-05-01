interface UserType {
  userId: string;
  username: string;
  email: string;
  bio?: string;
  userType: "creator" | "fan";
}

export type User = UserType;
