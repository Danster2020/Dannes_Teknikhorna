import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
import Seo from "../components/seo"
import FeaturedPosts from "../components/featuredPosts"
import BoxLink from "../components/boxLink"

const IndexPage = () => (
  <>

    <Header />

    <div className="flex mb-20">
      <div className="ml-10 lg:ml-20">
        <h1 className="inline-block text-4xl md:text-5xl lg:text-6xl mt-24 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B2468] via-def_purple_2 to-[#3B2468]">
          Välkommen till min <br></br> teknikhörna!
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl mt-12 text-white">
          Här hittar du allt från mobilstyrda <br></br> lampor till 3D-printade dörrhandtag!
        </p>
        <Link to="/">
          <div className="inline-block px-24 py-2 mt-12 text-white border-2 border-def_purple_2 rounded-full">
            Mina projekt
          </div>
        </Link>
      </div>
      <div className="hidden lg:flex flex-grow items-center justify-end mr-40">
        <div className="border-4 border-[#2D8FA9] rounded-full">
          <StaticImage className="w-52 h-52 rounded-full" objectFit="cover" src="../media/images/daniel_prof.png" alt="" />
        </div>
      </div>
    </div>

    <FeaturedPosts></FeaturedPosts>

    <section className="flex flex-col md:flex-row items-center md:justify-center space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20 py-40 text-white">
      <BoxLink title="3D-utskrifter" img_name="3d_prints" page_url="/3d_utskifter"></BoxLink>
      <BoxLink title="Projekt" img_name="projekt" page_url="/projekt"></BoxLink>
      <BoxLink title="Om" img_name="daniel_prof" page_url="/om"></BoxLink>
    </section>

  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
