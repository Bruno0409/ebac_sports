import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { Produto } from '../../types/Produto'

const Header = () => {
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )

  const valorTotal = itensNoCarrinho.reduce(
    (acc: number, item: Produto) => acc + item.preco,
    0
  )

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="cesta" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
