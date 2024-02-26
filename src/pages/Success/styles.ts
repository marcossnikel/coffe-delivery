import styled from 'styled-components';

export const SuccessPageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 10rem;
`;

export const SuccessPageTitle = styled.h2`
  color: ${({ theme }) => theme['yellow-dark']};
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  margin-bottom: 0.5rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SuccessPageDescription = styled.p`
  color: ${({ theme }) => theme.subtitle};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-bottom: 1rem;
`;
