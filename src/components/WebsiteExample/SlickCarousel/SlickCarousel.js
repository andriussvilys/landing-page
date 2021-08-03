import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./css/SlickCarousel.css"

const SlickCarousel = props => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoading: "progressive",
      };

    return(
        <Slider {...settings}>
            {
                props.imageList.map(fileName => {
                    return <img 
                        src={`carousel/${props.assetDir}/${fileName}`} 
                        alt={fileName} 
                        key={`slickCarousel-${fileName}`}
                    />
                })
            }
        </Slider>
    )
}

export default SlickCarousel