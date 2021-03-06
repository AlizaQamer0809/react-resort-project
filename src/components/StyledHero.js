import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";
const StyledHero = styled.header`
  min-height: 70vh;
  /* background: url(${defaultImg}); */
  background: url(${props => (props.img ? props.img : defaultImg)});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export default StyledHero;
