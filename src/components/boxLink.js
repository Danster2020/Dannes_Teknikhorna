import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const BoxLink = ({ title, img_name, page_url }) => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 1000)
        }
        name
      }
    }
  }
  `);

  const image = data.allFile.nodes.find((node) => node.name === img_name);

  return (
    <div className="">
      <div className="rounded-3xl bg-neutral-700">
        <Link to={page_url}>
            <GatsbyImage
              className="w-52 h-52 rounded-3xl"
              objectFit="cover"
              image={getImage(image)}
              alt=""
            />
        </Link>
      </div>
      <div className="mt-5 text-center font-light">
        <span className="text-xl md:text-2xl lg:text-3xl mt-5">{title}</span>
      </div>
    </div>
  );
};

export default BoxLink;
