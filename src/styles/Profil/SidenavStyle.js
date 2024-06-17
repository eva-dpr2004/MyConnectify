import styled from 'styled-components';

export const BurgerMenuIcon = styled.div`
  position: fixed;
  top: 10px;
  left: 5px;
  font-size: 2rem;
  color: #ffffff;
  z-index: 1001;
  cursor: pointer;
`;

export const Sidenav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background-color: #daca3b;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
`;

export const SidenavItem = styled.div`
  background-color: #daca3b;
  color: white;
  text-align: center;
  padding: 15px;
  margin: 5px 0;
  cursor: pointer;
  font-family: 'Inter', sans-serif;

  &:hover {
    background-color: #b5a032;
  }
`;
