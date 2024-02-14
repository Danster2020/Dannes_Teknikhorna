// import * as React from "react"
import React, { useState } from 'react';

import PageLayout from "../components/pageLayout"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { motion } from "framer-motion"


const UtskrifterPage = () => {
    const data = useStaticQuery(graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "prints"}}, sort: {name: DESC}) {
          nodes {
            childImageSharp {
              gatsbyImageData
            }
            name
          }
        }
      }
    `);

    const [modalWindow, setModalWindow] = useState(false)
    const [modalImg, setModalImg] = useState(null)

    const handleModalOpen = () => {
        setModalWindow(true);
    }

    const handleModalClose = () => {
        setModalWindow(false);
    }

    const images = data?.allFile?.nodes;

    const page_title = "3D-utskrifter"

    const Modal = () => {
        return (
            <div className="fixed top-0 left-0 z-20 w-full h-screen bg-black bg-opacity-80" onClick={() => { handleModalClose() }}>
                <div className="relative flex flex-col items-center justify-center h-full mx-4">
                    <div className='flex max-w-xl w-full'>
                        <button className='inline-block mb-4 px-4 py-1 bg-def_purple_1 text-white border-2 border-def_purple_2 rounded-full' onClick={() => { handleModalClose() }}>Stäng</button>
                    </div>
                    <GatsbyImage
                        className="max-w-xl z-30 max-h-[30rem] md:max-h-[50rem] rounded-lg"
                        objectFit="cover"
                        image={getImage(modalImg)}
                        alt=""
                    />
                </div>
            </div>
        )
    }

    return (
        <>

            <PageLayout page_title={page_title}>
                {modalWindow && <Modal></Modal>}
                <div className="flex justify-center mt-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map(({ childImageSharp, name }) => (
                            <button key={name} className="image-container" onClick={() => { handleModalOpen(); setModalImg(childImageSharp); }}>
                                <GatsbyImage
                                    className="w-44 h-44 rounded-lg"
                                    objectFit="cover"
                                    image={getImage(childImageSharp)}
                                    alt={childImageSharp.gatsbyImageData.images.fallback.src}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </PageLayout>
        </>)
}



export default UtskrifterPage
