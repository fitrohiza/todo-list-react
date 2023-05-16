import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0">
        <nav className="bg-tm-primary py-3 flex flex-wrap items-center justify-between px-6 md:px-20">
          <div className="flex items-center space-x-10">
            <img
              src="./src/assets/tm-logo.png"
              alt="TM-Logo"
              className="w-14"
            />
            <div>
              <ul className="flex text-white space-x-8 text-lg font-medium">
                <li>
                  <NavLink to="/" className="hover:text-tm-fourth">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/todo" className="hover:text-tm-fourth">
                    Todo
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-white font-medium space-x-10 text-lg">
            <button>Login</button>
            <button className="bg-tm-fourth px-5 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
