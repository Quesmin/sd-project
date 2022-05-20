import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { UserReducer } from "./user/slice";
import { UserState } from "./user/state";

export interface RootState {
  user: UserState;
}

const userPersistConfig = {
  key: "user",
  storage,
};
const store = configureStore({
  reducer: combineReducers<RootState>({
    user: persistReducer(userPersistConfig, UserReducer as Reducer),
  }),
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof store.getState>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
export const useAppDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;
