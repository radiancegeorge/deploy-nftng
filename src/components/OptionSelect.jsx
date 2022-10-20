import React, { useState, useEffect } from "react";
import styled from "styled-components";

const OptionSelect = ({
  title,
  setOption,
  option,
  arr,
  emptyMes,
  setSelectOption,
}) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(false);
  }, [option]);

  return (
    <Container>
      <Title onClick={() => setToggle(!toggle)} option={option}>
        <p>{option ? option : title}</p>
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.79 1.36475L10.6226 7.53213C9.89424 8.26049 8.70239 8.26049 7.97403 7.53213L1.80664 1.36475"
            stroke="white"
            strokeWidth="1.89184"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Title>
      {toggle && (
        <Select name="cars" id="cars">
          {arr !== undefined ? (
            arr.map((data, index) => (
              <label htmlFor={data.name} key={index}>
                {data.name}
                <input
                  type="radio"
                  name={`switch-${title}`}
                  id={data.name}
                  value={data.name}
                  onChange={(e) => {
                    setOption(e.target.value);
                    setSelectOption(data);
                  }}
                />
              </label>
            ))
          ) : (
            <label>{emptyMes ? emptyMes : "Empty"}</label>
          )}
        </Select>
      )}
    </Container>
  );
};

export default OptionSelect;

const Container = styled.div`
  font-family: var(--Branding-sf-light);
  position: relative;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 16px;
  padding: 8px 10px;
  color: ${(p) => (p.option ? "white" : "rgba(255, 255, 255, 0.41)")};
  border: 1px solid rgba(161, 210, 131, 0.34);
  border-radius: 5px;

  svg {
    width: 13px;
  }
`;

const Select = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  font-size: 14px;
  display: flex;
  flex-direction: column;

  overflow: auto;

  label {
    width: 100%;
    padding: 4px 10px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.6);

    &:hover {
      background-color: rgba(0, 0, 0, 1);
    }
  }
  input[type="radio"] {
    display: none;
  }
`;
