import { Minus, Plus } from "phosphor-react";
import { Container } from "./styles";
import { Item } from "../../../store/CartStore";

type AmountInputProps = {
    increaseAmount : (item: Item) => void
    decreaseAmount : (item: Item) => void 
    amount : number
}

export function AmountInput({increaseAmount,decreaseAmount,amount}: AmountInputProps){
    return(
        <Container>
            <Minus size={14} onClick={decreaseAmount}/>
            <span>{amount}</span>
            <Plus size={14} onClick={increaseAmount}/>
        </Container>
    )
}