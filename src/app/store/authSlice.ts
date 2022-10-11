import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { log } from 'console';
import IUser from '../models/IUser';
import AuthService from '../services/AuthService';

export interface IauthInitState {
  access: number,
  user: IUser | IUser[] | {},
}

export const userFetchAll = createAsyncThunk(
  'authSlice/userFetchAll',
  async () => {
    const res = await AuthService.fetchAll(); // as IUser | IUser[];
    return res;
  },
);

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    access: 0,
    user: {},
  } as IauthInitState,

  reducers: {
    inc: (state: IauthInitState, action: PayloadAction<number>) => {
      state.access = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(userFetchAll.fulfilled, (state, { payload }) => { state.user = payload; });
  },
});

export default authSlice.reducer;
export const { inc } = authSlice.actions;
