import styled from '@emotion/styled';

import {
  NavLink
}

from 'react-router-dom';

import {
  AiOutlineFileDone
}

from 'react-icons/ai';

import {
  ImEnter
}

from 'react-icons/im';

export const AuthNavList=styled.ul` position: relative;
display: flex;
`;
export const AuthNavItem=styled.li` position: relative;
padding: 10px;
`;
export const AuthNavLink=styled(NavLink)` position: relative;
top: 0;
width: 60px;
height: 60px;
text-decoration: none;
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
transition: top 0.5s,
z-index 0s,
transform 0.5s;
transition-delay: 0.5s,
0.5s,
0s;

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

export const RegisterIcon=styled(AiOutlineFileDone)``;
export const LoginIcon=styled(ImEnter)``;



/* .link {
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  font-size: 28px;
  color: #c4c3ca;
  line-height: 1.17;
}

.activeLink {
display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  font-size: 28px;
  color: #1d47fd;
  line-height: 1.17;
} */
