import { Appointment } from "../../models/entities/Appointment";
import { Favorite } from "../../models/entities/Favorite";
import { User } from "../../models/entities/User";

export interface UserState {
  isLoggedIn: boolean;
  isInputError: boolean;
  searchInput: string;
  user: User;
  favorites: Favorite[];
  appointments: Appointment[];
}

export const userInitialState: UserState = {
  isLoggedIn: false,
  isInputError: false,
  searchInput: "",
  user: {
    id: 0,
    email: "",
    isAdmin: false,
  },
  favorites: [],
  appointments: [],
};
