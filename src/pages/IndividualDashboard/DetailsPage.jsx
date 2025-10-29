import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { venuesData } from "../../data/venuesData";
import { ChevronLeft, MapPin, Clock, AlertCircle, Check } from "lucide-react";

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const venue = venuesData.find((v) => v.id === Number.parseInt(id));

  if (!venue) {
    return (
      <DetailContainer>
        <BackButton onClick={() => navigate(-1)}>
          <ChevronLeft size={20} />
          Back
        </BackButton>
        <div>Venue not found</div>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <BackButton onClick={() => navigate(-1)}>
        <ChevronLeft size={20} />
        Back
      </BackButton>

      <ImageGallery>
        <MainImage
          src={venue.images[0] || "/placeholder.svg"}
          alt={venue.name}
        />
        {venue.images.slice(1, 5).map((img, idx) => (
          <GalleryImage key={idx} src={img} alt={`${venue.name} ${idx + 2}`} />
        ))}
      </ImageGallery>

      <ContentWrapper>
        <MainContent>
          <VenueHeader>
            <VenueName>{venue.name}</VenueName>
            <VenueMetaInfo>
              <MetaItem>
                ⭐ {venue.rating} ({venue.reviews} reviews)
              </MetaItem>
              <MetaItem>
                <MapPin size={16} />
                {venue.location}
              </MetaItem>
              <MetaItem>
                <AlertCircle size={16} />
                Verified
              </MetaItem>
            </VenueMetaInfo>
          </VenueHeader>

          <Section>
            <SectionTitle>About this venue</SectionTitle>
            <SectionDescription>{venue.description}</SectionDescription>
            <InfoGrid>
              <InfoCard>
                <InfoLabel>Venue Size</InfoLabel>
                <InfoValue>{venue.venueSize}</InfoValue>
              </InfoCard>
              <InfoCard>
                <InfoLabel>
                  <Clock size={16} />
                  Open Hours
                </InfoLabel>
                <InfoValue>{venue.openHours}</InfoValue>
              </InfoCard>
              <InfoCard>
                <InfoLabel>Guest Capacity</InfoLabel>
                <InfoValue>{venue.guests}</InfoValue>
              </InfoCard>
              <InfoCard>
                <InfoLabel>Caution Fee</InfoLabel>
                <InfoValue>{venue.cautionFee}</InfoValue>
              </InfoCard>
            </InfoGrid>
          </Section>

          <Section>
            <SectionTitle>Amenities & Facilities</SectionTitle>
            <AmenitiesList>
              {venue.amenities.map((amenity, idx) => (
                <AmenityItem key={idx}>
                  <Check size={18} color="#6b46c1" />
                  {amenity}
                </AmenityItem>
              ))}
            </AmenitiesList>
          </Section>

          <Section>
            <SectionTitle>Cancellation Policy</SectionTitle>
            <CancellationPolicy>
              <PolicyTitle>
                <AlertCircle size={18} />
                Important Information
              </PolicyTitle>
              <PolicyText>{venue.cancellationPolicy}</PolicyText>
            </CancellationPolicy>
          </Section>
        </MainContent>

        <Sidebar>
          <PricingCard>
            <PriceDisplay>
              <PriceAmount>{venue.price}</PriceAmount>
              <PriceLabel>/day</PriceLabel>
            </PriceDisplay>

            <DateSelector>
              <DateLabel>Event Date</DateLabel>
              <DateInput type="date" />
            </DateSelector>

            <BookButton>Book This Venue</BookButton>

            <PricingBreakdown>
              <BreakdownItem>
                <span>Venue rental</span>
                <span>{venue.price}</span>
              </BreakdownItem>
              <BreakdownItem>
                <span>Service fee (5%)</span>
                <span>
                  ₦{Math.round(venue.pricePerDay * 0.05).toLocaleString()}
                </span>
              </BreakdownItem>
              <BreakdownItem>
                <span>Total</span>
                <span>
                  ₦
                  {Math.round(
                    venue.pricePerDay + venue.pricePerDay * 0.05
                  ).toLocaleString()}
                </span>
              </BreakdownItem>
            </PricingBreakdown>
          </PricingCard>
        </Sidebar>
      </ContentWrapper>
    </DetailContainer>
  );
};

export default DetailsPage;

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #6b46c1;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    gap: 1rem;
  }
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 300px 300px;
  gap: 1rem;
  margin-bottom: 2rem;
  border-radius: 0.75rem;
  overflow: hidden;
`;

const MainImage = styled.img`
  grid-column: 1;
  grid-row: 1 / 3;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`;

const MainContent = styled.div``;

const VenueHeader = styled.div`
  margin-bottom: 2rem;
`;

const VenueName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const VenueMetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.95rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const InfoCard = styled.div`
  background-color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

const InfoLabel = styled.div`
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InfoValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
`;

const AmenitiesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const AmenityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #6b7280;
  font-size: 0.95rem;
`;

const Sidebar = styled.div`
  position: sticky;
  top: 120px;
  height: fit-content;
`;

const PricingCard = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 2rem;
  margin-bottom: 1.5rem;
`;

const PriceDisplay = styled.div`
  margin-bottom: 1.5rem;
`;

const PriceAmount = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #6b46c1;
`;

const PriceLabel = styled.div`
  color: #6b7280;
  font-size: 0.9rem;
`;

const DateSelector = styled.div`
  margin-bottom: 1.5rem;
`;

const DateLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const DateInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: #6b46c1;
    box-shadow: 0 0 0 3px rgba(107, 70, 193, 0.1);
  }
`;

const BookButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #6b46c1, #9333ea);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(107, 70, 193, 0.3);
  }
`;

const PricingBreakdown = styled.div`
  background-color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
`;

const BreakdownItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  color: #6b7280;

  &:last-child {
    margin-bottom: 0;
    padding-top: 0.75rem;
    border-top: 1px solid #e5e7eb;
    font-weight: 600;
    color: #1f2937;
  }
`;

const CancellationPolicy = styled.div`
  background-color: #fef3c7;
  border-left: 4px solid #f59e0b;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
`;

const PolicyTitle = styled.div`
  font-weight: 600;
  color: #92400e;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PolicyText = styled.p`
  color: #b45309;
  font-size: 0.9rem;
  line-height: 1.5;
`;
