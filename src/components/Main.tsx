import styled from "styled-components";
import MyMap from "./MyMap";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #00a8ff ;
  height: 100vh;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
`;



const Main = () => {
  return(
    <Container>
      <Title>Plogging with me!</Title>
      <MyMap />
    </Container>
  );
}

export default Main