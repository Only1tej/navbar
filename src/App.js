import Navbar from "./Navbar";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  // Without the use of react router dom
  // let component;
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <Home />;
  //     break;
  //   case "/pricing":
  //     component = <Pricing />;
  //     break;
  //   case "/about":
  //     component = <About />;
  //     break;
  // }
  // console.log(window.location);

  return (
    <>
      <Navbar />
      {/* <div className="container">{component}</div> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
