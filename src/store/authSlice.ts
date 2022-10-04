import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IauthInitState {
  isAuth: boolean,
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState: { isAuth: true } as IauthInitState,
  reducers: {
    inc: (state: IauthInitState, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { inc } = authSlice.actions;
