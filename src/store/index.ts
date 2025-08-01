import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/carrinho'
import favoritesReducer from './reducers/favoritesSlice'
import { produtosApi } from './services/produtosApi'

export const store = configureStore({
  reducer: {
    carrinho: cartReducer, // <-- nome mais claro e consistente
    favoritos: favoritesReducer,
    [produtosApi.reducerPath]: produtosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
