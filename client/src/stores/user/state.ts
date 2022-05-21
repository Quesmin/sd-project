import { Appointment } from "../../models/entities/Appointment";
import { Favorite } from "../../models/entities/Favorite";
import { User } from "../../models/entities/User";

export interface UserState {
  isLoggedIn: boolean;
  isInputError: boolean;
  searchInput: string;
  isCarModalOpen: boolean;
  isAppModalOpen: boolean;
  user: User;
  favorites: Favorite[];
  appointments: Appointment[];
}

export const userInitialState: UserState = {
  isLoggedIn: false,
  isInputError: false,
  searchInput: "",
  isCarModalOpen: false,
  isAppModalOpen: false,
  user: {
    id: 0,
    email: "",
    isAdmin: false,
  },
  favorites: [],
  appointments: [],
};
