import styled, { css } from "styled-components";
import { device } from "../styles/breakpoints";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;

  @media ${device.tablet} {
    width: 100%;
    padding: 3rem;
  }
  @media ${device.mobile} {
    padding: 1rem;
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
