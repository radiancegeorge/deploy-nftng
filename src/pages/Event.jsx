import React from "react";
import styled from "styled-components";
import { Container } from "./Home";
import EventList from "../components/event/EventList";
import QuickLinks from "../components/event/QuickLinks";
import Footer from "../components/Footer";

const Event = () => {
  return (
    <EventStyled>
      <div className="header">
        <h1>Event</h1>
      </div>
      <EventList />
      <QuickLinks />
      <Footer />
    </EventStyled>
  );
};

export default Event;

const EventStyled = styled(Container)`
  position: relative;
  padding-bottom: 70px;
  .header {
    margin-top: 70px;
    margin-bottom: 40px;
    padding: 0 120px;
    text-transform: uppercase;
    color: white;
    h1 {
      font-size: 36px;
    }
  }
  @media screen and (max-width: 900px) {
    .header {
      margin-top: 28px;
      margin-bottom: 28px;
      padding: 0 20px;
      text-transform: uppercase;
      color: white;
      h1 {
        font-size: 18px;
      }
    }
  }
`;
