import { Search } from "lucide-react";
import styled from "styled-components";

const Individual_header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Eventiq</Logo>
        <SearchContainer>
          <SearchIconHolder>
            <Search size={18} color="#717182" />
          </SearchIconHolder>
          <SearchInput type="text" placeholder="Search" />
        </SearchContainer>
        <UserSection>
          <UserAvatar>P</UserAvatar>
          <UserName>Princess</UserName>
        </UserSection>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Individual_header;
const UserName = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #0a0a0a;
`;

const HeaderContainer = styled.header`
  background-color: #ffffff;
  padding: 1rem 4rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #6b46c1;
  letter-spacing: -0.5px;
`;

const SearchContainer = styled.div`
  width: 550px;
  margin: 0 2rem;
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  background-color: #ececf080;
  border-radius: 0.5rem;
  overflow: hidden;
`;
const SearchIconHolder = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ececf080;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 0.5rem;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  outline: none;
  border: none;
  background: transparent;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserAvatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6b46c1, #9333ea);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid #e0aa3d;
`;
