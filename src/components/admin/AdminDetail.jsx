import React from "react";
import AddProduct from "./AddProduct";
import ProductPass from "./ProductPass";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer";

const AdminDetail = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Container>
      {pathname === "/admin/add-products" ? (
        <ProductPass />
      ) : (
        navigate("/not-found")
      )}
      <Footer />
    </Container>
  );
};

export default AdminDetail;

const Container = styled.div`
  padding-bottom: 8vh;
`;
