import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { Table, Building2, TreePine, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

const Individual_subHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const areas = [
    "All areas",
    "Victorai Island",
    "Lekki",
    "Ikeja",
    "Yaba",
    "Ikoyi",
    "Surulere",
    "Ajah",
    "Maryland",
    "Yaba",
    "Festac",
    "Apapa",
    "Agege/Ogba",
  ];

  const iconMap = {
    "all-venues": Table,
    "indoor-halls": Building2,
    "outdoor-halls": TreePine,
    multipurpose: Table,
  };

  const getIcon = (type) => {
    const IconComponent = iconMap[type];
    return IconComponent ? <IconComponent size={25} /> : null;
  };

  return (
    <SubHeaderContainer>
      <SubHeaderContent>
        <NavButton
          active={isActive("/individual-dashboard")}
          onClick={() => navigate("/individual-dashboard")}
        >
          <IconWrapper>{getIcon("all-venues")}</IconWrapper>
          <Label>All Venues</Label>
        </NavButton>
        <NavButton
          active={isActive("/individual-dashboard/indoor")}
          onClick={() => navigate("/individual-dashboard/indoor")}
        >
          <IconWrapper>{getIcon("indoor-halls")}</IconWrapper>
          <Label>Indoor Halls</Label>
        </NavButton>
        <NavButton
          active={isActive("/individual-dashboard/outdoor")}
          onClick={() => navigate("/individual-dashboard/outdoor")}
        >
          <IconWrapper>{getIcon("outdoor-halls")}</IconWrapper>
          <Label>Outdoor Venues</Label>
        </NavButton>
        <NavButton
          active={isActive("/individual-dashboard/multipurpose")}
          onClick={() => navigate("/individual-dashboard/multipurpose")}
        >
          <IconWrapper>{getIcon("multipurpose")}</IconWrapper>
          <Label>Multipurpose</Label>
        </NavButton>
        <FilterSection>
          <FilterButton
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            isOpen={isDropdownOpen}
          >
            <MapPin size={18} />
            <span>All Areas</span>
            <ChevronIcon isOpen={isDropdownOpen}>
              <ChevronDown size={16} />
            </ChevronIcon>
          </FilterButton>
          {isDropdownOpen && (
            <DropdownMenu>
              {areas.map((area) => (
                <DropdownItem
                  key={area}
                  onClick={() => {
                    setIsDropdownOpen(false);
                  }}
                >
                  {area}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </FilterSection>
      </SubHeaderContent>
    </SubHeaderContainer>
  );
};

export default Individual_subHeader;

const SubHeaderContainer = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid #9d9d9d;
  padding: 0 4rem;
  position: sticky;
  top: 121px;
  z-index: 99;
`;

const SubHeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 1em;
  padding-bottom: 1rem;
`;

const NavButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: none;
  border: 2px solid ${(props) => (props.active ? "#6b46c1" : "transparent")};
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "#6b46c1" : "#6b7280")};
  transition: all 0.3s ease;
  white-space: nowrap;
  background-color: ${(props) => (props.active ? "#f3e8ff" : "transparent")};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`;

const Label = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #0a0a0a;
`;

const FilterSection = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.isOpen ? "#f3e8ff" : "#f3f4f6")};
  border: 2px solid ${(props) => (props.isOpen ? "#6b46c1" : "#e5e7eb")};
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: ${(props) => (props.isOpen ? "#6b46c1" : "#374151")};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isOpen ? "#f3e8ff" : "#e5e7eb")};
    border-color: ${(props) => (props.isOpen ? "#6b46c1" : "#d1d5db")};
  }
`;

const ChevronIcon = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  color: inherit;
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 0.5rem;
  width: 12rem;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 50;
  overflow: hidden;
`;

const DropdownItem = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  color: #374151;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f3e8ff;
    color: #6b46c1;
  }

  &:first-child {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  &:last-child {
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;
