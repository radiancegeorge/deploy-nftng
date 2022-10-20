import React, { useState } from "react";
import styled from "styled-components";
import add from "../../img/svg/gallery-add.svg";

const AddProduct = () => {
  const [number, setNumber] = useState("");
  const [quatity, setQuatity] = useState("");
  const [priceFocus, setPriceFocus] = useState(false);
  const [quatityFocus, setQuatityFocus] = useState(false);
  const [addImage, setAddImage] = useState("");
  const [urlImage, setUrlImage] = useState("");

  const handleAddImage = (e) => {
    let reader = new FileReader();
    setAddImage(setAddImage(e.target.files[0]));
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      setUrlImage(reader.result);
    };
  };

  return (
    <Container>
      <Wrapper>
        {urlImage ? (
          <AddImg>
            <div className="img-wrap">
              <img src={urlImage} alt="" />
            </div>
            <label htmlFor="add-image">
              <input
                type="file"
                id="add-image"
                onChange={handleAddImage}
                accept="image/*"
              />
              <img src={add} alt="" />
              <p>Change Image</p>
            </label>
          </AddImg>
        ) : (
          <AddCard priceFocus={priceFocus} quatityFocus={quatityFocus}>
            <label htmlFor="add-image">
              <input
                type="file"
                id="add-image"
                onChange={handleAddImage}
                accept="image/*"
              />
              <img src={add} alt="" />
              <p>AAdd Product Image</p>
            </label>
          </AddCard>
        )}
        <AddDesc>
          <input type="text" placeholder="Product Name" />
          <div className={`number ${priceFocus ? "active-border" : null}`}>
            <span>NGN</span>
            <input
              type="text"
              placeholder="Price"
              onFocus={() => {
                setPriceFocus(true);
              }}
              onBlur={() => setPriceFocus(false)}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className={`number ${quatityFocus ? "active-border" : null}`}>
            <span>Quantity</span>
            <input
              type="text"
              placeholder="Add numbers"
              onFocus={() => {
                setQuatityFocus(true);
              }}
              onBlur={() => setQuatityFocus(false)}
              onChange={(e) => setQuatity(e.target.value)}
            />
          </div>
          <Sizes>
            <p className="label">Size Available</p>
            <div className="sizes-wrap">
              <div className="select">
                <label htmlFor="m">M</label>
                <input type="radio" name="" id="m" />
              </div>
              <div className="select">
                <label htmlFor="l">L</label>
                <input type="radio" name="" id="l" />
              </div>
              <div className="select">
                <label htmlFor="xl">XL</label>
                <input type="radio" name="" id="xl" />
              </div>
              <div className="select">
                <label htmlFor="x">XXL</label>
                <input type="radio" name="" id="xxl" />
              </div>
            </div>
          </Sizes>
          <div className="btn-wrap">
            <button>List Product</button>
          </div>
        </AddDesc>
      </Wrapper>
    </Container>
  );
};

export default AddProduct;

const Container = styled.div`
  margin: 27px 0;
`;

const Wrapper = styled.div`
  display: flex;
  height: 350px;
  gap: 30px;
  input[type="file"] {
    display: none;
  }
  label {
    cursor: pointer;
  }
`;

const AddCard = styled.div`
  width: 260px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.06);

  cursor: pointer;
  img {
    width: 46px;
    height: 46px;
  }
  p {
    color: rgba(255, 255, 255, 0.41);
    font-family: var(--Branding-sf-light);
    font-size: 16px;
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

const AddImg = styled.div`
  width: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;
  .img-wrap {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  label {
    display: flex;
    margin-top: 13px;
    align-items: center;
    justify-content: center;
    padding: 14px;
    gap: 10px;
    width: 100%;
    border: 1px solid var(--primary-color);
    img {
      width: 23px;
    }
    p {
      font-size: 13px;
      font-family: var(--inter);
      font-weight: 700;
      color: var(--primary-color);
    }
  }
`;

const AddDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  flex: 1;
  input {
    background-color: transparent;
    padding: 8px 10px;
    font-size: 14px;
    border-radius: 5px;

    &::placeholder {
      font-size: 16px;
    }
  }
  .number {
    display: flex;
    align-items: center;

    height: fit-content;
    padding: 0 9px;
    border-radius: 6px;
    transition: all 0.3s ease-in;
    border: 1px solid rgba(161, 210, 131, 0.34);
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

  .active-border {
    border: 1px solid rgba(185, 243, 149, 0.6);
  }

  .btn-wrap {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    button {
      font-size: 16px;
      padding: 14px 23px;
      font-weight: 700;
    }
  }
`;

const Sizes = styled.div`
  font-family: var(--Branding-sf-medium);
  input {
    display: none;
  }
  .sizes-wrap {
    display: flex;
    gap: 5px;
    margin-top: 5px;
  }

  .select {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 30px;
    border: 1px solid #a1d28338;
    font-size: 8px;
  }
`;
