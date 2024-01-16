import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
import Seo from "../components/seo"

const IndexPage = () => (
  <>

<Header/>

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

    <section className="flex flex-col items-center pb-10 bg-black text-white">
      <div className="mt-10 bg-red-800 rounded-lg rotate-6">
        <StaticImage className="w-52 h-64 rounded-lg" objectFit="cover" src="../media/images/peakey.jpg" alt="" />
      </div>
      <div className=" text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mx-10 mt-5">Ekonomiappen</h2>
        <p className="mx-20 mt-5 text-neutral-400 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </p>
        <Link to="/">
          <div className="inline-block px-24 py-2 mt-10 text-white border-2 bg-def_purple_2 border-def_purple_2 rounded-full">
            Till projekt
          </div>
        </Link>
      </div>
    </section>

    <section className="flex flex-col items-center pb-10 bg-def_purple_1 text-white">
      <div className="mt-10 bg-red-800 rounded-lg rotate-6">
        <StaticImage className="w-52 h-64 rounded-lg" objectFit="cover" src="../media/images/peakey.jpg" alt="" />
      </div>
      <div className=" text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mx-10 mt-5">Ekonomiappen</h2>
        <p className="mx-20 mt-5 text-neutral-400 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </p>
        <Link to="/">
          <div className="inline-block px-24 py-2 mt-10 text-white border-2 bg-def_purple_2 border-def_purple_2 rounded-full">
            Till projekt
          </div>
        </Link>
      </div>
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
