import banner from '../../../public/images/banner.svg'
import * as S from './styles'
import { Card } from './components/Card';

export function Home() {
  return (
    <>
    <S.BannerContainer>
      <div>
      <S.BannerTitle>Encontre o café perfeito para qualquer hora do dia.</S.BannerTitle>
      <S.BannerDescription>
        Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora
      </S.BannerDescription>
      <S.BannerInfo>
        <p><S.StyledShoppingCart size={24}/> Compra simples e segura</p>
        <p><S.StyledPackage size={24}/> Embalagem mantém o café intacto</p>
        <p><S.StyledCoffe size={24}/> Entrega rápida e rastreada</p>
        <p><S.StyledTimer size={24}/> O café chega fresquinho até você</p>
      </S.BannerInfo>
      </div>
      <img src={banner} alt="cup of coffe with coffe beans" />
    </S.BannerContainer>
      <Card/>



    </>
  );
}
