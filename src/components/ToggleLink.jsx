import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const ToggleLink = ({ title, links, handleToggle, id, pathLink }) => {
  const path = useLocation().pathname;

  return (
    <>
      <LiStyled>
        <Container
          onClick={() => handleToggle(id)}
          className={
            path === "/" && title === "home"
              ? "active-toggle"
              : path.includes(title)
              ? "active-toggle"
              : null
          }
        >
          <div className="l-head">
            <span>{title}</span>
            {links && <FontAwesomeIcon icon={faChevronDown} />}
          </div>
        </Container>
      </LiStyled>
    </>
  );
};

export default ToggleLink;
const LiStyled = styled.li`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.04);
  margin: 16px 32px;
  cursor: pointer;

  .active-toggle {
    color: var(--primary-color);
    border-radius: 10px;
    svg {
      color: black;
      transform: rotate(180deg);
    }
  }

  span {
    text-transform: uppercase;
    font-family: var(--Branding-sf-bold);
    font-size: 18px;
  }

  .l-head {
    gap: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 900px) {
    margin: 0;
  }
`;

const Container = styled.div`
  padding: 12px;
  width: 100%;
  text-align: center;
  svg {
    width: 15px;
    color: white;
  }

  span {
    font-family: var(--Branding-sf-medium);
  }

  @media screen and (min-width: 900px) {
    padding: 0;
    svg {
      display: none;
    }
  }
`;
