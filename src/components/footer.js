import * as React from "react";
import { Link } from "gatsby";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "@uidotdev/usehooks";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
library.add(fas)
library.add(far)




const Footer = () => {

    return (
        <footer className="bg-black text-white p-10 mt-20">
            <div className="grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-4 sm:justify-items-center">
                <div className="">
                    <div>
                        <div className="text-lg uppercase font-semibold">Kontakta</div>
                        <ul className="">
                            <li className="mt-2"><FontAwesomeIcon icon="fa-solid fa-envelope" className="pr-2" /><a href="mailto:dannesteknikhorna@gmail.com" target="blank">dannesteknikhorna@gmail.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="">
                    <div>
                        <div className="text-lg uppercase font-semibold">Medier</div>
                        <ul className="flex gap-4 mt-2 items-center">
                            <li className=""><a className="text-4xl" title="Github" href="https://github.com/Danster2020" target="blank"><FontAwesomeIcon icon="fa-brands fa-github" /></a></li>
                            <li className=""><a className="text-4xl" title="LinkedIn" href="https://se.linkedin.com/in/daniel-bleckert-b8a3a9159" target="blank"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="">

                    <address className="not-italic">
                        <div className="text-lg uppercase font-semibold">Länkar</div>
                        <ul className="">
                            <li className="mt-2 underline"><FontAwesomeIcon icon="fa-solid fa-bug" className="pr-2" /><a href="https://github.com/Danster2020/Dannes_Teknikhorna/issues/new?assignees=Danster2020&labels=bug&projects=&template=bug_report.md&title=" target="blank">Report a bug</a></li>
                            <li className="mt-2 underline"><FontAwesomeIcon icon="fa-solid fa-pen" className="pr-2" /><a className="" href="/admin">Admin login</a></li>
                        </ul>
                    </address>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
