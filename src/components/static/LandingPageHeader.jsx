import styled from "styled-components";
import SignupDropdown from "./signupDropdown/SignupDropdown";
import { Link } from "react-router-dom";

const LandingpageHeader = () => {
  return (
    <Container>
      <Nav_Content>
        <Logo>Eventiq</Logo>

        <NavLinks>
          <Navlink to="home" smooth={true} duration={600}>
            Home
          </Navlink>
          <Navlink to="about" smooth={true} duration={600}>
            About
          </Navlink>
          <Navlink to="faq" smooth={true} duration={600}>
            FAQ
          </Navlink>
        </NavLinks>

        <Nav_Buttons>
          <SignupDropdown />
          <Login_Button>Log In</Login_Button>
        </Nav_Buttons>
      </Nav_Content>
    </Container>
  );
};

export default LandingpageHeader;
const Login_Button = styled.button`
  padding: 0.75rem 1.5rem;
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: #374151;
  border: 1px solid #e0aa3d;
  border-radius: 0.375rem;
  font-size: 1rem;

  &:hover {
    background-color: #e9cf9c;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const Nav_Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
`;
const Navlink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #603379;
    cursor: pointer;
  }
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;
const Logo = styled.h1`
  font-family: "Brush Script MT", cursive;
  font-size: 32px;
  color: #fff;
  font-weight: 400;
  font-style: italic;
`;
const Nav_Content = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #292929;
  z-index: 50;
  border-bottom: 1px solid #e0aa3d;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
