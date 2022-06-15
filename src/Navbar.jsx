import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav class="navbar h-14 bs-md bg-navbar">
        <h1 class="site-title text-white">Lasse Vestergaard</h1>
        <i
          class="fa-solid fa-bars display-none text-white text-hover-gray-light-4 tr-sm font-lg c-pointer"
          id="hamburger-icon"
          onClick={() => setIsOpen(!isOpen)}
        ></i>
        <ul class="display-flex text-gray" id="ul-list">
          <li>
            <a class="ml-2 text-hover-white tr-sm active" href="#">
              About Me
            </a>
          </li>
          <li>
            <a class="ml-2 text-hover-white tr-sm" href="#">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <ul
          class="display-flex p-2 m-auto justify-center mt-2 text-gray"
          id="ul-closeBigscreen"
        >
          <li>
            <a class="ml-2 text-white font-bold tr-sm active" href="#about-me">
              About Me
            </a>
          </li>
          <li>
            <a class="ml-2 text-hover-white tr-sm" href="#">
              Contact Me
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
