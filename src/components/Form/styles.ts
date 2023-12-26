import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: ${({ theme }) => theme.card};
  padding: 2.5rem;
`;
export const InputContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress' 
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`;

export const Info = styled.div`
  display: flex;
  gap: 1rem;
  line-height: 130%;
  div {
    h3 {
      color: ${({ theme }) => theme.subtitle};
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400;
    }
    p {
      color: ${({ theme }) => theme.text};
      font-size: 0.875rem;
    }
    display: flex;
    flex-direction: column;
  }
`;

export const BaseInput = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.button};
  background-color: ${({ theme }) => theme.input};
`;
