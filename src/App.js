import React from "react";

import Header from "./components/Header";
import MediaList from "./components/MediaList";
import styled from "styled-components";
import "./App.css";

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <MediaList />
    </Wrapper>
  );
}

export default App;
