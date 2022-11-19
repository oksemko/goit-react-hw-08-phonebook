
export const Container = styled.div`
display: flex;
alignItems: center;
`

export const Image = styled.img`
width: 32;
`

export const Span = styled.span`
frontweight: 700;
margin-right: 12;
`

export const Button = styled.button`
display: block;
border-radius: 10px;
font-size: 14px;
padding: 10px;
    margin-top: 20px;
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
