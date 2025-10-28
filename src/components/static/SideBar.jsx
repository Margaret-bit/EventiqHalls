import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { MdOutlineDashboard, MdOutlineNotifications } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { FiCreditCard, FiSettings, FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Overview");
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      name: "Overview",
      icon: <MdOutlineDashboard />,
      navigate: "/dashboardHome",
    },
    {
      name: "My Venues",
      icon: <BsBuilding />,
      navigate: "/dashboardHome/venues",
    },
    {
      name: "Payments",
      icon: <FiCreditCard />,
      navigate: "/dashboardHome/payments",
    },
    {
      name: "Notification",
      icon: <MdOutlineNotifications />,
      navigate: "/dashboardHome/notifications",
    },
    {
      name: "Profile Setting",
      icon: <FiSettings />,
      navigate: "/dashboardHome/settings",
    },
  ];

  const handleMenuClick = (item) => {
    setActiveItem(item.name);
    navigate(item.navigate);
  };

  return (
    <Container>
      <LogoSection>
        <Logo>Eventiq</Logo>
      </LogoSection>

      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            $active={
              activeItem === item.name || location.pathname === item.navigate
            }
            onClick={() => handleMenuClick(item)}
          >
            <IconWrapper
              $active={
                activeItem === item.name || location.pathname === item.navigate
              }
            >
              {item.icon}
            </IconWrapper>
            <MenuText>{item.name}</MenuText>
          </MenuItem>
        ))}
      </MenuList>

      <LogoutSection>
        <LogoutButton>
          <IconWrapper>
            <FiLogOut />
          </IconWrapper>
          <MenuText>Logout</MenuText>
        </LogoutButton>
      </LogoutSection>
    </Container>
  );
};

export default Sidebar;

const IconWrapper = styled.span`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: ${(props) => (props.$active ? "white" : "#6b7280")};
`;

const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #ef4444;

  &:hover {
    background-color: #fef2f2;
  }

  ${IconWrapper} {
    color: #ef4444;
  }
`;

const LogoutSection = styled.div`
  padding: 20px;
  border-top: 1px solid #f3f4f6;
`;

const MenuText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${(props) => (props.$active ? "#9333ea" : "transparent")};
  color: ${(props) => (props.$active ? "white" : "#6b7280")};
  margin: 0 12px 4px 12px;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => (props.$active ? "#9333ea" : "#f3f4f6")};
  }
`;

const MenuList = styled.nav`
  flex: 1;
  padding: 16px 0;
  overflow-y: auto;
`;

const Logo = styled.h1`
  font-family: "Brush Script MT", cursive;
  font-size: 32px;
  color: #9333ea;
  margin: 0;
  font-weight: 400;
  font-style: italic;
`;

const LogoSection = styled.div`
  padding: 24px 20px;
  border-bottom: 1px solid #f3f4f6;
`;

const Container = styled.div`
  width: 22%;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  background: white;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e5e7eb;
  transition: transform 0.3s ease;
`;
