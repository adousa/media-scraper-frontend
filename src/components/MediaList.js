import React, { useEffect } from "react";
import { Card, CardBody, Container, CardText, Row } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getMedia, searchMedia } from "../state/actions/mediaActions";
import MediaItem from "./media/MediaItem";
import InfiniteScroll from "./InfiniteScroll";

const cardColors = {
  video: "warning",
  img: "light",
};

function MediaList({ dispatch, data, nextPage, searchQuery, mediaType }) {
  useEffect(() => {
    dispatch(getMedia());
  }, [dispatch]);
  return (
    <Container>
      <Row className="mt-5">
        <InfiniteScroll
          canLoadMore={nextPage}
          callback={() => {
            if (nextPage) {
              dispatch(
                searchMedia(searchQuery, nextPage, undefined, mediaType)
              );
            }
          }}
        >
          {(data || []).map((mediaItem) => (
            <Card
              color={cardColors[mediaItem.type]}
              className="col-xl-2 col-lg-4 col-md-6 col-sm-12"
              key={mediaItem.id}
            >
              <CardBody>
                <MediaItem key={mediaItem.id} mediaItem={mediaItem} />
                <CardText className="mt-2">{mediaItem.src}</CardText>
              </CardBody>
            </Card>
          ))}
        </InfiniteScroll>
      </Row>
    </Container>
  );
}

MediaList.propTypes = {
  dispatch: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.any])),
  error: PropTypes.string,
  nextPage: PropTypes.number,
  lastPage: PropTypes.number,
  prevPage: PropTypes.number,
  mediaType: PropTypes.string,
  searchQuery: PropTypes.string,
  count: PropTypes.number,
  isError: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    ...state.mediaData,
  };
};

export default connect(mapStateToProps)(MediaList);
