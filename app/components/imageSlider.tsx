'use client'
import { useState } from 'react'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';

interface ImageSliderProps {
    imageUrls: string[]
}
const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
    const [imageIndex, setImageIndex] = useState(0)
    const moveToPrevious = () => {
        if (imageIndex == 0) {
            setImageIndex(imageUrls.length - 1)
        } else {
            setImageIndex(imageIndex - 1)
        }
    }
    const moveToNext = () => {
        if (imageIndex == imageUrls.length - 1) {
            setImageIndex(0)
        } else {
            setImageIndex(imageIndex + 1)
        }
    }
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
                src={imageUrls[imageIndex]}
                width={700}
                height={600}
                alt="hello"
                style={{ width: '100%', display: 'block' }}
            ></Image>

            <button onClick={moveToPrevious} style={{
                all: 'unset', display: 'block', cursor: 'pointer', position: 'absolute', top: '0', bottom: '0',
                
            }}>
                <FontAwesomeIcon icon={faLeftLong} />
            </button>
            <button onClick={moveToNext} style={{ all: 'unset', cursor: 'pointer', display: 'block', top: '0', bottom: '0', position: 'absolute', right: '0' }}>
                <FontAwesomeIcon icon={faRightLong} style={{fill: 'black',
                stroke: 'white'}}/>
            </button>

        </div>
    )
}

export default ImageSlider