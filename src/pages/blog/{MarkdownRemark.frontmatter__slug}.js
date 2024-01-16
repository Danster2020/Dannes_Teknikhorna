import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// needed to use font awsome icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const featuredImg = getImage("../../media/images/" + frontmatter.image);

  // const test = "../../media/images/" + frontmatter.image

  return (
    <>
      <GatsbyImage image={featuredImg} alt="fail" />
      {/* <StaticImage className="w-52 h-52 rounded-full" objectFit="cover" src={"../../media/images/screenshot_7.png"} alt="fail2" /> */}
      <h1 className="mt-28 mb-2 text-3xl font-medium">{frontmatter.title}</h1>

      <article className="prose prose-invert mx-8">
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  )
}


export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
        description
      }
    }
  }
`
