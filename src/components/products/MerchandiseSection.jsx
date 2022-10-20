import React from "react";
import styled from "styled-components";

import jacob from "../../img/Jacob.png";
import Merch from "./Merch";

import { merchsData } from "../../data/merchsData";

const MerchandiseSection = ({ checkAvailability, handleAddToCart, admin }) => {
  return (
    <Container>
      <Wrap>
        <GridWrapper>
          {merchsData.map((data) => (
            <Merch
              onAdd={handleAddToCart}
              key={data.id}
              image={jacob}
              data={data}
              checkAvailability={checkAvailability}
              admin={admin}
            />
          ))}
        </GridWrapper>
      </Wrap>
    </Container>
  );
};

export default MerchandiseSection;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  background-color: #0000004f;
`;

const GridWrapper = styled.div`
  padding: 40px 60px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto);
  gap: 0 30px;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 16px;
  }
`;
