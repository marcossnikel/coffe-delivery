import * as S from './styles';
import logo from '/images/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
export function Header() {
  return (
    <S.HeaderContainer>
      <img src={logo} alt="Logo" />
      <S.Container>
        <S.Location>
          <MapPin size={20} style={{ color: '#8047F8' }} />
          <p>Jundiaí, SP</p>
        </S.Location>
        <S.ShoppingCartContainer>
          <ShoppingCart size={20} />
        </S.ShoppingCartContainer>
      </S.Container>
    </S.HeaderContainer>
  );
}
