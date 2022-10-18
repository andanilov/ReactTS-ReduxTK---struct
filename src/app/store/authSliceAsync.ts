import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUser from '../models/IUser';
import AuthService from '../services/AuthService';

export interface IauthInitState {
  access: number,
  user: IUser | IUser[] | {},
}

// --- Async actions
// export const userFetchAll = createAsyncThunk(
//   'authSlice/userFetchAll',
//   async () => {
//     const res = await AuthService.fetchAll(); // as IUser | IUser[];
//     return res;
//   },
// );
export const userLogin = createAsyncThunk(
  'authSlice/userLogin',
  async ({ email, password } : { email: string, password: string}) => {
    console.log('!!!');
    const res = await AuthService.login(email, password);
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
  // --- Async actions handlers
  extraReducers: (builder) => {
    // builder.addCase(userFetchAll.fulfilled, (state, { payload }) => { state.user = payload; });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.user = payload;
      console.log('fulfilled');
    });
  },
});

export default authSlice.reducer;
export const { inc } = authSlice.actions;
