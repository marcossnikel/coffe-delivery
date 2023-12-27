import { Trash } from 'phosphor-react';
import { Item, useCartStore } from '../../store/CartStore';
import { Container, RemoveButton } from './styles';
import { AmountInput } from '../Form/AmountInput';

export function CartItem(item: Item) {
  const [removeFromCart, increaseQuantity, decreaseQuantity] = useCartStore(
    state => [
      state.removeFromCart,
      state.incrementItemQuantity,
      state.decreaseItemQuantity
    ]
  );

  return (
    <Container id={item.id}>
      <img src={item.image} alt="" />
      <div>
        <div>
        <p>{item.title}</p>
        <span>R$ {item.price.toFixed(2)}</span>
        </div>
        <div>
          <AmountInput
            amount={item.quantity}
            increaseAmount={increaseQuantity(item)}
            decreaseAmount={decreaseQuantity(item)}
          />
          <RemoveButton onClick={() => removeFromCart(item.id)}>
            <Trash size={16} />
            REMOVER
          </RemoveButton>
        </div>
      </div>

    </Container>
  );
}
