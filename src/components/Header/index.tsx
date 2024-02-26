import { Link } from 'react-router-dom';
import * as S from './styles';
import logo from '/images/logo.svg';
import { MapPin } from 'phosphor-react';
import { useCartStore } from '../../store/CartStore';
export function Header() {
  const cart = useCartStore(state => state.cart);
  return (
    <S.HeaderContainer>
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
      <S.Container>
        <S.Location>
          <MapPin size={20} style={{ color: '#8047F8' }} />
          <p>Jundiaí, SP</p>
        </S.Location>
        <S.ShoppingCartContainer>
          <Link to={'checkout'} aria-disabled={cart.length === 0}>
            <S.StyledShoppingCartHeadaer size={20} />
          </Link>
        </S.ShoppingCartContainer>
      </S.Container>
    </S.HeaderContainer>
  );
}
