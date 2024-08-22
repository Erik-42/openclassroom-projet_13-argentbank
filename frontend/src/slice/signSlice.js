import { createSlice } from '@reduxjs/toolkit'

const initialState = {
token:""
}

export const signSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    signIn: (state,action) => {
   //Mise à jour du token lors de la connexion
      state.token = action.payload
    },
    signOut: (state) => {
      //réinitialisation du token lors de la déconnexion
      state.token = ""
    },
  },
})

// Action creators are generated for each case reducer function
export const { signIn, signOut } = signSlice.actions

export default signSlice.reducer