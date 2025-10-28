import { DollarSign, Headphones, ShieldCheck, Zap } from "lucide-react";
import styled from "styled-components";

const Why_choose = () => {
  const features = [
    {
      icon: <ShieldCheck size={32} color="#9810FA" />,
      title: "Verified Listings Only",
      desc: "All venues are verified for quality and authenticity.",
    },
    {
      icon: <DollarSign size={32} color="#9810FA" />,
      title: "Transparent Pricing",
      desc: "No hidden fees. See exactly what you pay upfront.",
    },
    {
      icon: <Zap size={32} color="#9810FA" />,
      title: "Instant Booking",
      desc: "Send booking requests and get confirmed instantly.",
    },
    {
      icon: <Headphones size={32} color="#9810FA" />,
      title: "Local Support",
      desc: "Dedicated support team to help manage your events.",
    },
  ];
  return (
    <Container>
      <h2>Why Choose Eventiq?</h2>
      <Features>
        {features.map((feature, index) => (
          <Feature_card key={index}>
            <Icon_box>{feature.icon}</Icon_box>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </Feature_card>
        ))}
      </Features>
    </Container>
  );
};

export default Why_choose;
const Icon_box = styled.div`
  background: #f3e8ff;
  width: 3.125rem;
  height: 3.125rem;
  margin: 0 auto 1rem auto;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -2px;
`;
const Feature_card = styled.div`
  background: #fff;
  border: 1px solid #e0aa3d;
  border-radius: 1rem;
  padding: 2rem 1.25rem;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  text-align: left;
  width: 14.5rem;
  height: 13.9167rem;
  padding: 1.5rem;
  &:hover {
    box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.08);
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    color: #292929;
    line-height: 1.6;
    font-weight: 500;
    margin-top: 1rem;
  }
`;
const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  max-width: 80.75rem;
  margin: 0 auto;
`;
const Container = styled.div`
  background-color: #f3f4f6;
  padding: 5rem 1.25rem;
  text-align: center;
  h2 {
    font-size: 1.875rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 3.125rem;
  }
`;
