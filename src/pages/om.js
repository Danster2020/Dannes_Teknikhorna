import * as React from "react"

import PageLayout from "../components/pageLayout"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";


const OmPage = () => {


    const page_title = "Om"

    return (
        <>
            <PageLayout page_title={page_title}>
                <div>test</div>
            </PageLayout>
        </>)
}



export default OmPage
