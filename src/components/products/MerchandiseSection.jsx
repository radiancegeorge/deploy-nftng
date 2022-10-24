import React, { useEffect, useState } from "react";
import styled from "styled-components";

import jacob from "../../img/Jacob.png";
import Merch from "./Merch";

import useMerchandise from "../../hooks/merchandise";

const MerchandiseSection = ({
  checkAvailability,
  handleAddToCart,
  handleSelect,
}) => {
  const { merchandiseData, handleGetMerchandise } = useMerchandise();
  const [merchandise, setMerchandise] = useState([]);

  useEffect(() => {
    setMerchandise([]);
    handleGetMerchandise();
  }, []);

  useEffect(() => {
    merchandiseData.data?.results.length &&
      setMerchandise((state) => [...state, ...merchandiseData.data?.results]);
  }, [merchandiseData.data?.results]);

  return (
    <Container>
      <Wrap>
        <GridWrapper>
          {merchandise.map((data) => (
            <Merch
              onAdd={handleAddToCart}
              key={data.id}
              image={data.images?.length ? data.images[0].url : jacob}
              data={data}
              checkAvailability={checkAvailability}
              handleSelect={handleSelect}
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
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 3vw;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 16px;
  }
`;
