import React from "react";
import styled from "styled-components";
import { faqData } from "../../data/faqData";

const FaqList = () => {
  return (
    <Container>
      <Wrapper>
        {faqData.map((data) => (
          <Wrap key={data.id} id={`faq${data.id}`}>
            <h2>
              {data.id}. {data.title}
            </h2>
            <p>{data.desc}</p>
          </Wrap>
        ))}
      </Wrapper>
    </Container>
  );
};

export default FaqList;

const Container = styled.div`
  position: relative;
  padding: 0 7vw;
  margin-bottom: 120px;
`;

const Wrapper = styled.div`
  padding-right: 18vw;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const Wrap = styled.div`
  h2 {
    font-size: 24px;
    margin-bottom: 12px;
  }
  p {
    font-size: 15px;
    color: #ffffff;
    max-width: 860px;
    font-family: var(--Branding-sf-light);
  }
`;
