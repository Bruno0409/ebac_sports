// src/store/reducers/favoritesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types/Produto'

type FavoritesState = {
  itens: Produto[]
}

const initialState: FavoritesState = {
  itens: []
}

const favoritesSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
