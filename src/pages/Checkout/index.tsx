import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { Form } from '../../components/Form';
import { CheckoutContainer, Info, PaymentContainer } from './styles';
import { useTheme } from 'styled-components';
import { Radio } from '../../components/Form/Radio';
import { useCartStore } from '../../store/CartStore';
import { CartItem } from '../../components/CartItem';

export function Checkout() {
  const theme = useTheme();
  const cart = useCartStore((state) => state.cart )
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu Pedido</h2>
        <Form />
        <PaymentContainer>
          <Info>
            <CurrencyDollar color={theme['purple-dark']} size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </Info>
          <div>
            <Radio value="credit" isSelected>
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </Radio>

            <Radio value={'debit'} isSelected={false}>
              <Bank size={16} />
              <span>Cartão de débito</span>
            </Radio>
            <Radio value={'cash'} isSelected={false}>
              <Money size={16} />
              <span>Dinheiro</span>
            </Radio>
          </div>
        </PaymentContainer>
      </div>
      <div>
        <h2>Cafés Selecionados</h2>
        <div>
            {cart.map((item) => {
               return <CartItem {...item}/>
            })}
        </div>
      </div>
    </CheckoutContainer>
  );
}
