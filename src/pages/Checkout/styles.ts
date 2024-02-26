import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  padding: 2rem 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
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
  gap: 2rem;

  div {
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

export const CartContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  gap: 2rem;
  background-color: ${({ theme }) => theme.card};
  border-radius: 6px 44px;
  max-width: 28rem;
  flex-direction: column;
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${({ theme }) => theme.text};
    display: flex;
    justify-content: space-between;
  }

  p:last-child {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const FinishOrderButton = styled.button`
  border: 1px solid transparent;
  color: ${({ theme }) => theme.white};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  line-height: 160%;
  font-size: 0.875rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.yellow};
  text-transform: uppercase;
  padding: 12px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
    color: ${({ theme }) => theme.card};
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.white};
  }
`;
