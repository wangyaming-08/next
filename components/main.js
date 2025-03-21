import React from 'react'
import Image from "next/image";
import PropTypes from 'prop-types';

function MainComponent({ imgSrc, text }) {
    return (
        <div className="h-screen relative">
            <div className="absolute inset-0 -z-10">
                <Image src={imgSrc} fill className="object-cover" alt="" />
            </div>
            <div className="flex justify-center pt-88">
                <h1 className=" text-white text-6xl ">{text}</h1>
            </div>
        </div>
    )
}
MainComponent.propTypes = {
    imgSrc: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired
}
export default MainComponent
