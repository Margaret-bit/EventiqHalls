import styled from "styled-components";
import { Calendar, CheckCircle, Shield } from "lucide-react";

const Feature_cards = () => {
  return (
    <Container>
      <Cards_holder>
        <Card>
          <Calendar
            style={{
              width: "2.5rem",
              height: "2.5rem",
              marginBottom: "0.75rem",
            }}
          />
          <h3>Seamless</h3>
          <p>Booking</p>
        </Card>
        <Line>|</Line>
        <Card>
          <CheckCircle
            style={{
              width: "2.5rem",
              height: "2.5rem",
              marginBottom: "0.75rem",
            }}
          />
          <h3>Verified</h3>
          <p>Venues</p>
        </Card>
        <Line>|</Line>
        <Card>
          <Shield
            style={{
              width: "2.5rem",
              height: "2.5rem",
              marginBottom: "0.75rem",
            }}
          />
          <h3>Secure</h3>
          <p>Payments</p>
        </Card>
        <Line>|</Line>
        <Card>
          <CheckCircle
            style={{
              width: "2.5rem",
              height: "2.5rem",
              marginBottom: "0.75rem",
            }}
          />
          <h3>Verified</h3>
          <p>Venues</p>
        </Card>
      </Cards_holder>
    </Container>
  );
};

export default Feature_cards;
const Line = styled.div`
  color: white;
  height: auto;
  font-weight: lighter;
  font-size: 7rem;
  margin-bottom: 0.5rem;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  h3 {
    font-weight: 600;
    font-size: 1.125rem;
    margin-bottom: 0.25rem;
    margin-top: 0;
  }
  p {
    font-size: 0.875rem;
    color: #e9d5ff;
    margin: 0;
  }
`;
const Cards_holder = styled.div`
  background-color: #603379;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  height: 7rem;
  width: 80%;
  z-index: 10;
  margin-top: -40px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
`;
