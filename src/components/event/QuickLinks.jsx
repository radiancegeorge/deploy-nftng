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
            to="e-venue"
            spy={true}
            smooth={true}
            offset={-200}
            duration={100}
          >
            Venue
          </Link>
        </li>
        <li>
          <Link
            to="e-speaker"
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
            to="e-sponsor"
            spy={true}
            smooth={true}
            offset={-150}
            duration={100}
          >
            Sponsor/ Partners
          </Link>
        </li>
        <li>
          <Link
            to="e-accommodation"
            spy={true}
            smooth={true}
            offset={-120}
            duration={100}
          >
            Accommodation
          </Link>
        </li>
        <li>
          <Link
            to="e-flight"
            spy={true}
            smooth={true}
            offset={-120}
            duration={100}
          >
            Flight Booking
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
  top: 202.5px;
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
`;
