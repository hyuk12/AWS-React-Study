/** @jsxImportSource @emotion/react*/
import React, {useEffect, useState} from 'react';
import {css} from "@emotion/react";

const Img = css`
  width: 100%;
`;


const MediaDisplay = ({ src, handleImageClick }) => {
    const isString = typeof src === 'string';
    const [mediaType, setMediaType] = useState(null);

    useEffect(() => {
        if(isString){
            if (src.match(/\.(jpeg|jpg|gif|png)$/i)) {
                setMediaType('image');
            } else if (src.match(/\.(mp4)$/i)) {
                setMediaType('video');
            } else {
                setMediaType(null);
            }
        }

    }, [src, isString]);

    return (
        <>
            {mediaType === 'image' && <img css={Img} src={src} alt="media" onClick={handleImageClick} />}
            {mediaType === 'video' && (
                <video css={Img} src={src} alt="media" onClick={handleImageClick} controls>
                    Your browser does not support the video tag.
                </video>
            )}
        </>
    );
};



export default MediaDisplay;