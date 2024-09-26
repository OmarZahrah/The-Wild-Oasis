// Header.js
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { device } from "../styles/breakpoints";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  gap: 2.4rem;
`;

const MenuIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--color-grey-800);
  display: none;

  &:hover {
    color: var(--color-grey-600);
  }

  @media ${device.tablet} {
    display: block;
    z-index: 999;
    display: flex;
    align-items: center;
  }
`;

function Header({ toggleSidebar }) {
  return (
    <StyledHeader>
      <MenuIcon onClick={toggleSidebar}>
        <FaBars size={24} />
      </MenuIcon>
      <div>Header</div>
    </StyledHeader>
  );
}

export default Header;
