import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));

  @media (max-width: 20rem) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export const P = styled.p`
  margin: 1rem;
`;

export const Date = styled.p`
  text-align: end;
  margin-bottom: 1rem;
  font-style: italic;
  border-bottom: 1px solid #222a68;
  padding-bottom: 1rem;
`;

export const H1 = styled.h1`
  font-size: 30px;
  color: #222a68;
  font-weight: bold;
  border-bottom: 1px solid #222a68;
  padding-bottom: 1rem;
  text-align: center;
`;

export const Item = styled.div`
  margin: 2rem;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0px 0px 5px #abd2fa;
  background: white;
  border: 1px solid #abd2fa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background: #eee;
    border: 1px solid black;
  }

  @media (max-width: 20rem) {
    margin: 1rem 0;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const sharedStyle = css`
  border-radius: 10px;
  padding: 5px 10px;
  font-weight: bold;
  color: white;
  cursor: pointer;

  &:hover {
    background: #ccc;
  }
  &:active {
    background: #999;
  }
`;

export const Button = styled.button`
  ${sharedStyle}
  background: #FD151B;
`;

export const StyledLink = styled(Link)`
  ${sharedStyle}
  background: #16DB93;
`;
