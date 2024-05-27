import React, { useState } from "react";
import styled from "styled-components";
import LogoImage from "../utils/Images/Logo.png";
import AuthImage from "../utils/Images/AuthImage.jpg";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

/**
 * Container: Main layout container for the authentication page.
 * Uses flexbox for layout and adjusts direction based on screen width.
 */
const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

/**
 * Left: Left side of the authentication layout.
 * Contains the logo and background image, hidden on small screens.
 */
const Left = styled.div`
  flex: 1;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;

/**
 * Logo: Styled image for the logo.
 * Positioned absolutely within the `Left` container.
 */
const Logo = styled.img`
  position: absolute;
  width: 70px;
  top: 40px;
  left: 60px;
  z-index: 10;
`;

/**
 * Image: Styled image for the background image in the `Left` container.
 * Uses object-fit to cover the entire area.
 */
const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

/**
 * Right: Right side of the authentication layout.
 * Contains sign-in and sign-up components and their toggle buttons.
 */
const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

/**
 * Text: Styled text component for descriptive text.
 * Center-aligned with responsive font size.
 */
const Text = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

/**
 * TextButton: Styled span for interactive text.
 * Changes color and weight on hover, used for toggling views.
 */
const TextButton = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
`;

/**
 * Authentication: Functional component for the authentication page.
 * Manages state to toggle between sign-in and sign-up views.
 * Renders the corresponding component based on the `login` state.
 */
const Authentication = () => {
  const [login, setLogin] = useState(false);

  return (
    <Container>
      <Left>
        <Logo src={LogoImage} />
        <Image src={AuthImage} />
      </Left>
      <Right>
        {!login ? (
          <>
            <SignIn />
            <Text>
              Don't have an account?{" "}
              <TextButton onClick={() => setLogin(true)}>SignUp</TextButton>
            </Text>
          </>
        ) : (
          <>
            <SignUp />
            <Text>
              Already have an account?{" "}
              <TextButton onClick={() => setLogin(false)}>SignIn</TextButton>
            </Text>
          </>
        )}
      </Right>
    </Container>
  );
};

export default Authentication;
