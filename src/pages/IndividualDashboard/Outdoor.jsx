import React from "react";
import styled from "styled-components";
import { venuesData } from "../../data/venuesData";
import VenueCard from "../../components/VenueCard";

const Outdoor = () => {
  const selectedVenues = venuesData.filter(
    (venue) => venue.name === "Lush Garden Paradise"
  );
  return (
    <div>
      <OutHoler>
        <OutHeader>
          <PageTitle>Event Indoor Halls in Lagos</PageTitle>
          <PageSubtitle>{selectedVenues.length} venues available</PageSubtitle>
        </OutHeader>
        <IndoorGrid>
          {selectedVenues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </IndoorGrid>
      </OutHoler>
    </div>
  );
};

export default Outdoor;

const OutHoler = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 3rem;
`;

const OutHeader = styled.div`
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  color: #0a0a0a;
  font-family: "Poppins";
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 0.5rem;
`;

const PageSubtitle = styled.p`
  color: #717182;
  font-family: "Poppins";
  font-size: 1.2rem;
`;

const IndoorGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  gap: 25px;
  height: 90%;
`;
