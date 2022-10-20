import React, { useState, useEffect } from "react";
import styled from "styled-components";

import OptionSelect from "../OptionSelect";
import fetchLocation from "../../fetch/fetchLocation";

const CheckoutForm = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [selectCountry, setSelectCountry] = useState("");
  const [states, setStates] = useState("");
  const [statesList, setStatesList] = useState([]);
  const [selectStates, setSelectStates] = useState("");

  const [inputFocus, setInputFocus] = useState(false);
  const onFocus = () => setInputFocus(true);
  const onBlur = () => setInputFocus(false);

  const sortArray = (x, y) => {
    if (x.name < y.name) {
      return -1;
    }
    if (x.name > y.name) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    const getCountry = async () => {
      const res = await fetchLocation.get("/get-countries");
      const data = res.data;
      setCountryList(data.sort(sortArray));

      if (selectCountry) {
        const res = await fetchLocation.get(
          `/get-states?countryCode=${selectCountry.code}`
        );
        const data = res.data;
        setStatesList(data.sort(sortArray));
      }
    };

    getCountry();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Form inputFocus={inputFocus}>
          <div className="flex">
            <input
              type="text"
              placeholder="First Name"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
          </div>
          <div className="number">
            <span>+234</span>
            <input
              type="text"
              placeholder="Enter phone number"
              onFocus={onFocus}
              onBlur={onBlur}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <input
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
          <div className="flex">
            <OptionSelect
              title={"Country"}
              setOption={setCountry}
              option={country}
              arr={countryList}
              emptyMes="...."
              setSelectOption={setSelectCountry}
            />
            <OptionSelect
              title={"State/Region"}
              setOption={setStates}
              option={states}
              arr={statesList}
              emptyMes="...."
              setSelectOption={setSelectStates}
            />
            <OptionSelect title={"City"} emptyMes="...." />
          </div>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default CheckoutForm;

const Container = styled.div`
  padding: 0 20vw;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  background-color: #0000004f;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  input,
  textarea {
    background-color: transparent;
    padding: 8px 10px;
    font-size: 14px;
    border-radius: 5px;

    &::placeholder {
      font-size: 16px;
    }
  }

  textarea {
    height: 105px;
  }
  .flex {
    display: flex;
    gap: 12px;
  }
  .number {
    display: flex;
    align-items: center;
    border: ${(p) =>
      p.inputFocus
        ? "1px solid rgba(185, 243, 149, 0.6)"
        : "1px solid rgba(161, 210, 131, 0.34)"};
    height: fit-content;
    margin-bottom: 12px;
    padding: 0 9px;
    border-radius: 6px;
    transition: all 0.3s ease-in;
    span {
      display: inline-block;
      font-size: 16px;
      font-family: var(--Branding-sf-medium);
    }
    input {
      border: none;
      margin: 0;
    }
  }
`;
