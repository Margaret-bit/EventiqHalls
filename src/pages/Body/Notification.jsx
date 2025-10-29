import React from "react";
import styled from "styled-components";
import { BsBox } from "react-icons/bs";

const Notification = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <div className="Text">
            <h4>Notifications</h4>
          </div>
          <div className="SideNote">0 New</div>
        </TextWrapper>
        <EmptyState>
          <EmptyIcon>
            <BsBox />
          </EmptyIcon>
          <EmptyTitle>Nothing to show yet</EmptyTitle>
          <EmptyText>
            Notifications from bookings and payment will appear hear
          </EmptyText>
        </EmptyState>
      </Wrapper>
    </Container>
  );
};

export default Notification;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .SideNote {
    width: 60px;
    height: 26px;
    background: purple;
    border-radius: 10px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
  }

  .Text {
    width: 20%;
    height: 70px;
    background: purple;
    margin-left: 0;
  }

  h4 {
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    margin-top: 0;
  }
`;
