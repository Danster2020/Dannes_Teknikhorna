import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Layout>

    </Layout>

    <div className="ml-20">
      <h1 className="inline-block text-6xl mt-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B2468] via-def_purple_2 to-[#3B2468]">
        Välkommen till min <br></br> teknikhörna!
      </h1>
      <p className="text-4xl mt-12 text-white">
        Här hittar du allt från mobilstyrda <br></br> lampor till 3D-printade dörrhandtag!
      </p>
      <Link to="/">
        <div className="inline-block px-24 py-2 mt-12 text-white border-2 border-def_purple_2 rounded-full">
          Mina projekt
        </div>
      </Link>
    </div>
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
