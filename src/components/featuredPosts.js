// FilteredPosts.js
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

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
                gatsbyImageData(width: 200)
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
                <section key={node.id} className={`flex flex-col items-center pb-10 text-white ${index % 2 === 0 ? 'bg-black' : 'bg-def_purple_1'}`}>
                    <div className="mt-10 rounded-lg rotate-6">
                        <GatsbyImage className="w-52 h-64 rounded-lg" objectFit="cover" image={getImage(node.frontmatter.image)} alt="" />
                    </div>
                    <div className=" text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl mx-10 mt-5">{node.frontmatter.title}</h2>
                        <p className="mx-20 mt-5 text-neutral-400 max-w-md">{node.frontmatter.description}</p>
                        <Link to={"/blog/" + node.frontmatter.slug}>
                            <div className="inline-block px-24 py-2 mt-10 text-white border-2 bg-def_purple_2 border-def_purple_2 rounded-full">
                                Till projekt
                            </div>
                        </Link>
                    </div>
                </section>
            ))}
        </>
    );
};

export default FeaturedPosts;
