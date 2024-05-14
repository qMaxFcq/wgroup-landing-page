import { useState } from 'react';
import { Link } from 'react-scroll';
import WFW from '../pic/w_f_w.png';

export default function NavbarService() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <header className="fixed p-2 max-sm:p-5 bg-white flex flex-wrap items-center inset-x-0 top-0 z-50 bg-white/90 max-md:bg-white/95">
        <div className="flex-1 flex justify-between items-center">
          {/* <FaW className="text-2xl" /> */}
          <img src={WFW} className="max-w-[50px]" />
        </div>

        <label
          htmlFor="menu-toggle"
          className="pointer-cursor md:hidden block ease-in "
        >
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input
          className="hidden"
          type="checkbox"
          id="menu-toggle"
          checked={isMenuOpen}
          onChange={toggleMenu}
        />

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:w-auto w-full transition-transform duration-500 ease-in-out transform animate-in fade-in text-center`}
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base font-light text-black pt-4 md:pt-0">
              <Link
                to="banner"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                <a
                  className="md:p-4 py-3 px-0 block hover:bg-slate-100 rounded-lg"
                  href="#"
                >
                  Home
                </a>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                <a
                  className="md:p-4 py-3 px-0 block hover:bg-slate-100 rounded-lg"
                  href="#"
                >
                  About
                </a>
              </Link>
              <Link
                to="companyDNA"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                <a
                  className="md:p-4 py-3 px-0 block hover:bg-slate-100 rounded-lg"
                  href="#"
                >
                  DNA
                </a>
              </Link>
              <Link
                to="product"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                <a
                  className="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:bg-slate-100 rounded-lg"
                  href="#"
                >
                  Product
                </a>
              </Link>
              <Link
                to="footer"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                <a
                  className="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:bg-slate-100 rounded-lg"
                  href="#"
                >
                  Contact
                </a>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
