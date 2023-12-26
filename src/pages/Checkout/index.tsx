import { CreditCard, CurrencyDollar, House, Money } from "phosphor-react"
import { Form } from "../../components/Form"
import { CheckoutContainer, Info, PaymentContainer, PaymentOption } from "./styles"
import { useTheme } from "styled-components"

export function Checkout(){
    const theme = useTheme()
    return(
        <CheckoutContainer>
            <div>
                <h2>Complete seu Pedido</h2>
                <Form/>
                <PaymentContainer>
                    <Info>
                        <CurrencyDollar color={theme["purple-dark"]} size={22}/>
                        <div>
                            <h3>Pagamento</h3>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </Info>
                    <div>
                        <PaymentOption><CreditCard size={16} color={theme["purple-dark"]}/>CARTÃO DE CRÉDITO</PaymentOption>
                        <PaymentOption><House size={16} color={theme["purple-dark"]}/>CARTÃO DE DÉBITO</PaymentOption>
                        <PaymentOption><Money size={16} color={theme["purple-dark"]}/>DINHEIRO</PaymentOption>
                    </div>
                </PaymentContainer>
            </div>
            <div>
                <h2>Cafés Selecionados</h2>
            </div>
        </CheckoutContainer>
    )
}