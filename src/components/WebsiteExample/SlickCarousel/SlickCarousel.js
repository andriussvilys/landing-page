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
        // className: "slider variable-width",
        // variableWidth: true
        
        // vertical: true,
        // verticalSwiping: true,
        // adaptiveHeight: true
      };
    return(
        <Slider {...settings}>
            {
                props.imageList.map(fileName => {
                    return <img src={`carousel/${props.assetDir}/${fileName}`} alt={fileName} />
            })
            }
        </Slider>
    )
}

export default SlickCarousel