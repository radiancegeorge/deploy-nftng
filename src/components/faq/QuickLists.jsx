import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { faqData } from "../../data/faqData";

const QuickLinks = () => {
  return (
    <Container>
      <p>Quick links</p>
      <ul>
        {faqData.map((data) => (
          <li key={data.id}>
            <Link
              to={`faq${data.id}`}
              spy={true}
              smooth={true}
              offset={-200}
              duration={100}
            >
              <span className="number">{data.id}. </span>
              <span>{data.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default QuickLinks;

const Container = styled.div`
  position: fixed;
  width: fit-content;
  top: 200px;
  right: 5vw;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.69);

  p {
    color: rgba(129, 129, 129, 1);
    font-family: var(--Branding-sf-bold);
    font-size: 20px;
    margin-bottom: 18px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  li {
    font-size: 0.7vw;
    font-family: var(--Branding-sf-medium);
    cursor: pointer;
    color: white;
    .number {
      color: var(--primary-color);
    }
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
