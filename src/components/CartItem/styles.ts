import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.card};
  gap: 1rem;
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div{
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    p {
      color: ${({ theme }) => theme.subtitle};
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
    }
  }

  span {
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const RemoveButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.text};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.button};
  display: flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  font-family: 'Roboto', sans-serif;
  line-height: 160%;
  border: 1px solid transparent;
  svg {
    color: ${({ theme }) => theme['purple-dark']};
  }
  
  &:hover{
    background-color: ${({theme}) => theme['purple-light']};
    border: 1px solid ${({theme})=> theme.purple};
  }
`;
