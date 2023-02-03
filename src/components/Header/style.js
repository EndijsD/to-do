import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  padding: 2rem;
  background: linear-gradient(to right, #574ae2, #222a68);

  @media (max-width: 520px) {
    justify-content: center;
    gap: 1rem;
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 2rem;
  color: white;
  align-items: baseline;
`;

export const StyledLink = styled(Link)`
  font-size: 25px;
  padding: 0.5rem;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    color: #ccc;
    background: rgba(0, 0, 0, 0.1);
  }
  &:active {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const Input = styled.input`
  background: white;
  border-radius: 10px;
  padding: 5px;
  border: 2px solid white;

  &:hover {
    border: 2px solid black;
  }
  &:focus {
    border: 2px solid black;
  }
`;
