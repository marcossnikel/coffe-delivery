import { ShoppingCart } from 'phosphor-react';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  line-height: 130%;
`;

export const CardTitle = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
`;
export const CardDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: ${({ theme }) => theme.label};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
  width: 16rem;
`;

export const StyledAddToCartButton = styled(ShoppingCart)`
  background-color: ${({ theme }) => theme['purple-dark']};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  border-radius: 6px;
  font-weight: 700;
  padding: 3px;

  &:hover {
    transition: 0.2s;
    background-color: ${({ theme }) => theme['purple']};
  }

  &:disabled{
    cursor: not-allowed;
    background-color: ${({theme} ) => theme['purple-light']};
  }
`;

export const CardFooter = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const CardPrice = styled.p`
  color: ${({ theme }) => theme.text};
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 130%;
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

export const Tag = styled.span`
  color: ${({ theme }) => theme['yellow-dark']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme['yellow-light']};
`;
