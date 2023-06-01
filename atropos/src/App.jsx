import "atropos/css";
import backBg from "./assets/back-side.png";
import front from "./assets/front-side.png";
import back from "./assets/back-mountain.png";
import Atropos from "atropos/react";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg">
        <h3>3D Hover Animation</h3>
        <div className="card">
          <Atropos>
            <img src={backBg} data-atropos-offset="-2" className="img1" />
            <img src={back} data-atropos-offset="-4" className="img2" />
            <img src={front} data-atropos-offset="-1" className="img3" />
          </Atropos>
        </div>
        <span className="para">~ Ajmalsha </span>
      </div>
    </>
  );
}

export default App;
