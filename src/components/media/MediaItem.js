import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MediaImg = styled.img`
  max-width: 137px;
`;

function MediaItem({ mediaItem }) {
  return (
    <>
      {mediaItem.type === "img" && <MediaImg src={mediaItem.src} />}
      {mediaItem.type === "video" && <video src={mediaItem.src} />}
    </>
  );
}

MediaList.propTypes = {
  mediaItem: PropTypes.object,
};

export default MediaItem;
