import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../../img/svg/arrow-left.svg";
import { useNavigate } from "react-router-dom";

const Volunter = () => {
  const navigate = useNavigate();
  const [inputFocus, setInputFocus] = useState(false);

  const [twitterUrl, setTwitterUrl] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [departmentDetails, setDepartmentDetails] = useState("");
  const [departmentLinks, setDepartmentLinks] = useState("");

  const handleMailto = () => {
    if (twitterUrl && selectValue && departmentDetails && departmentLinks) {
      return `mailto:admin@nftng.com?subject=Volunteer Form&body=${`Twitter: ${twitterUrl}\n
      Departments: ${selectValue}\n
      Department function: ${departmentDetails}\n
      Department links: ${departmentLinks}`}`;
    }
  };

  const onFocus = () => setInputFocus(true);
  const onBlur = () => setInputFocus(false);
  return (
    <Container>
      <div className="back" onClick={() => navigate(-1)}>
        <img src={arrow} alt="" />
        <p>Back</p>
      </div>
      <Wrapper>
        <Wrap>
          <h1>
            APPLY/ <span>Volunter</span>
          </h1>
          <p>
            Following numerous requests, NFT NG is launching a volunteer service
            program for those of you who have the skills and want to contribute
            to NFTNG. Please fill out the application form below and let us know
            what you can offer. PS: Completing this form does not guarantee
            Buzzlist inclusion.
          </p>
          <Form onSubmit={(e) => e.preventDefault()}>
            <FormWrap>
              <LeftWrap inputFocus={inputFocus}>
                <div className="twitter">
                  <span>Twitter Handle*</span>
                  <input
                    type="text"
                    placeholder="https://www.twitter.com/nft__ng"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    value={twitterUrl}
                    onChange={(e) => setTwitterUrl(e.target.value)}
                  />
                </div>
                <div className="wrapper">
                  <h3>Departments you can volunteer in*</h3>
                  <RadioWrapper>
                    <div className="radio-wrap">
                      <input
                        type="radio"
                        name="select"
                        id="protocol"
                        value="Protocol / Ushering"
                        onChange={(e) => setSelectValue(e.target.value)}
                      />
                      <label htmlFor="protocol">Protocol / Ushering</label>
                    </div>
                    <div className="radio-wrap">
                      <input
                        type="radio"
                        name="select"
                        id="technical"
                        value="Technical team"
                        onChange={(e) => setSelectValue(e.target.value)}
                      />
                      <label htmlFor="technical">Technical team</label>
                    </div>
                    <div className="radio-wrap">
                      <input
                        type="radio"
                        name="select"
                        id="media"
                        value="Media: Photography"
                        onChange={(e) => setSelectValue(e.target.value)}
                      />
                      <label htmlFor="media">Media: Photography</label>
                    </div>
                    <div className="radio-wrap">
                      <input
                        type="radio"
                        name="select"
                        id="graphics"
                        value="Media: Graphics/Animation"
                        onChange={(e) => setSelectValue(e.target.value)}
                      />
                      <label htmlFor="graphics">
                        Media: Graphics/Animation
                      </label>
                    </div>
                    <div className="radio-wrap">
                      <input
                        type="radio"
                        name="select"
                        id="others"
                        value="Media: Others"
                        onChange={(e) => setSelectValue(e.target.value)}
                      />
                      <label htmlFor="others">Media: Others</label>
                    </div>
                    <div className="radio-wrap">
                      <input
                        type="radio"
                        name="select"
                        id="pr"
                        value="PR"
                        onChange={(e) => setSelectValue(e.target.value)}
                      />
                      <label htmlFor="pr">PR</label>
                    </div>
                    <div className="radio-wrap">
                      <input
                        type="radio"
                        name="select"
                        id="content"
                        value="Content"
                        onChange={(e) => setSelectValue(e.target.value)}
                      />
                      <label htmlFor="content">Content</label>
                    </div>
                  </RadioWrapper>
                </div>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Kindly tell us how you can function in the department you chose to volunteer in."
                  value={departmentDetails}
                  onChange={(e) => setDepartmentDetails(e.target.value)}
                ></textarea>
              </LeftWrap>
              <RightWrap>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="If available, kindly provide a link (s) to any work you have done previously in the department you selected above."
                  value={departmentLinks}
                  onChange={(e) => setDepartmentLinks(e.target.value)}
                ></textarea>
              </RightWrap>
            </FormWrap>
            <button
              type="submit"
              disabled={
                twitterUrl &&
                selectValue &&
                departmentDetails &&
                departmentLinks
                  ? false
                  : true
              }
            >
              {twitterUrl &&
              selectValue &&
              departmentDetails &&
              departmentLinks ? (
                <a href={handleMailto() || ""} target="_blank" rel="noreferrer">
                  Submit
                </a>
              ) : (
                "Submit"
              )}
            </button>
          </Form>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default Volunter;

const Container = styled.div`
  padding: 90px 120px 8vh;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: #252525;

  .back {
    position: absolute;
    top: 18vh;
    left: 9vw;
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--primary-color);
    font-size: 16px;
    font-family: var(--Branding-sf-medium);
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    padding: 140px 20px 100px;
    height: fit-content;
    .back {
      top: 10vh;
      left: 20px;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 90%;
    margin: 12px 0;
    font-family: var(--Branding-sf-light);
    line-height: 25px;
  }
  @media screen and (max-width: 900px) {
    p {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 62vw;
  height: fit-content;
  margin: 0 auto;
  h1 {
    font-size: 20px;
    span {
      font-size: 18px;
      font-family: var(--Branding-sf-light);
    }
  }
  @media screen and (max-width: 900px) {
    max-width: 100%;
  }
`;

const Form = styled.form`
  width: 100%;
  input,
  textarea {
    padding: 10px;
    font-size: 16px;
    margin-bottom: 12px;
    border-radius: 6px;
    &::placeholder {
      font-size: 16px;
    }
  }
  button,
  .btn-link {
    width: 100%;
    border-radius: 6px;
    padding: 10px 0;
    font-size: 14px;
    max-width: 150px;
    a {
      color: black;
    }
  }
  @media screen and (max-width: 900px) {
    textarea,
    input {
      font-size: 12px;
      padding: 14px 8px;
      margin-bottom: 14px;
      border-radius: 0;
      &::placeholder {
        font-size: 12px;
      }
    }
    button,
    .btn-link {
      max-width: 100%;
    }
  }
`;
const FormWrap = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 0;
  }
`;

const LeftWrap = styled.div`
  width: 100%;
  h3 {
    font-size: 12px;
    color: var(--primary-color);
    font-family: var(--Branding-sf-light);
    margin-bottom: 14px;
  }
  .twitter {
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
      display: block;
      font-size: 15px;
      width: 150px;
      font-family: var(--Branding-sf-medium);
    }
    input {
      border: none;
      margin: 0;
    }
  }

  textarea {
    height: 130px;
  }
  @media screen and (max-width: 900px) {
    .twitter {
      border-radius: 0;
      span {
        font-size: 12px;
        width: 120px;
      }
    }
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 0 14px;

  input[type="radio"] {
    width: 13px;
    height: 13px;
    padding: 0;
    margin: 0;
    background-color: #252525;
    border: 1px solid rgba(255, 255, 255, 0.66);
    -webkit-appearance: none;
    appearance: none;
    margin-right: 4px;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    &::before {
      content: "";
      position: relative;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      background: var(--primary-color);
    }
    &:checked::before {
      transform: scale(1);
    }
  }

  label {
    font-size: 0.7vw;
    font-family: "Poppins", sans-serif;
  }
  .radio-wrap {
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    label {
      font-size: 12px;
    }
  }
`;

const RightWrap = styled.div`
  width: 100%;

  textarea {
    height: 240px;
  }
  @media screen and (max-width: 900px) {
    textarea {
      height: 130px;
      border-radius: 0;
    }
  }
`;
