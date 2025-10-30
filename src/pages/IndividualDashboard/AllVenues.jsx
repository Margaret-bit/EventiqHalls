import styled from "styled-components";
import { venuesData } from "../../data/venuesData";
import VenueCard from "../../components/VenueCard";

const All_venues = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Event Venues in Lagos</PageTitle>
        <PageSubtitle>{venuesData.length} venues available</PageSubtitle>
      </PageHeader>
      <VenuesGrid>
        {venuesData.map((venue) => (
          <VenueCard key={venue.id} venue={venue} />
        ))}
      </VenuesGrid>
    </PageContainer>
  );
};

export default All_venues;

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 3rem;
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  color: #0a0a0a;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 0.5rem;
`;

const PageSubtitle = styled.p`
  color: #717182;
  font-family: Poppins;
  font-size: 16px;
`;

const VenuesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  gap: 25px;
  height: 90%;
`;
