import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import { device } from "../styles/breakpoints";

const LoginLayout = styled.main`
  min-height: 100vh;
  /* display: grid; */
  /* grid-template-columns: 48rem; */

  /* align-content: center; */
  /* justify-content: center; */
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  align-items: center;
  .box {
    width: 50%;
    @media ${device.tablet} {
      width: 70%;
    }
    @media ${device.mobile} {
      width: 90%;
    }
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <div className="box">
        <LoginForm />
      </div>
    </LoginLayout>
  );
}

export default Login;
