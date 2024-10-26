import React from "react";
import Header from "./components/pages/Header";
import Mousemove from "./components/mousemove";
import Page1 from "./components/pages/page1";

const App = () => {
  return (
    <>
      <Mousemove />
      <Header />
      <main>
        <Page1 />
      </main>
    </>
  );
};

export default App;
