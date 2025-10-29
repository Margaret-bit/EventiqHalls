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
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const PageSubtitle = styled.p`
  color: #6b7280;
  font-size: 0.95rem;
`;

const VenuesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
