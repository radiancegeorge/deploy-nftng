import React from "react";
import styled from "styled-components";

const ComingSoon = () => {
  return (
    <Container>
      <Wrapper>
        <h1>
          Coming <span>soon</span>
        </h1>
        <p className="calculator">THE WEB THREE BUZZ</p>
      </Wrapper>
    </Container>
  );
};

export default ComingSoon;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  color: var(--primary-color);
  text-align: center;
  h1 {
    font-family: var(--Neue-Helvetica-black);
    text-transform: uppercase;
    font-size: 60px;
    margin-bottom: 12px;
    span {
      color: white;
    }
  }
  p {
    font-size: 32px;
  }
`;
