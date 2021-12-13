import React, { useEffect } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "reactstrap";
import { connect } from "react-redux";

import { getMedia } from "../state/actions/mediaActions";

function MediaList({ dispatch }) {
  useEffect(() => {
    dispatch(getMedia());
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default connect()(MediaList);
