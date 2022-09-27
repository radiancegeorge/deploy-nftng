import React from "react";
import styled from "styled-components";
import { img } from "../../data/sliderData";

const Slider = () => {
  const renderLoop = () => {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push(img[i]);
    }
    return arr;
  };

  return (
    <Container>
      <div className="ellipse"></div>
      <Lists>
        {img.map((i) => (
          <li key={i.id}>
            <img src={i.img} alt="" />
          </li>
        ))}
        {renderLoop().map((i) => (
          <li key={i.id}>
            <img src={i.img} alt="" />
          </li>
        ))}
      </Lists>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  width: 100%;
  height: 32vh;
  position: relative;
  overflow: hidden;

  .ellipse {
    position: absolute;
    top: -13vh;
    left: 50%;
    transform: translateX(-50%);
    width: 200vw;
    height: 20vh;
    z-index: 20;
    border-radius: 70%;
    background-color: #252525;
  }
  @media screen and (max-width: 900px) {
    .ellipse {
      top: -16vh;
    }
  }
`;

const Lists = styled.ul`
  list-style: none;
  width: 104vw;
  height: 100%;
  display: flex;
  gap: 0 10px;
  animation: scrolling1 20s linear infinite;

  @keyframes scrolling1 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc((-13vw - 10px) * ${img.length}));
    }
  }
  @keyframes scrolling2 {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc((-48vw - 10px) * ${img.length}));
    }
  }

  li {
    width: 13vw;
    flex-shrink: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) {
    animation: scrolling2 20s linear infinite;
    li {
      padding-top: 10px;
      width: 48vw;
    }
  }
`;
