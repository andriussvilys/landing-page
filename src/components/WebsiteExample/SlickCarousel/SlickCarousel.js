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
                props.imageList && props.imageList.length > 0 ?
                props.imageList.map(fileName => {
                    return <img 
                        src={`carousel/${props.assetDir}/${fileName}`} 
                        alt={fileName} 
                        key={`slickCarousel-${fileName}`}
                    />
                }) : <div style={{height: "50%", width: "50%", backgroundColor: "yellow"}}></div>
            }
        </Slider>
    )
}

export default SlickCarousel