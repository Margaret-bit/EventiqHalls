import React from "react";
import styled from "styled-components";
import { FiBell } from "react-icons/fi";
import img from "../../assets/1.jpg";

const Header = () => {
  return (
    <Holder>
      <Wrapper>
        <div className="Icon">
          <FiBell />
          <div className="box">0</div>
        </div>
        <div className="Image">
          <img src={img} alt="" />
        </div>
      </Wrapper>
    </Holder>
  );
};

export default Header;

const Holder = styled.div`
  width: 100%;
  height: 80px;
  background: #fff;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e5e7eb;
`;

const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;

  .Icon {
    width: 40px;
    height: 40px;
    border-radius: 20%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #ccc;
    position: relative;
  }

  .Image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .box {
    width: 15px;
    height: 15px;
    background: red;
    color: white;
    display: flex;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 700;
    position: absolute;
    top: -3px;
    right: -3px;
  }
`;
