import styled from "styled-components";

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
display: block;
border-radius: 10px;
font-size: 14px;
padding: 10px;
margin: 0 auto;
    width: 180px;
    background-color: white;
    cursor: pointer;
    box-shadow: 0px 1px 2px 0px rgba(0, 65, 200, 0.5),
            1px 2px 4px 0px rgba(0,65,200,0.5),
            2px 4px 8px 0px rgba(0,65,200,0.5),
            2px 4px 16px 0px rgba(0,65,200,0.5);

  {&}:hover{
  background-color: #102770;
  color: #c4c3ca;
  box-shadow: 0 8px 24px 0 rgba();
}
`
