import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types/Produto'

type CartState = {
  itens: Produto[]
}

const initialState: CartState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
