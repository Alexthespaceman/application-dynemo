import React from "react";
import Cards from "./js/components/Cards";
import Footer from "./js/components/Footer";
import Header from "./js/components/Header";
import "./styles/page.index.scss";

function App() {
  // useEffect(() => {
  //   api.getF1Data().then((data) => {
  //     console.log(data);
  //   });
  // });

  return (
    <div className="App">
      <Header />
      <Cards />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
