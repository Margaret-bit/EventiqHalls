import { useEffect, useState } from "react";
import styled from "styled-components";
import SignupModal from "../../components/static/signupModal/signupModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      <Container id="home">
        <Video autoPlay loop muted playsInline>
          <source src="src/assets/halls.mp4" type="video/mp4" />
        </Video>
        <Overlay></Overlay>

        <Hero_content>
          <h1>Find, Book, and Manage Event Halls with Ease</h1>
          <p>
            Eventiq connects hall owners and event organisers in one seamless
            experience.
          </p>
          <Button onClick={openModal}>Get Started</Button>
        </Hero_content>
      </Container>
      {isModalOpen && <SignupModal onClose={closeModal} />}
    </>
  );
};

export default Hero;
const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #603379;
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  margin-top: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #603379;
    transform: scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;
const Hero_content = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 1.5rem;
  max-width: 56rem;
  margin-top: 5rem;
  h1 {
    font-size: 40px;
    font-weight: bold;
    color: white;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }
  p {
    font-size: 1.25rem;
    color: #ffffff;
    margin-bottom: 2rem;
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.658);
`;
const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0%;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  z-index: 0;
  object-fit: cover;
`;
const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 100px;
  padding-bottom: 130px;
`;
