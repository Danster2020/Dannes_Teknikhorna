import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Header from "../../components/header"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const featuredImg = getImage(frontmatter.image)

  return (
    <>

      <Header></Header>

      <GatsbyImage image={featuredImg} alt="" />
      <h1 className="mt-28 mb-2 text-3xl font-medium">{frontmatter.title}</h1>

      <article className="prose prose-invert mx-8 text-gray-100">
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
        image {
          childImageSharp {
            gatsbyImageData(width: 200)
          }
        }
        description
      }
    }
  }
`;

