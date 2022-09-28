import React from "react";
import styled from "styled-components";
import plus from "../../img/svg/add-circle.svg";
import subs from "../../img/svg/subs-circle.svg";

const ToggleFaq = ({ question, toggle, answer, id, handleToggle }) => {
  return (
    <Container onClick={() => handleToggle(id)}>
      <Wrapper toggle={toggle}>
        <div className="header">
          <h3>{question}</h3>
          <img src={toggle ? subs : plus} alt="" />
        </div>

        {toggle && (
          <div className="collapse">
            <p>{answer}</p>
          </div>
        )}
      </Wrapper>
    </Container>
  );
};

export default ToggleFaq;

const Container = styled.div`
  width: 100%;
  margin-bottom: 12px;
`;

const Wrapper = styled.div`
  border-radius: 12px;
  border: ${(p) => (p.toggle ? "none" : "1px solid white ")};
  background-color: ${(p) =>
    p.toggle ? "rgba(161, 210, 131, 0.07)" : "transparent"};
  padding: 14px 20px;
  font-family: var(--inter);
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 18px;
      font-weight: 500;
      color: ${(p) => (p.toggle ? "var(--primary-color)" : "white")};
    }
    img {
      width: 20px;
      height: 20px;
    }
  }

  .collapse {
    margin-top: 22px;
    font-weight: 400;
    font-size: 14px;

    p {
      color: white;
      line-height: 24px;
    }
  }
  @media screen and (max-width: 900px) {
    .header {
      h3 {
        font-size: 12px;
      }
      img {
        width: 12px;
        height: 12px;
      }
    }
    .collapse {
      margin-top: 14px;
      font-size: 12px;
    }
  }
`;
