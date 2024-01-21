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

      <div className="bg-black bg-opacity-50">
        <div className="flex flex-col items-center mb-10">
          <div className="mx-10">
            <h1 className="mt-10 mb-5 text-3xl md:text-4xl lg:text-5xl font-medium">{frontmatter.title}</h1>
            <p className="mb-5 font-light text-lg">{frontmatter.description}</p>
            <span className="inline-block px-4 py-1 bg-blue-950 border-2 border-blue-900 text-blue-300 rounded-full">{frontmatter?.published}</span>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col items-center ">
            <GatsbyImage className="max-w-lg mb-10 mx-10 rounded-lg" image={featuredImg} alt="" />
            <div className="flex flex-col items-center w-full bg-def_purple_3">
              <article className="post_article prose prose-invert mx-8 md:mx-0 p-10 text-gray-100">
                <div className="post_article font-light" dangerouslySetInnerHTML={{ __html: html }} />
              </article>
            </div>
          </div>
        </div>
      </div>


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
            gatsbyImageData(width: 1000)
          }
        }
        description
        published(formatString: "YYYY-MM-DD")
      }
    }
  }
`;

