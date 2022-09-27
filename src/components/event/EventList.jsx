import React from "react";
import styled from "styled-components";
import twitter from "../../img/svg/twitter-white.svg";
import slider1 from "../../img/event-slider1.jpeg";
import slider2 from "../../img/event-slider2.jpeg";
import slider3 from "../../img/event-slider3.jpeg";
import partner1 from "../../img/nft-partners/partner1.jpeg";
import partner2 from "../../img/nft-partners/partner2.jpeg";
import map from "../../img/map.png";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { ntfPartner, speakers } from "../../data/eventData";
import { Link } from "react-router-dom";
import microphone from "../../img/svg/microphone.svg";
import hamonic from "../../img/hamonic.jpg";
import plane from "../../img/svg/plane.svg";
import profile from "../../img/svg/profile.svg";
import bank from "../../img/svg/bank.svg";
import house from "../../img/svg/house.svg";
import sponserImg from "../../img/nft-partners/sponsers.png";

const EventList = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <Container>
      <Wrapper>
        <Wrap id="e-venue">
          <div className="event-header">
            <img src={bank} alt="" />
            <h2>VENUE</h2>
          </div>
          <p>
            The NFTNG Event will hold at the Balmoral Convention Centre,
            Victoria Island, Lagos, Nigeria.
          </p>
          <div className="venue">
            <div className="location">
              <Swiper
                centeredSlides={true}
                autoplay
                slidesPerView={1}
                navigation={{
                  prevEl: ".arrow-prev",
                  nextEl: ".arrow-next",
                }}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <img src={slider1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slider2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slider3} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="map">
              <img src={map} alt="" />
            </div>
          </div>
        </Wrap>
        <Wrap id="e-speaker">
          <div className="event-header">
            <img src={microphone} alt="" />
            <h2>SPEAKERS</h2>
          </div>
          <p>
            We are so excited to be joined by a group of talented, resourceful
            and empowering speakers who are experienced in a wide range of Web3
            topics. Meet our Speakers:
          </p>
          <GridWrapper>
            {speakers.map((data) => (
              <div className="wrap" key={data.id}>
                <img src={data.img} alt="" />
                <div className="team-desc">
                  <p className="name">{data.name}</p>
                </div>
                <a href={data.twitter} target="_blank" rel="noreferrer">
                  <img src={twitter} alt="" />
                </a>
              </div>
            ))}
          </GridWrapper>
        </Wrap>
        <Wrap id="e-sponsor">
          <div className="sponser-wrap">
            <div className="event-header">
              <img src={profile} alt="" />
              <h2>Sponsors</h2>
            </div>
            <p>
              Our work is possible thanks to the many organisations that believe
              in our mission and support our event and products with financial
              gifts. Meet our Sponsors:
            </p>
            <GridImage>
              <div className="img-wrap">
                <a href="https://www.noji.so" target="_blank" rel="noreferrer">
                  <img src={sponserImg} alt="" />
                </a>
              </div>
            </GridImage>
          </div>
          <div className="sponser-wrap">
            <div className="event-header">
              <img src={profile} alt="" />
              <h2>Partners</h2>
            </div>
            <p>
              To ensure that the community get the most of our event and
              products, we have established strategic alliance with these
              innovative organizations that provide us with in-kind support for
              our utilities. Meet our Partners:
            </p>
            <GridImage>
              <div className="img-wrap">
                <a
                  href="https://twitter.com/harmonicstudi0z?s=21&t=qUoQYv86y8PyefMZZvqu-w"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={hamonic} alt="" />
                </a>
              </div>

              <div className="img-wrap">
                <a
                  href="https://twitter.com/naijadao?s=21&t=qUoQYv86y8PyefMZZvqu-w"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={partner1} alt="" />
                </a>
              </div>
              <div className="img-wrap">
                <a
                  href="https://twitter.com/p2learn_?s=21&t=qUoQYv86y8PyefMZZvqu-w"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={partner2} alt="" />
                </a>
              </div>
            </GridImage>
          </div>
          <div className="sponser-wrap">
            <div className="event-header">
              <img src={profile} alt="" />
              <h2>Nft Partners</h2>
            </div>
            <p>
              We appreciate these NFT Projects that find our utilities and
              community worthy of their support and recognition. Meet our NFT
              Partners:
            </p>
            <GridImage>
              {ntfPartner.map((data) => (
                <a
                  href={data.twitter}
                  key={data.id}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="img-wrap">
                    <img src={data.img} alt="" />
                  </div>
                </a>
              ))}
            </GridImage>
          </div>
        </Wrap>
        <Wrap id="e-accommodation">
          <div className="event-header">
            <img src={house} alt="" />
            <h2>Accommodation</h2>
          </div>
          <p>
            NFTNG, through its partnerships, will provide attendees of the
            Webthree Buzz event with comfortable accommodation close to the
            venue of the event at discounted and affordable rates. To request
            for accommodation booking, kindly contact
          </p>
          <Link to="/comingsoon" className="btn-link">
            Get accommodation
          </Link>
        </Wrap>
        <Wrap id="e-flight">
          <div className="event-header">
            <img src={plane} alt="" />
            <h2>Flight Booking</h2>
          </div>
          <p>
            NFTNG will assist attendees of the Webthree Buzz event to procure
            flight tickets on comfortable and affordable airlines. Also, airport
            to hotel conveyance will be arranged for attendees on request. To
            request for flight booking and airport conveyance, kindly contact
          </p>
          <a
            href="https://www.suninternational.com/federal-palace/?gclid=Cj0KCQjw1bqZBhDXARIsANTjCPKQKzzzC74-Ez0Kj_0mte_-7Z3_NprNGVoeCNoLy1Y-53o8F5gjI30aAm9JEALw_wcB"
            className="btn-link"
            target="_blank"
            rel="noreferrer"
          >
            Book flight
          </a>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default EventList;

