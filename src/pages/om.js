import * as React from "react"

import PageLayout from "../components/pageLayout"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";


const OmPage = () => {


    const page_title = "Om"

    return (
        <>
            <PageLayout page_title={page_title}>
                <div className="flex flex-col items-center w-full min-h-screen">
                    <div className="prose prose-invert">
                        <p>Webbplats skapad för att visa upp olika projekt. </p>
                        <p>Webbplatsen är skapad med hjälp av:</p>
                        <ul>
                            <li>Gatsby</li>
                            <li>Tailwind</li>
                            <li>Netlify</li>
                        </ul>
                    </div>
                </div>
            </PageLayout>
        </>)
}



export default OmPage
