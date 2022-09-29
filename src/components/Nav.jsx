import React, { useState, useEffect } from "react";
import linksData from "../data/navLinksData";
import styled from "styled-components";
import ToggleLink from "./ToggleLink";
import logo from "../img/logo.png";
import { useWindowSize } from "../utils/useWindowSize";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [links, setLinks] = useState(linksData || []);

  const path = useLocation().pathname;

  const width = useWindowSize().width;

  const handleLinkToggle = (id) => {
    const updateLinks = links
      .map((l) => (l.id === id ? { ...l, toggle: !l.toggle } : l))
      .map((l) => (l.id !== id ? { ...l, toggle: false } : l));

    setLinks(updateLinks);
  };

  const handleToggle = () => {
    const updateLink = links.map((l) => l.id && { ...l, toggle: false });
    setLinks(updateLink);
    setToggle(!toggle);
  };

  useEffect(() => {
    setToggle(false);
  }, [path]);
  return (
    <NavStyled toggle={toggle}>
      <Container>
        <Wrapper className={toggle ? "active" : null}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="nav-btn" onClick={handleToggle}>
            {toggle && (
              <CloseBtn>
                <p>Close</p>
                <div className="cross">
                  <span>x</span>
                </div>
              </CloseBtn>
            )}
            {!toggle && (
              <BurgerMenu>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </BurgerMenu>
            )}
          </div>
          {(width > 900 || (width < 900 && toggle)) && (
            <Wrap>
              <LinksWrappper>
                {links.map((link) => (
                  <Link to={link.path} key={link.id}>
                    <ToggleLink
                      title={link.title}
                      links={link.links}
                      handleToggle={handleLinkToggle}
                      id={link.id}
                      pathLink={link.path}
                    />
                  </Link>
                ))}
              </LinksWrappper>
              <div className="nav-footer">
                <span>Copyright © 2022 NFT Nigeria</span>
                <span>Powered by NFTNG</span>
              </div>
            </Wrap>
          )}
        </Wrapper>
      </Container>
    </NavStyled>
  );
};

export default Nav;

const NavStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  background-color: black;
  font-family: var(--Branding-sf-medium);
  z-index: 100;
  @media screen and (max-width: 900px) {
    height: ${(p) => (p.toggle ? "100vh" : "fit-content")};
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .active {
    padding: 50px 70px 30px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  background-color: black;
  transition: padding 0.3s ease-in-out;
  img {
    width: 50px;
  }

  .nav-btn {
    position: relative;
    z-index: 10;
  }

  .nav-footer {
    margin-bottom: 34px;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 12px;
    font-family: var(--Branding-sf-light);
    gap: 14px;
  }

  @media screen and (min-width: 900px) {
    padding: 18px 5vw;
    img {
      width: 96px;
    }
    .nav-btn {
      display: none;
    }
    .nav-footer {
      display: none;
    }
  }
`;

const Wrap = styled.div`
  position: absolute;
  padding-top: 90px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;

  overflow: auto;

  @media screen and (min-width: 900px) {
    position: static;
    width: fit-content;
    padding: 0;
  }
`;

const BurgerMenu = styled.div`
  .line {
    width: 18px;
    height: 2.5px;
    background-color: white;
    margin: 2.5px 0;
  }
`;

const LinksWrappper = styled.ul`
  width: 100%;

  a {
    color: white;
  }
  margin-top: 60px;

  @media screen and (min-width: 900px) {
    display: flex;
    width: fit-content;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    margin: 0;
  }
`;

const CloseBtn = styled.div`
  display: flex;
  gap: 8px;
  p {
    color: var(--primary-color);
  }
  .cross {
    border: 1px solid var(--primary-color);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: inline-block;
      font-size: 12px;
      color: var(--primary-color);
    }
  }
`;
