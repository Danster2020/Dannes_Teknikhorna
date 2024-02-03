import React from "react"
import Header from "../components/header"
import Seo from "../components/seo"

let this_page_title = "";

function pageLayout({ children, page_title }) {
    this_page_title = page_title;

    return (
        <>
            <Header></Header>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mt-10 mb-20 text-center">{page_title}</h1>
            {children}
        </>
    )

    
}

export const Head = () => <Seo title={this_page_title} />
export default pageLayout