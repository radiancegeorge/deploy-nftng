import React, { useState } from "react";
import styled from "styled-components";
import ToggleFaq from "./ToggleFaq";
import { questionAnswer } from "../../data/toggleFaqData";
import { Link } from "react-router-dom";

const FaqSection = () => {
  const [data, setData] = useState(questionAnswer || []);

  const handleToggle = (id) => {
    const updateLinks = data
      .map((d) => (d.id === id ? { ...d, toggle: !d.toggle } : d))
      .map((d) => (d.id !== id ? { ...d, toggle: false } : d));

    setData(updateLinks);
  };

  return (
    <Container>
      <LeftWrapper>
        <LeftWrap>
          <h2>
            Frequently
            <br />
            asked Questions
          </h2>
          <p>
            For some of the answers to your questions in this section! Then keep
            buzzing
          </p>
          <Link to="/faq">
            <span>See more</span>
          </Link>
        </LeftWrap>
      </LeftWrapper>
      <RightWrapper>
        <RightWrap>
          {data.map((d) => (
            <ToggleFaq
              key={d.id}
              question={d.question}
              answer={d.answer}
              toggle={d.toggle}
              id={d.id}
              handleToggle={handleToggle}
            />
          ))}
        </RightWrap>
      </RightWrapper>
    </Container>
  );
};

export default FaqSection;

const Container = styled.div`
  padding: 0 10vw 60px;
  display: flex;
`;

const LeftWrapper = styled.div`
  width: 100%;
`;

const LeftWrap = styled.div`
  a {
    color: var(--primary-color);
    text-decoration: none;
  }
  h2 {
    font-size: 40px;
    font-weight: 700;
    font-family: var(--poppins);
  }
  p {
    color: white;
    font-size: 18px;
    font-family: var(--Branding-sf-light);
    line-height: 30px;
    margin: 18px 0;
    max-width: 500px;
  }
`;

const RightWrapper = styled.div`
  width: 100%;
`;

const RightWrap = styled.div``;
