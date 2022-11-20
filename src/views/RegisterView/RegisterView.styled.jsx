import styled from "styled-components";


export const Container = styled.div`
width: 100%;
font-size: 20px;
display: flex;
flex-direction: column;

`

export const Title = styled.a`
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

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 20px 20px;
    // border: 1px solid #ffffff;
`


export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    color: #c4c3ca;
`

export const Input = styled.input`
    width: 80%;
    margin-top: 10px;
    box-shadow: 0px 1px 2px 0px rgba(0, 65, 200, 0.5),
            1px 2px 4px 0px rgba(0,65,200,0.5),
            2px 4px 8px 0px rgba(0,65,200,0.5),
            2px 4px 16px 0px rgba(0,65,200,0.5);

  {&}::placeholder {
  font: inherit;
  font-size: 18px;
  padding-left: 12px;
}
`

export const Button = styled.button`
display: block;
border-radius: 10px;
font-size: 14px;
padding: 10px;
    margin-top: 20px;
    width: 200px;
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
