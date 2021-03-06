import React from 'react'
import { Carousel } from 'antd'

function ImageSlider({ images }) {
    return (
        <div>
            <Carousel autoplay>
                {images.map((image, index) =>
                    <div key={index}>
                        <img className="post__image" src={`https://raw.githubusercontent.com/sonnellove/nelftube/master/${image}`} alt={`postImg-${index}`} />
                    </div>
                )}
            </Carousel>
        </div>
    )
}

export default ImageSlider
