import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { Form } from '../../components/Form';
import { CartContainer, CheckoutContainer, FinishOrderButton, Info, OrderInfoContainer, PaymentContainer } from './styles';
import { useTheme } from 'styled-components';
import { Radio } from '../../components/Form/Radio';
import { useCartStore } from '../../store/CartStore';
import { CartItem } from '../../components/CartItem';
import { useState } from 'react';

type PaymentMethods = 'credit' | 'debit' | 'cash'

export function Checkout() {
  const theme = useTheme();
  const [cart,value] = useCartStore((state) => [state.cart,state.cartValue] )
  
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>('credit')
  const MoneyFormatter = new Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency : 'BRL'
  })

  const handleChangePaymentMethods = (paymentMethod : PaymentMethods) => {
    setPaymentMethod(paymentMethod)
  }
  const deliveryPrice = value + 6.50
  const orderPrice = value + deliveryPrice
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
            <Radio value="credit" isSelected={paymentMethod === 'credit'} onClick={() => handleChangePaymentMethods('credit')}>
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </Radio>

            <Radio value={'debit'} isSelected={paymentMethod === 'debit'} onClick={() => handleChangePaymentMethods('debit')}>
              <Bank size={16} />
              <span>Cartão de débito</span>
            </Radio>
            <Radio value={'cash'} isSelected={paymentMethod === 'cash'} onClick={() => handleChangePaymentMethods('cash')}>
              <Money size={16} />
              <span>Dinheiro</span>
            </Radio>
          </div>
        </PaymentContainer>
      </div>
      <div>
        <h2>Cafés Selecionados</h2>
        <CartContainer>
            {cart.map((item) => {
               return <CartItem item={item}/>
            })}
            <OrderInfoContainer>
            <p>Total de items : <span>{MoneyFormatter.format(value)}</span></p>
            <p>Valor da Entrega : <span>{MoneyFormatter.format(deliveryPrice)}</span></p>
            <p>Total : <span>{MoneyFormatter.format(orderPrice)}</span></p>
            </OrderInfoContainer>
            <FinishOrderButton>confirmar pedido</FinishOrderButton>
        </CartContainer>
      </div>
    </CheckoutContainer>
  );
}
