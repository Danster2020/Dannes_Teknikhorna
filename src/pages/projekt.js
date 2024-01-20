import * as React from "react"

import PageLayout from "../components/pageLayout"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from 'gatsby';



const ProjektPage = () => {

    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {posts.map(({ node }, index) => (
                            <Link to={"/blog/" + node.frontmatter.slug} className="max-w-md mx-10">
                                <div key={node.id} className="flex flex-col bg-[#2D8FA9] bg-opacity-10 p-4 border-2 border-gray-700 rounded-2xl">
                                    <span className="mb-6 text-md md:text-lg lg:text-xl text-[#DDF5FD] font-bold">{node.frontmatter.title}</span>
                                    <span className="mb-8 font-light">{node.frontmatter.description}</span>
                                    <GatsbyImage className="h-56 rounded-lg" objectFit="cover" image={getImage(node.frontmatter.image)} alt="" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </PageLayout>
        </>)
}

{/* <div className="rounded-lg">
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
</div> */}


export default ProjektPage
