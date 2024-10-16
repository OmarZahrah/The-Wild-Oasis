import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { FaBars } from "react-icons/fa";
import { device } from "../styles/breakpoints";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  gap: 2.4rem;
  justify-content: space-between;
`;

const MenuIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--color-grey-800);
  /* display: none; */
  visibility: hidden;

  &:hover {
    color: var(--color-grey-600);
  }

  @media ${device.tablet} {
    display: block;
    visibility: visible;
    z-index: 999;
    display: flex;
    align-items: center;
  }
`;

const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  justify-content: flex-end;
`;

function Header({ toggleSidebar }) {
  return (
    <StyledHeader>
      <MenuIcon onClick={toggleSidebar}>
        <FaBars size={24} />
      </MenuIcon>
      <HeaderItems>
        <UserAvatar />
        <HeaderMenu />
      </HeaderItems>
    </StyledHeader>
  );
}

export default Header;
