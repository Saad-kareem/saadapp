import React from "react";
import Card from "./components/Card";
import Sdata from "./components/sData";

function App() {
  const nCard = (val) => {
    return (
      <Card
        imgsrc={val.imgscr}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
    );
  };
  return (
    <>
      <h1 className="heading_style">List of Top 5 Youtube series in 2023 </h1>

      {Sdata.map(nCard)}
    </>
  );
}
export default App;
