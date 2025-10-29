import React, { useState } from "react";
import styled from "styled-components";
import {
  FiPlus,
  FiPackage,
  FiEdit2,
  FiTrash2,
  FiX,
  FiMapPin,
  FiUsers,
  FiDollarSign,
} from "react-icons/fi";

const VenuesContainer = styled.div`
  flex: 1;
  background-color: #f8f9fa;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #999;
  margin: 0;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #7c4dbd;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #6a3da8;
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  font-size: 4rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const EmptyTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: #333;
  margin: 0;
`;

const EmptyDescription = styled.p`
  font-size: 0.95rem;
  color: #999;
  margin: 0;
`;

const VenuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const VenueCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const VenueImage = styled.div`
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
`;

const VenueContent = styled.div`
  padding: 1.25rem;
`;

const VenueName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
`;

const VenueDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.5rem;

  svg {
    color: #7c4dbd;
  }
`;

const VenueActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

const ActionButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem;
  border: 1px solid #e0e0e0;
  background: white;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f8f9fa;
    border-color: #7c4dbd;
    color: #7c4dbd;
  }
`;

const DeleteButton = styled(ActionButton)`
  &:hover {
    background: #fee;
    border-color: #f44;
    color: #f44;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #666;
  transition: color 0.2s;

  &:hover {
    color: #1a1a1a;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #7c4dbd;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.95rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #7c4dbd;
  }
`;

const SubmitButton = styled.button`
  background-color: #7c4dbd;
  color: white;
  border: none;
  padding: 0.875rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #6a3da8;
  }
`;

const Venues = () => {
  const [venues, setVenues] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVenue, setEditingVenue] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    capacity: "",
    price: "",
    description: "",
  });

  const handleOpenModal = (venue = null) => {
    if (venue) {
      setEditingVenue(venue);
      setFormData(venue);
    } else {
      setEditingVenue(null);
      setFormData({
        name: "",
        location: "",
        capacity: "",
        price: "",
        description: "",
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingVenue(null);
    setFormData({
      name: "",
      location: "",
      capacity: "",
      price: "",
      description: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.location ||
      !formData.capacity ||
      !formData.price
    ) {
      alert("Please fill in all required fields");
      return;
    }

    if (editingVenue) {
      setVenues((prev) =>
        prev.map((v) =>
          v.id === editingVenue.id ? { ...formData, id: v.id } : v
        )
      );
    } else {
      const newVenue = {
        ...formData,
        id: Date.now().toString(),
      };
      setVenues((prev) => [...prev, newVenue]);
    }

    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this venue?")) {
      setVenues((prev) => prev.filter((v) => v.id !== id));
    }
  };

  return (
    <VenuesContainer>
      <Header>
        <HeaderContent>
          <Title>My Event Venues</Title>
          <Subtitle>Manage your listed venues</Subtitle>
        </HeaderContent>
        <AddButton onClick={() => handleOpenModal()}>
          <FiPlus size={20} />
          Add New Venue
        </AddButton>
      </Header>

      {venues.length === 0 ? (
        <EmptyState>
          <IconWrapper>
            <FiPackage />
          </IconWrapper>
          <EmptyTitle>No Venue record yet</EmptyTitle>
          <EmptyDescription>
            Upload your venue details to get noticed
          </EmptyDescription>
        </EmptyState>
      ) : (
        <VenuesGrid>
          {venues.map((venue) => (
            <VenueCard key={venue.id}>
              <VenueImage>
                <FiPackage />
              </VenueImage>
              <VenueContent>
                <VenueName>{venue.name}</VenueName>
                <VenueDetail>
                  <FiMapPin size={16} />
                  {venue.location}
                </VenueDetail>
                <VenueDetail>
                  <FiUsers size={16} />
                  Capacity: {venue.capacity} people
                </VenueDetail>
                <VenueDetail>
                  <FiDollarSign size={16} />${venue.price}/day
                </VenueDetail>
                <VenueActions>
                  <ActionButton onClick={() => handleOpenModal(venue)}>
                    <FiEdit2 size={16} />
                    Edit
                  </ActionButton>
                  <DeleteButton onClick={() => handleDelete(venue.id)}>
                    <FiTrash2 size={16} />
                    Delete
                  </DeleteButton>
                </VenueActions>
              </VenueContent>
            </VenueCard>
          ))}
        </VenuesGrid>
      )}

      {isModalOpen && (
        <Modal onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                {editingVenue ? "Edit Venue" : "Add New Venue"}
              </ModalTitle>
              <CloseButton onClick={handleCloseModal}>
                <FiX size={24} />
              </CloseButton>
            </ModalHeader>
            <FormContainer>
              <FormGroup>
                <Label>Venue Name *</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Grand Ballroom"
                />
              </FormGroup>
              <FormGroup>
                <Label>Location *</Label>
                <Input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g. New York, NY"
                />
              </FormGroup>
              <FormGroup>
                <Label>Capacity *</Label>
                <Input
                  type="number"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleInputChange}
                  placeholder="e.g. 500"
                />
              </FormGroup>
              <FormGroup>
                <Label>Price per Day ($) *</Label>
                <Input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="e.g. 5000"
                />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <TextArea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your venue..."
                />
              </FormGroup>
              <SubmitButton onClick={handleSubmit}>
                {editingVenue ? "Update Venue" : "Add Venue"}
              </SubmitButton>
            </FormContainer>
          </ModalContent>
        </Modal>
      )}
    </VenuesContainer>
  );
};

export default Venues;
