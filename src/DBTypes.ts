// create types as needed
import { ProfileResponse } from "./contentTypes";

type UserLevel = {
  user_level_id: number;
  level_name: "Admin" | "User" | "Guest";
};

type UserWithLevel = ProfileResponse & { level: UserLevel };

type TokenContent = Pick<ProfileResponse, "id"> & Pick<UserLevel, "level_name">;

export type { UserWithLevel, TokenContent };
