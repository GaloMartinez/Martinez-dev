import styled from "styled-components";

const StyledButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
 border-none
  border-radius: 4px;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  font-size: 15px;
  cursor: pointer;
  color: white;
  text-align: center;
  z-index: 1;
  width: 130px;
  margin-top: 8px;
  
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: #000000;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  &:hover:before {
    top: -35%;
    background-color: #000000;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  &:hover:after {
    top: -45%;
    background-color: #000000;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }
`;

export default StyledButton;
