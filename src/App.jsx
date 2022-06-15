import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Me from "./me.png";

function App() {
  return (
    <>
      <div>
        <Navbar />

        <div class="container mt-5">
          <div class="row justify-center">
            <div class="col-12-xs col-5-md">
              <h2>
                <div class="font-xxl text-gradient">Lasse Vestergaard</div>
              </h2>
              <p class="text-gray mt-2 mb-3">
                En høj gifraf med grimme sol briller.
              </p>
              <a
                href=""
                class="btn bg-navbar text-white text-hover-gray bs-hover-none ml-2"
              >
                About Me
              </a>
              <a
                href=""
                class="btn bg-middleBlue text-white bs-hover-none ml-1 mb-2"
              >
                Contact Me
              </a>
            </div>
            <div class="col-12-xs col-5-md">
              <img src={Me} alt="Me" width="65%" height="65%" class="br" />
            </div>
          </div>
        </div>

        <hr class="" />
      </div>
    </>
  );
}

export default App;
