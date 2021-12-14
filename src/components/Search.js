import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchMedia, getMedia } from "../state/actions/mediaActions";

const Search = ({ dispatch }) => {
  const searchByUsername = (query) => {
    if (query && query !== "") {
      dispatch(searchMedia(query));
    } else {
      dispatch(getMedia());
    }
  };

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          placeholder="Search URLS"
          onChange={(e) => searchByUsername(e.target.value)}
        />
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
  width: 400px;
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
