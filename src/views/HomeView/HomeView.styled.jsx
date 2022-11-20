import styled from "styled-components";

export const Container = styled.div`
min-height: calc(100vh - 50px);
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.a`
  font-family: "Work Sans", sans-serif;
	font-size: 50px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-align: center;
  border-radius: 10px;
	line-height: 1.7;
  padding: 15px;
  margin: 20px;
	color: #c4c3ca;
	box-shadow: 0 15px 25px rgba(0,0,0,.9);
  background-color: rgba(0,0,0,0.6);

  background-clip: text;
   background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
    box-shadow: 0px 0px 0px 0px rgba(0, 65, 200, 0.5),
            10px 5px 5px 5px rgba(0,65,200,0.5),
            10px 5px 15px 5px rgba(0,65,200,0.5),
            10px 5px 25px 5px rgba(0,65,200,0.5);
            border-radius: 10px;
            margin-bottom: 20px;
  color: rgba(0,0,0,0.6);
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: 300px;


  place-items: center;
  width: 700px;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 50px;

  @keyframes typing {
  from {
    width: 0;
  }
}
@keyframes blink {
  50% {
    border-color: transparent;
  }
}

  {&}:hover{
box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.664),
  -4px -4px 6px 0 rgba(255, 255, 255, 0.664),
  inset -4px -4px 6px 0 rgba(255, 255, 255, 0.664),
  inset 4px 4px 6px 0 rgba(255, 255, 255, 0.664);
}
`

export const Header = styled.header`
color: #c4c3ca;
  box-shadow: 0 8px 14px 0 rgba();
    font-family: Roboto, Arial, sans-serif;
  font-size: 5vmax;
  /*text-shadow: -5px -5px  #c4c3ca;*/
  background: radial-gradient( #c4c3ca 1px, transparent 1px);
  background-size: 3px 3px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 auto;
`
