import { User } from "../../models/entities/User";

export interface UserState {
  isLoggedIn: boolean;
  isInputError: boolean;
  user: User;
}

export const userInitialState: UserState = {
  isLoggedIn: false,
  isInputError: false,
  user: {
    id: 0,
    email: "",
    isAdmin: false,
  },
};
