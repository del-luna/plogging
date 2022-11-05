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

const About = () => {
  return (
    <Container>
      <Title>소개</Title>
    </Container>
  );
};

export default About;