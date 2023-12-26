import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  padding: 2rem 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  h2 {
    color: ${({ theme }) => theme.subtitle};
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 1rem;
  }
`;

export const PaymentContainer = styled.div`
  margin-top: 0.75rem;
  background-color: ${({ theme }) => theme.card};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap:2rem;

  div:last-child{
    display: flex;
    gap: 0.75rem;
  }
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

export const PaymentOption = styled.span`
  padding: 1rem;
  background-color: ${({theme}) => theme.button};
  border-radius: 6px;
  display: flex;
  color: ${({theme})=> theme.text};
  font-size: 0.75rem;
  gap: 0.75rem;
  align-items: center;
  flex: 1 1 0;
  border: 1px solid transparent;
  &:hover{
    border: 1px solid ${({theme}) => theme['purple-dark']};
    background-color: ${({theme}) => theme['purple-light']};
  }
`