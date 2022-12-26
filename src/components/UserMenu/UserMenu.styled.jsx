import styled from "styled-components";
import { ImExit } from 'react-icons/im';


export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const Image = styled.img`
width: 52px;
height: 52px;
`

export const Span = styled.span`
color: #2AA5A0;
  box-shadow: 0 8px 14px 0 rgba();
    font-family: Roboto, Arial, sans-serif;
  font-size: 1vmax;
  text-shadow: -7px -7px #020024;
  background: radial-gradient( #020024 1px, transparent 1.5px);
  background-size: 3px 3px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  padding-top: 25px;
  margin-right: 10px;
  margin-left: 15px;
`

export const Button = styled.button`
  position: relative;
  top: 0;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2em;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  z-index: 1;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: top 0.5s, z-index 0s, transform 0.5s;
  transition-delay: 0.5s, 0.5s, 0s;
  &:hover {
    transition-delay: 0s, 0.5s, 0.5s;
    top: -10px;
    transform: translateY(10px);
    z-index: 11;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    transform: skewX(45deg) translateX(150px);
    transition: 0.5s;
  }
  &:hover::before {
    transform: skewX(45deg) translateX(-150px);
  }
`;

export const ExitIcon = styled(ImExit)``;
