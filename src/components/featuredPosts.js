// FilteredPosts.js
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
import { motion } from "framer-motion"

const FeaturedPosts = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { featured: { ne: -1 } } }
    ) {
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

  return (
    <>
      {posts.map(({ node }, index) => (
        <section key={node.id} className={` ${index % 2 === 0 ? 'bg-neutral-950' : 'bg-def_purple_3'}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1.5,
              },
            }} >
            <div className={`flex flex-col items-center py-44 text-white`}>
              <div className=" rounded-lg rotate-6">
                <GatsbyImage className="w-52 h-64 rounded-lg" objectFit="cover" image={getImage(node.frontmatter.image)} alt="" />
              </div>
              <div className=" text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl mx-10 mt-5">{node.frontmatter.title}</h2>
                <p className="mx-20 mt-5 text-neutral-300 max-w-md">{node.frontmatter.description}</p>
                <Link to={"/blog/" + node.frontmatter.slug}>
                  <div className="inline-block px-24 py-2 mt-10 text-white border-2 bg-def_purple_2 border-def_purple_2 rounded-full">
                    Till projektet
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>

        </section>
      ))}
    </>
  );
};

export default FeaturedPosts;