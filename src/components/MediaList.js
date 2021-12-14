import React, { useEffect } from "react";
import { Card, CardBody, Container, CardText, Row } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getMedia } from "../state/actions/mediaActions";
import MediaItem from "./media/MediaItem";

const cardColors = {
  video: "warning",
  img: "light",
};

function MediaList({ dispatch, data }) {
  useEffect(() => {
    dispatch(getMedia());
  }, [dispatch]);
  return (
    <Container>
      <Row className="mt-5">
        {data.map((mediaItem) => (
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
  count: PropTypes.number,
  isError: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    ...state.mediaData,
  };
};

export default connect(mapStateToProps)(MediaList);
