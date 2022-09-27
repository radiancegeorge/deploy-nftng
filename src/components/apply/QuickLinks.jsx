import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const QuickLinks = () => {
  return (
    <Container>
      <p>Quick links</p>
      <ul>
        <li>
          <Link
            to="award"
            spy={true}
            smooth={true}
            offset={-200}
            duration={100}
          >
            Award Nominees
          </Link>
        </li>
        <li>
          <Link
            to="speaker"
            spy={true}
            smooth={true}
            offset={-120}
            duration={100}
          >
            Speaker
          </Link>
        </li>
        <li>
          <Link
            to="volunteer"
            spy={true}
            smooth={true}
            offset={-150}
            duration={100}
          >
            Volunteer
          </Link>
        </li>
        <li>
          <Link
            to="sponsor"
            spy={true}
            smooth={true}
            offset={-150}
            duration={100}
          >
            Sponsor
          </Link>
        </li>
        <li>
          <Link
            to="partner"
            spy={true}
            smooth={true}
            offset={-120}
            duration={100}
          >
            Partner
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default QuickLinks;

const Container = styled.div`
  position: fixed;
  width: fit-content;
  top: 218.5px;
  right: 120px;
  padding: 20px 36px;
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
    font-size: 16px;
    font-family: var(--Branding-sf-medium);
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
