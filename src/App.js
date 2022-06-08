import React from "react";
import Header from "./Components/Layout/Header/Header";
import Wrapper from "./Components/Layout/Wrapper";
import Section1 from "./Components/Sections/Section1";
import Section2 from "./Components/Sections/Section2";
import Services from "./Components/Sections/Services/Services";

function App() {
  return (
    <React.Fragment>
      <Wrapper>
        <Header/>
        <Section1/>
        <Section2/>
        <Services/>
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
