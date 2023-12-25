import styled from "styled-components";

export const HeaderContainer = styled.div`
 padding: 2rem 10rem;
 display: flex;
 justify-content: space-between;
 align-items: center;
`
export const Location = styled.div`
padding: 0.5rem;
display: flex;
justify-content: center;
background: ${({theme}) => theme["purple-light"]};
border-radius: 6px;
font-size: 14px;
font-family: 'Roboto';
cursor: pointer;
color: ${({theme}) => theme["purple-dark"]};
align-items: center;    
gap: 4px;
`
export const Container = styled.div`
display:flex;
gap:0.5rem;
align-items: center;
justify-content: center
`

export const ShoppingCartContainer = styled.div`
padding: 0.5rem;
background-color: ${({theme}) => theme["yellow-light"]};
color: ${({theme}) => theme["yellow-dark"]};
border-radius: 8px;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
`
