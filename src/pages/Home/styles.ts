import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;
  margin-right: 2rem;
`;

export const BannerTitle = styled.h2`
  color: ${({ theme }) => theme.title};
  font-family: 'Baloo 2', sans-serif;
  font-size: 3rem;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
`;

export const BannerDescription = styled.p`
  color: ${({ theme }) => theme.subtitle};
  font-family: Roboto;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const BannerInfo = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  p {
    display: flex;
    gap: 0.75rem;
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const StyledShoppingCart = styled(ShoppingCart)`
  background-color: ${({ theme }) => theme['yellow-dark']};
  border-radius: 100%;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  padding: 3px;
`;

export const StyledPackage = styled(Package)`
  background-color: ${({ theme }) => theme['text']};
  color: ${({ theme }) => theme.white};
  border-radius: 100%;
  font-weight: 700;
  padding: 3px;
`;

export const StyledCoffe = styled(Timer)`
  background-color: ${({ theme }) => theme['yellow']};
  color: ${({ theme }) => theme.white};
  border-radius: 100%;
  font-weight: 700;
  padding: 3px;
`;

export const StyledTimer = styled(Coffee)`
  background-color: ${({ theme }) => theme['purple']};
  border-radius: 100%;
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  padding: 3px;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem 10rem;
`;

export const Section = styled.p`
  padding: 2rem 10rem;
  margin-bottom: 2rem;
  line-height: 130%;
  font-size: 2rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
`;
