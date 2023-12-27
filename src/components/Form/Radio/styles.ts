import styled from 'styled-components'


export const Container = styled.label`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme['button']};
  color: ${({ theme }) => theme['text']};
  text-transform: uppercase;
  font-family: 'Roboto',sans-serif;
  font-size: 0.75rem;
  line-height: 160%;
  font-weight: 400;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['hover']};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme['purple-light']};
    border-color: ${({ theme }) => theme['purple-dark']};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme['purple-dark']};
  }
`