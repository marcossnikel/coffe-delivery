import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 6px;
  background-color: ${({theme}) => theme.button};



  span{
    padding-top: 2px;
    color: ${({theme}) => theme.title};
  }
  svg {
    color: ${({ theme }) => theme['purple-dark']};
    cursor: pointer;
  }
`;
