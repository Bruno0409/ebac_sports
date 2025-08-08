import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store'
import { useGetProdutosQuery } from '../store/services/produtosApi'
import { addItem } from '../store/reducers/carrinho'
import { addFavorite, removeFavorite } from '../store/reducers/favoritesSlice'

import Produto from '../components/Produto'
import { Produto as ProdutoType } from '../types/Produto'

import * as S from './styles'

const ProdutosComponent = () => {
  const dispatch = useDispatch<AppDispatch>()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)
  const { data: produtos = [], isLoading } = useGetProdutosQuery()

  const produtoEstaNosFavoritos = (produtoId: number) =>
    favoritos.some((f) => f.id === produtoId)

  const handleComprar = (produto: ProdutoType) => {
    dispatch(addItem(produto))
  }

  const handleFavoritar = (produto: ProdutoType) => {
    if (produtoEstaNosFavoritos(produto.id)) {
      dispatch(removeFavorite(produto.id))
    } else {
      dispatch(addFavorite(produto))
    }
  }

  if (isLoading) return <p>Carregando...</p>

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto.id)}
          aoComprar={handleComprar}
          favoritar={handleFavoritar}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
