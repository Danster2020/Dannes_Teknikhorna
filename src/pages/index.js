import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
import Seo from "../components/seo"
import FeaturedPosts from "../components/featuredPosts"
import BoxLink from "../components/boxLink"
import Footer from "../components/footer"

import { motion } from "framer-motion"

const scale_bounce = {
  scale: 1.2,
  transition: {
    duration: 0.3,
    type: "spring",
    stiffness: 260,
    damping: 20
  },
}

const tap_scale = { scale: 0.9 }

const IndexPage = () => (
  <>

    <Header />

    <section className="flex gap-x-60 pb-60 pt-32 md:pt-40 2xl:pt-20 justify-center lg:min-h-fit">
      <div className="flex flex-col ml-10 lg:ml-20 mt-14">

        <motion.h1 initial={{ opacity: 0 }} className="inline-block text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B2468] via-def_purple_2 to-[#3B2468]"
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.5,
            },
          }}>
          Välkommen till min <br></br> teknikhörna!
        </motion.h1>
        <p className="text-2xl md:text-3xl lg:text-4xl mt-12 text-white">
          Här hittar du allt från mobilstyrda <br></br> lampor till 3D-printade dörrhandtag!
        </p>
        <div>
          <Link to="/projekt">
            <div className="inline-block px-24 py-2 mt-12 text-white border-2 border-def_purple_2 rounded-full">
              Mina projekt
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex flex-col justify-center mr-40">
        <div className=" border-4 border-[#2D8FA9] rounded-full">
          <StaticImage className="w-52 h-52 rounded-full" objectFit="cover" src="../media/images/daniel_prof.png" alt="" />
        </div>
      </div>
    </section>

    <FeaturedPosts></FeaturedPosts>



    <section className="flex flex-col md:flex-row items-center md:justify-center space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20 py-40 text-white">
      <motion.div whileHover={scale_bounce} whileTap={tap_scale}>
        <BoxLink title="3D-utskrifter" img_name="3d_prints" page_url="/utskrifter"></BoxLink>
      </motion.div>
      <motion.div whileHover={scale_bounce} whileTap={tap_scale}>
        <BoxLink title="Projekt" img_name="projekt" page_url="/projekt"></BoxLink>
      </motion.div>
      <motion.div whileHover={scale_bounce} whileTap={tap_scale}>
        <BoxLink title="Om" img_name="daniel_prof" page_url="/om"></BoxLink>
      </motion.div>
    </section>



    <Footer />


  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
