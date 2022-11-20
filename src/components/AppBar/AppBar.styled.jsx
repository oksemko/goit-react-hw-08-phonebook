import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border-bottom: 1px solid #2A363B;
    // margin-bottom: 15px;
    margin-left: 15px;
    margin-right: 15px;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 1100;

  width: 90%;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #1fd1f9;
    background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
    box-shadow: 0px 0px 0px 0px rgba(0, 65, 200, 0.5),
            10px 5px 5px 5px rgba(0,65,200,0.5),
            10px 5px 15px 5px rgba(0,65,200,0.5),
            10px 5px 25px 5px rgba(0,65,200,0.5);
            border-radius: 10px;
            margin-bottom: 20px;


  {&}:hover {
 box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.664),
  -4px -4px 6px 0 rgba(255, 255, 255, 0.664),
  inset -4px -4px 6px 0 rgba(255, 255, 255, 0.664),
  inset 4px 4px 6px 0 rgba(255, 255, 255, 0.664);
}
`
