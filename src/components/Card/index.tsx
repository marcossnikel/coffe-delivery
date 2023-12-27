import * as S from './styles';
import { Item, useCartStore } from '../../store/CartStore';
import { AmountInput } from '../Form/AmountInput';

type CardProps = {
  coffe: Item;
};

export function Card({ coffe }: CardProps) {
  const [addToCart, decreaseQuantity, increaseQuantity] = useCartStore(
    state => [
      state.addToCart,
      state.decreaseItemQuantity,
      state.incrementItemQuantity
    ]
  );

  return (
    <S.CardContainer>
      <img src={coffe.image} alt="" />
      <S.TagsContainer>
        {coffe.tags.map(tag => {
          return <S.Tag key={tag}>{tag}</S.Tag>;
        })}
      </S.TagsContainer>
      <S.CardTitle>{coffe.title}</S.CardTitle>
      <S.CardDescription>{coffe.description}</S.CardDescription>
      <S.CardFooter>
        <S.CardPrice>R$ {coffe.price.toFixed(2)}</S.CardPrice>
        <AmountInput
          decreaseAmount={decreaseQuantity}
          increaseAmount={increaseQuantity}
          amount={coffe.quantity}
        />
        <S.StyledAddToCartButton size={30} onClick={() => addToCart(coffe)} />
      </S.CardFooter>
    </S.CardContainer>
  );
}
