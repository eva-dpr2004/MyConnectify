import styled from 'styled-components';

export const Sidenav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background: linear-gradient(to bottom, #333, #555);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  transition: width 0.3s ease-in-out;
`;

export const SidenavItem = styled.div`
  background-color: transparent;
  color: white;
  text-align: center;
  padding: 15px;
  margin: 5px 0;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: background-color 0.3s, font-size 0.2s;

  &:hover {
    background-color: #3e3e3e;
    font-size: 18px;
  }
`;
