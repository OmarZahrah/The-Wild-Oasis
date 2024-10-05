// Sidebar.js
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { device } from "../styles/breakpoints";
import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  transition: 0.4s ease-in-out;
  z-index: 900;

  left: ${({ isVisible }) => (isVisible ? "0" : "-100%")};

  @media ${device.tablet} {
    position: absolute;
    width: 70%;
    height: 100%;
  }
`;

function Sidebar({ isVisible }) {
  return (
    <StyledSidebar isVisible={isVisible}>
      <Logo />
      <MainNav />
      <Uploader />
    </StyledSidebar>
  );
}

export default Sidebar;
