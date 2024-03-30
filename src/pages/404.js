import * as React from "react"
import { Link } from 'gatsby';

import Seo from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"

const NotFoundPage = () => (
    <>
    <Header></Header>
        <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-5xl mt-40">404: Not Found</h1>
            <p className="text-lg mt-10">Sidan kunde tyvärr inte hittas.</p>
            <Link className="bg-def_purple_2 text-white px-8 py-4 mt-10 rounded-lg" to="/">Gå till Hem</Link>
        </div>
    <Footer></Footer>
    </>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
