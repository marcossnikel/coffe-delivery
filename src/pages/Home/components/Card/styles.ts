import { ShoppingCart } from 'phosphor-react';
import styled from 'styled-components';

export const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap :0.5rem;
  align-items: center;
  line-height: 130%;

  span {
    color: ${({ theme }) => theme['yellow-dark']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme['yellow-light']};
  }

`;

export const ProductTitle = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
`;
export const ProductDescription = styled.p`
    font-family: 'Roboto',sans-serif;
    text-align: center;
    color: ${({theme})=> theme.label};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    width: 16rem;
`;

export const StyledAddToCartButton = styled(ShoppingCart)`
  background-color: ${({theme})=> theme['purple-dark']};
  color: ${({theme}) => theme.white};
  border-radius: 6px;
  font-weight: 700;
  padding: 3px;
`;

export const StyledFooterProductItem = styled.div`
margin-top: 1rem;
display: flex;
align-items: center;
justify-content: space-between;
gap: 1.5rem;  
`

export const ProductItemPrice = styled.p`
color: ${({theme}) => theme.text};
font-family: 'Baloo 2',sans-serif;
font-size: 1.5rem;
font-weight: 800;
line-height: 130%;
`

export const TagsContainer = styled.div`
display: flex;
justify-content: space-between;
gap: 5px
`

export const Container = styled.div`
  padding: 2rem 10rem;
  
  h1{
    margin-bottom: 2rem;
    line-height: 130%;
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
  }
`