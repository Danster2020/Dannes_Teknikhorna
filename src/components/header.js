import * as React from "react";
import { Link } from "gatsby";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "@uidotdev/usehooks";

export const Links = () => {
  return (
    <>
      <li className="">
        <Link to="/" activeClassName="">Hem</Link>
      </li>
      <li className="">
        <Link to="/projekt" activeClassName="">Projekt</Link>
      </li>
      <li className="">
        <Link to="/utskrifter" activeClassName="">3D-utskrifter</Link>
      </li>
      <li className="">
        <Link to="/om" activeClassName="">Om</Link>
      </li>
    </>
  );
};

export const MobileNav = () => {
  const [isOpen, setOpen] = React.useState(false);

  const ref = useClickAway(() => {
    setOpen(false);
  });

  return (
    <>
      <div className="fixed top-0 z-10 lg:hidden w-full h-16 backdrop-blur-lg bg-def_purple_1/70"></div>
      <div className="fixed top-4 z-20 mb lg:hidden flex justify-between items-center">
        <div className="">
          <Link className="text-3xl font-bold ml-4 text-violet-600" to="/">DTH</Link>
        </div>
        <div className="fixed right-2 lg:hidden text-white text-xl">
          <div ref={ref} className="flex justify-end">
            <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
            {isOpen && (
              <AnimatePresence>
                <motion.div
                  key="modal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="fixed shadow-4xl right-0 top-[3.5rem] pl-10 pr-24 py-10 bg-gradient-to-r from-[#3B2468]  to-def_purple_2 rounded-l-lg">
                    <ul className="flex flex-col space-y-4">
                      <Links />
                    </ul>
                  </div>
                </motion.div>

              </AnimatePresence>
            )}
          </div>
        </div>
      </div>

    </>
  );
};

export const DesktopNav = () => {
  return (
    <>
      <div className="hidden lg:flex justify-between items-center">
        <div className="">
          <Link className="text-3xl font-bold ml-10 mt-10 text-violet-600" to="/">DTH</Link>
        </div>
        <ul className="flex space-x-6 justify-end text-xl font-light mr-10 mt-10 mb-10 text-white">
          <Links />
        </ul>
      </div>
    </>
  );
};

const Header = ({ siteTitle }) => {

  return (
    <header>
      <nav>
        <MobileNav />
        <DesktopNav></DesktopNav>
      </nav>
    </header>
  );
};

export default Header;
