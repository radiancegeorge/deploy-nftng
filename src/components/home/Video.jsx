import React from "react";
import styled from "styled-components";
import video from "../../vdeo/NftngVideo.mp4";

const Video = () => {
  return (
    <Container>
      <video loop={true} autoPlay muted src={video}>
        Your browser doesn't support video.
      </video>
      <a
        href="https://www.youtube.com/channel/UCmnmphMQvZEb-Ntd6Q4emqQ"
        target="_blank"
        className="btn-link"
        rel="noreferrer"
      >
        View more videos
      </a>
    </Container>
  );
};

export default Video;

const Container = styled.div`
  margin: 40px 18vw 0;
  height: 520px;
  overflow: hidden;
  position: relative;
  border: 3px solid var(--primary-color);
  .btn-link {
    position: absolute;
    bottom: 0;
    z-index: 3;
    left: 0;
    margin: 20px;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 900px) {
    margin: 40px 20px 0;
    height: 250px;
    .btn-link {
      font-size: 10px;
    }
  }
`;
