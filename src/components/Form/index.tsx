import { MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { BaseInput, FormContainer, Info, InputContainer } from './styles';
import { useFormContext } from 'react-hook-form';

export function Form() {
  const theme = useTheme();
  const { register } = useFormContext();
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
        <BaseInput
          type="text"
          placeholder="CEP"
          required
          style={{ gridArea: 'cep' }}
          {...register('cep')}
        />
        <BaseInput
          type="text"
          placeholder="Rua"
          required
          style={{ gridArea: 'street' }}
          {...register('street')}
        />
        <BaseInput
          type="text"
          placeholder="Número"
          required
          style={{ gridArea: 'number' }}
          {...register('number')}
        />
        <BaseInput
          type="text"
          placeholder="Complemento"
          style={{ gridArea: 'fullAddress' }}
          {...register('fullAddress')}
        />
        <BaseInput
          type="text"
          placeholder="Bairro"
          required
          style={{ gridArea: 'neighborhood' }}
          {...register('neighborhood')}
        />
        <BaseInput
          type="text"
          placeholder="Cidade"
          required
          style={{ gridArea: 'city' }}
          {...register('city')}
        />
        <BaseInput
          type="text"
          placeholder="UF"
          required
          style={{ gridArea: 'state' }}
          {...register('state')}
        />
      </InputContainer>
    </FormContainer>
  );
}
