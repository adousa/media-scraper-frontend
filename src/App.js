import React from "react";

import Header from "./components/Header";
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
    </Wrapper>
  );
}

export default App;