const Container = styled.div`
  position: relative;
  padding: 0 120px;
  margin-bottom: 120px;
  @media screen and (max-width: 900px) {
    margin-bottom: 60px;
    padding: 0 20px;
  }
`;

const Wrapper = styled.div`
  padding-right: 18vw;
  @media screen and (max-width: 900px) {
    padding: 0;
  }
`;

const Wrap = styled.div`
  width: 100%;
  padding: 40px 30px;

  margin-bottom: 20px;
  &:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.08);
  }
  &:nth-child(even) {
    background-color: black;
  }

  .event-header {
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  h2 {
    color: var(--primary-color);
    font-size: 24px;
    text-transform: uppercase;
    span {
      color: rgba(183, 183, 183, 0.52);
    }
  }
  p {
    margin: 14px 0 0;
    font-size: 16px;
    font-family: var(--Branding-sf-light);
    color: white;
    line-height: 27px;
    word-spacing: 2px;
  }
  .venue {
    margin-top: 30px;
    display: flex;
    width: 100%;
    height: 400px;
    gap: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .location {
      width: 60%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .swiper {
        height: 100%;
        .swiper-slide {
          height: 100%;
        }
        .swiper-slide-active {
          height: 100%;
        }
      }
    }
    .map {
      width: 40%;
    }
  }
  .sponser-wrap {
    margin-bottom: 48px;
  }
  button,
  .btn-link {
    margin-top: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-family: var(--inter);
    padding: 17px 0;
    width: 100%;
    max-width: 220px;
    border-radius: 8px;
  }
  @media screen and (max-width: 900px) {
    padding: 38px 20px 20px;
    margin-bottom: 28px;
    .event-header {
      img {
        width: 34px;
        height: 34px;
      }
    }

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }
    .venue {
      flex-direction: column;
      height: fit-content;
      .location,
      .map {
        width: 100%;
        height: 300px;
      }
    }
    .btn-link {
      max-width: 100%;
      border-radius: 0;
    }
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.2vw;
  margin-top: 30px;

  .wrap {
    border: 1px solid var(--primary-color);
    border-radius: 8px;
    overflow: hidden;
    width: 100%;
    height: 40vh;
    position: relative;
    img {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    a {
      position: absolute;
      right: 25px;
      z-index: 5;
      bottom: 25px;
      img {
        width: 14px;
        height: 14px;
      }
    }
  }
  .team-desc {
    position: absolute;
    z-index: 2;
    bottom: 0;
    padding: 10px 15px;
    left: 0;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    p {
      margin: 0;
      padding: 0;
      font-family: var(--roboto);
      line-height: 18px;
    }
    .name {
      font-size: 15px;
      font-weight: 500;
    }
    .role {
      font-size: 9px;
      font-weight: 400;
    }
  }
  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    overflow: auto;
    .wrap {
      flex-shrink: 0;
      width: 200px;
      height: 280px;
    }
  }
`;

const GridImage = styled.div`
  margin-top: 14px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(8, 1fr);
  justify-content: space-between;
  .img-wrap {
    width: 6vw;
    height: 6vw;
    background-color: black;
    overflow: hidden;
    border-radius: 50%;
    border: 5px solid var(--primary-color);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    .img-wrap {
      width: 60px;
      height: 60px;
      background-color: black;
      overflow: hidden;
      border-radius: 50%;
      border: 5px solid var(--primary-color);
    }
  }
`;
