import { Trash } from 'phosphor-react';
import { Item, useCartStore } from '../../store/CartStore';
import { Container, RemoveButton } from './styles';
import { AmountInput } from '../Form/AmountInput';

type CartItemProps = {
  item: Item;
};

export function CartItem({ item }: CartItemProps) {
  console.log(item);

  const [removeFromCart, increaseQuantity, decreaseQuantity] = useCartStore(
    state => [
      state.removeFromCart,
      state.incrementItemQuantity,
      state.decrementItemQuantity
    ]
  );

  return (
    <Container id={item.id}>
      <img src={item.image} alt="" />
      <div>
        <div>
          <p>{item.title}</p>
        </div>
        <div>
          <AmountInput
            item={item}
            amount={item.quantity}
            increaseAmount={() => increaseQuantity(item)}
            decreaseAmount={() => decreaseQuantity(item)}
          />
          <RemoveButton onClick={() => removeFromCart(item.id)}>
            <Trash size={16} />
            REMOVER
          </RemoveButton>
        </div>
      </div>
      <span>R$ {item.price.toFixed(2)}</span>
    </Container>
  );
}
