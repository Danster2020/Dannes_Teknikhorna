import * as React from "react"

import PageLayout from "../components/pageLayout"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from 'gatsby';
import { motion } from "framer-motion"



const ProjektPage = () => {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2
      }
    }
  };

  const scale_bounce = {
    scale: 1.1,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 260,
      damping: 20
    },
  }



  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    },
  };


  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {frontmatter: {published: DESC}}) {
        edges {
          node {
            id
            html
            frontmatter {
              slug
              title
              image {
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
              description
            }
          }
        }
      }
    }
    `);

  const posts = data.allMarkdownRemark.edges;

  const page_title = "Projekt"

  return (
    <>
      <PageLayout page_title={page_title}>
        <div className="flex justify-center">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-10 md:mx-10"
            variants={container}
            initial="hidden"
            animate="visible">
            {posts.map(({ node }, index) => (
              <motion.div key={index} to={"/blog/" + node.frontmatter.slug} className="max-w-md" variants={item} whileHover={scale_bounce}>
                <Link key={index} to={"/blog/" + node.frontmatter.slug} >
                  <div key={node.id} className="flex flex-col bg-[#2D8FA9] bg-opacity-10 p-4 border-2 border-gray-700 rounded-2xl">
                    <h2 className="mb-4 text-lg md:text-xl lg:text-2xl text-[#DDF5FD] font-bold">{node.frontmatter.title}</h2>
                    <span className="mb-8 font-light">{node.frontmatter.description}</span>
                    <GatsbyImage className="h-56 rounded-lg" objectFit="cover" image={getImage(node.frontmatter.image)} alt="" />
                  </div>
                </Link>
              </motion.div>

            ))}
          </motion.div>


        </div>
      </PageLayout>
    </>
  )
}

export default ProjektPage
