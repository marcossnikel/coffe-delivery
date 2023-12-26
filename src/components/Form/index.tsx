import {  MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { BaseInput, FormContainer, Info, InputContainer } from './styles';

export function Form() {
  const theme = useTheme();
  // const {register} = useFormContext()
  return (
    <FormContainer action="">
      <Info>
        <MapPinLine size={22} color={theme['yellow-dark']} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </Info>
      <InputContainer>
        <BaseInput type="text" placeholder='CEP' required style={{gridArea: 'cep'}}/>
        <BaseInput type="text" placeholder='Rua' required style={{gridArea: 'street'}}/>
        <BaseInput type="text" placeholder='Número' required style={{gridArea: 'number'}}/>
        <BaseInput type="text" placeholder='Complemento' style={{gridArea: 'fullAddress'}}/>
        <BaseInput type="text" placeholder='Bairro' required style={{gridArea: 'neighborhood'}}/>
        <BaseInput type="text" placeholder='Cidade' required style={{gridArea: 'city'}}/>
        <BaseInput type="text" placeholder='UF' required style={{gridArea: 'state'}}/>
      </InputContainer>
    </FormContainer>
  );
}
