import * as React from "react"

import PageLayout from "../components/pageLayout"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";




const UtskrifterPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: { relativeDirectory: { eq: "prints" } }) {
            nodes {
            childImageSharp {
                gatsbyImageData(width: 400)
            }
            name
            }
        }
    }
    `);

    const images = data?.allFile?.nodes;

    const page_title = "3D-utskrifter"

    return (
        <>
            {/* <Header></Header> */}

            {/* <h1 className="text-2xl md:text-3xl lg:text-4xl mt-10 text-center">3D-utskrifter</h1> */}

            <PageLayout page_title={page_title}>
                <div className="flex justify-center mt-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* <PrintsGallery></PrintsGallery> */}
                        {images.map(({ childImageSharp, name }) => (
                            <div key={name} className="image-container">
                                <GatsbyImage
                                    className="w-44 h-44 rounded-lg"
                                    objectFit="cover"
                                    image={getImage(childImageSharp)}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </PageLayout>
        </>)
}



export default UtskrifterPage
