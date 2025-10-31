import React from "react";
import styled from "styled-components";
import { venuesData } from "../../data/venuesData";
import VenueCard from "../../components/VenueCard";

const Indoor = () => {
  const selectedVenues = venuesData.filter(
    (venue) =>
      venue.name === "Versatile Events Center" ||
      venue.name === "Grand Elegance Banquet Hall" ||
      venue.name === "Crystal Ballroom"
  );
  return (
    <PageHolder>
      <PageHeader>
        <PageTitle>Event Indoor Halls in Lagos</PageTitle>
        <PageSubtitle>{selectedVenues.length} venues available</PageSubtitle>
      </PageHeader>
      <IndoorGrid>
        {selectedVenues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </IndoorGrid>
    </PageHolder>
  );
};

export default Indoor;

const PageHolder = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 3rem;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1rem;
  }
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const PageTitle = styled.h1`
  color: #0a0a0a;
  font-family: "Poppins";
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const PageSubtitle = styled.p`
  color: #717182;
  font-family: "Poppins";
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const IndoorGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  height: 90%;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 15px;
    flex-direction: column;
  }
`;
