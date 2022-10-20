import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import arrow from "../img/svg/arrow-left.svg";

import ProductPass from "../components/admin/ProductPass";
import DashBoard from "../components/admin/DashBoard";
import AddProduct from "../components/admin/AddProduct";
import Footer from "../components/Footer";

const Admin = () => {
  const [toggleState, setToggleState] = useState("");
  const navigate = useNavigate();
  return (
    <Container>
      <DashBoard />
      <Footer />
    </Container>
  );
};

export default Admin;

const Container = styled.section`
  padding: 10vh 5vw 8vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: #252525;
`;
