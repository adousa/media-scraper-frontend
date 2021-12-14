import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchMedia, getMedia } from "../state/actions/mediaActions";

const Search = ({ dispatch }) => {
  const [query, setQuery] = useState(undefined);
  const [mediaType, setMediaType] = useState(undefined);

  useEffect(() => {
    if (query || mediaType) {
      dispatch(searchMedia(query, 1, 15, mediaType));
    } else {
      dispatch(getMedia());
    }
  }, [mediaType, query]);

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          placeholder="Search URLS"
          onChange={(e) => setQuery(e.target.value)}
        />
        <select name="type" onChange={(e) => setMediaType(e.target.value)}>
          <option value="">All</option>
          <option value="img">Image</option>
          <option value="video">Video</option>
        </select>
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;
  &:focus {
    outline: 0;
  }
`;

Search.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(Search);
