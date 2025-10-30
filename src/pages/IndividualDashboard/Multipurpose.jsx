import React from "react";
import styled from "styled-components";
import { venuesData } from "../../data/venuesData";
import VenueCard from "../../components/VenueCard";

const Multipurpose = () => {
  const selectedVenues = venuesData.filter(
    (venue) =>
      venue.name === "Skyline Rooftop Venue" ||
      venue.name === "Imperial Marquee Hall" ||
      venue.name === "Crystal Ballroom"
  );
  return (
    <div>
      <MulHolder>
        <MulHeader>
          <PageTitle>Event Indoor Halls in Lagos</PageTitle>
          <PageSubtitle>{selectedVenues.length} venues available</PageSubtitle>
        </MulHeader>
        <IndoorGrid>
          {selectedVenues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </IndoorGrid>
      </MulHolder>
    </div>
  );
};

export default Multipurpose;

const MulHolder = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 3rem;
`;

const MulHeader = styled.div`
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
