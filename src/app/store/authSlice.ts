import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUser from '../models/IUser';

export interface IauthInitState {
  access: number,
  user: IUser | IUser[] | {},
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    access: 0,
    user: {},
  } as IauthInitState,

  reducers: {
    setUser: (state: IauthInitState, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
