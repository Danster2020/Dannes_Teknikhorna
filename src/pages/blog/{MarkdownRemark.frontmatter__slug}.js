import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Header from "../../components/header"
import Footer from "../../components/footer"

import { motion } from "framer-motion"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
library.add(fas)
library.add(far)


export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const featuredImg = getImage(frontmatter.image)

  return (
    <>

      <Header></Header>

      <div className="bg-black bg-opacity-50">
        <motion.div initial={{ opacity: 0, scale: 0.7 }} whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
          },
        }}>
          <div className="flex flex-col items-center mb-10">
            <div className="font-outfit mx-10">
              <h1 className="mt-10 mb-5 text-3xl md:text-4xl lg:text-5xl font-medium">{frontmatter.title}</h1>
              <p className="mb-5 font-light text-lg">{frontmatter.description}</p>
              <span className="inline-block px-4 py-1 bg-blue-950 border-2 border-blue-900 text-blue-300 rounded-full"><FontAwesomeIcon icon="fa-solid fa-calendar-day" className="pr-2" />{frontmatter?.published}</span>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col items-center ">
              <GatsbyImage className="max-w-lg mb-10 mx-10 rounded-lg" image={featuredImg} alt="" />
            </div>
          </div>
        </motion.div>
      </div>


      <div className="font-outfit flex flex-col items-center bg-neutral-900">
        <article className="font-outfit prose prose-invert md:prose-lg lg:prose-xl prose-headings:text-purple-400 prose-a:text-blue-400 mx-8 md:mx-0 p-10 text-gray-100 post_article prose-img:block prose-img:mx-4 prose-img:rounded-lg">
          <div className="" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </div>

      <Footer></Footer>

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

