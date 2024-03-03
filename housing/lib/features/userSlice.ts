import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Userinfo {
 formData: {
  id:number,
  token: string
 }

}

const initialState: Userinfo = {
  formData: {
    id:0,
    token:""
  }
};




export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserId: (state, action: PayloadAction<number>) => {
      state.formData.id = action.payload;
    },
    updateUserToken: (state, action: PayloadAction<string>) => {
      state.formData.token = action.payload;
    },
  
  },
});

export const { updateUserId,updateUserToken } = user.actions;
export default user.reducer;
