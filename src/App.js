import React from "react";
import Cards from "./js/components/cards";
import "./styles/page.index.scss";

function App() {
  // useEffect(() => {
  //   api.getF1Data().then((data) => {
  //     console.log(data);
  //   });
  // });

  return (
    <div className="App">
      <Cards />
      <Cards />
    </div>
  );
}

export default App;
