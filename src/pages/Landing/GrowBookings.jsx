import { CheckCircle2 } from "lucide-react";
import styled from "styled-components";
import img from "../../assets/img.jpg";

const Grow_booking = () => {
  return (
    <Section id="about">
      <Container>
        <Image>
          <img src={img} alt="Event hall" />
        </Image>

        <Grow_content>
          <h2>Grow Your Bookings with Eventiq</h2>
          <p>
            List your space, get discovered by thousands of event organisers,
            and manage everything in one place. It's free to list, and you only
            pay when you get bookings.
          </p>

          <Grow_points>
            <li>
              <CheckCircle2 size={18} color="#9810FA" />
              <span>Easy venue listing and management</span>
            </li>
            <li>
              <CheckCircle2 size={18} color="#9810FA" />
              <span>Reach thousands of potential clients</span>
            </li>
            <li>
              <CheckCircle2 size={18} color="#9810FA" />
              <span>Reach premium clientele</span>
            </li>
          </Grow_points>
          <Button>Sign Up as Venue Owner</Button>
        </Grow_content>
      </Container>
    </Section>
  );
};

export default Grow_booking;
const Button = styled.div`
  background-color: #603379;
  color: #fff;
  border: none;
  padding: 0.875rem 1.75rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 180px;
  &:hover {
    background-color: #3f1953;
  }
`;
const Grow_points = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2.5rem;
  font-weight: 500;
  li {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #111827;
  }
`;
const Grow_content = styled.div`
  flex: 1;
  max-width: 33.75rem;
  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    color: #292929;
    margin-bottom: 2rem;
    line-height: 1.6;
    font-weight: 500;
  }
`;
const Image = styled.div`
  border-radius: 0.75rem;
  width: 650px;
  overflow: hidden;
  height: 500px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 75rem;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 4rem;
`;
const Section = styled.div`
  background-color: #fff;
  padding: 5rem 1.25rem;
`;
