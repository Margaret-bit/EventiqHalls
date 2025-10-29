import React from "react";
import styled from "styled-components";
import {
  BsBuilding,
  BsCalendar2Check,
  BsShieldCheck,
  BsBox,
  BsChevronDown,
} from "react-icons/bs";
import {
  FiCalendar,
  FiCreditCard,
  FiSettings,
  FiLogOut,
  FiBell,
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoTrendingUpOutline, IoAddCircleOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi";

const DashboardHome = () => {
  const statsData = [
    {
      title: "Total Venues",
      value: "0",
      icon: <BsBuilding />,
      iconBg: "#e9d5ff",
      iconColor: "purple",
    },
    {
      title: "Active Bookings",
      value: "0",
      icon: <FiCalendar />,
      iconBg: "#fef3c7",
      iconColor: "#f59e0b",
    },
    {
      title: "Revenue(This Month)",
      value: "#0",
      icon: <TbCurrencyNaira />,
      iconBg: "#bbf7d0",
      iconColor: "#22c55e",
    },
    {
      title: "Occupancy Rate",
      value: "0%",
      icon: <IoTrendingUpOutline />,
      iconBg: "#e0e7ff",
      iconColor: "#6366f1",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <WelcomeSection>
          <WelcomeText>Welcome, Maggie</WelcomeText>
          <DateText>Friday, October 17, 2025</DateText>
        </WelcomeSection>

        <StatsGrid>
          {statsData.map((stat, index) => (
            <StatCard key={index}>
              <StatHeader>
                <StatTitle>{stat.title}</StatTitle>
                <StatIcon $bgColor={stat.iconBg} $color={stat.iconColor}>
                  {stat.icon}
                </StatIcon>
              </StatHeader>
              <StatValue>{stat.value}</StatValue>
            </StatCard>
          ))}
        </StatsGrid>

        <EmptyState>
          <EmptyIcon>
            <BsBox />
          </EmptyIcon>
          <EmptyTitle>No Records Yet</EmptyTitle>
          <EmptyText>
            Create your first venue to start managing bookings and events
          </EmptyText>
        </EmptyState>
      </Wrapper>
    </Container>
  );
};

export default DashboardHome;
const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 32px;
  background: white;
  border-radius: 16px;
`;

const EmptyIcon = styled.div`
  font-size: 72px;
  color: #d1d5db;
  margin-bottom: 20px;
`;

const EmptyTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 8px 0;
`;

const EmptyText = styled.p`
  font-size: 15px;
  color: #9ca3af;
  margin: 0 0 24px 0;
  text-align: center;
  max-width: 400px;
`;
const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const StatsGrid = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 32px;
  margin-top: 30px;
  width: 100%;
  justify-content: space-between;
`;

const StatCard = styled.div`
  background: white;
  width: 21%;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    transform: translateY(-2px);
  }
`;

const StatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const StatTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
`;

const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const StatValue = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #111827;
`;
const DateText = styled.p`
  font-size: 14px;
  color: #9ca3af;
  margin: 0;
`;
const WelcomeText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
`;
const WelcomeSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;
