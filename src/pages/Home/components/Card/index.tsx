import * as S from './styles';
import data  from '../../../../../data.json'
export function Card() {

  return (
    <S.Container>
      <h1>Nossos Cafés</h1>
      <S.ProductsListContainer>
        {data.coffees.map((coffe) => {
          return (
            <S.ProductItem key={coffe.id}>
              <img src={coffe.image} alt="" />
              <S.TagsContainer>
                {coffe.tags.map(tag => {
                  return <span key={tag}>{tag}</span>;
                })}
              </S.TagsContainer>
              <S.ProductTitle>{coffe.title}</S.ProductTitle>
              <S.ProductDescription>{coffe.description}</S.ProductDescription>
              <S.StyledFooterProductItem>
                <S.ProductItemPrice>R$ {coffe.price.toFixed(2)}</S.ProductItemPrice>

                <S.StyledAddToCartButton size={30} />
              </S.StyledFooterProductItem>
            </S.ProductItem>
          );
        })}
      </S.ProductsListContainer>
    </S.Container>
  );
}
