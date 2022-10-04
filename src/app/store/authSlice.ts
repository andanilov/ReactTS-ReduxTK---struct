import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IauthInitState {
  access: number,
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState: { access: 0 } as IauthInitState,
  reducers: {
    inc: (state: IauthInitState, action: PayloadAction<number>) => {
      state.access = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { inc } = authSlice.actions;
