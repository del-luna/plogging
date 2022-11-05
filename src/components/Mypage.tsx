import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
background-color: #00a8ff ;
height: 100vh;
`;

const Title = styled.h1`
  color: white;
`;

const Mypage = () => {
  return(
      <Container>
          <Title>MyPage</Title>
      </Container>
  );
}

export default Mypage;