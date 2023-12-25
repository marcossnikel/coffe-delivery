import * as S from './styles';
import { Item, useCartStore } from '../../../../store/CartStore';

type CardProps = {
  coffe: Item;
};

export function Card({ coffe }: CardProps) {
  const addToCart = useCartStore((state )=> state.addToCart)
  return (
        <S.CardContainer>
          <img src={coffe.image} alt="" />
          <S.TagsContainer>
            {coffe.tags.map(tag => {
              return <span key={tag}>{tag}</span>;
            })}
          </S.TagsContainer>
          <S.CardTitle>{coffe.title}</S.CardTitle>
          <S.CardDescription>{coffe.description}</S.CardDescription>
          <S.CardFooter>
            <S.CardPrice>R$ {coffe.price.toFixed(2)}</S.CardPrice>
            <S.StyledAddToCartButton size={30} onClick={() => addToCart(coffe)}/>
          </S.CardFooter>
        </S.CardContainer>
  );
}
