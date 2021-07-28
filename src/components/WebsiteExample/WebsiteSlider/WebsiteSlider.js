import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import "../SlickCarousel/css/SlickCarousel.css"
import './css/WebsiteSlider.css'
import WebsiteExample from '../WebsiteExample'
import Carousel from '../../Carousel/Carousel';

const WebsiteSlider= (props) => {

    const [data, setData] = React.useState(null);
    const [dotImages, setDotImages] = React.useState(null);

    const getData = () => {
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
           .then(function(response){
            response.json().then(data => {
                setData(data)
                var tempArray = []
                data.forEach(item => {
                    tempArray.push({"src": ``})
                })
                setDotImages([])
            })
           })
    }

    const sliderSettings = {
        customPaging: function(index) {
            const url = `carousel/${data[index].assetDir}/${data[index].imageList[0]}`
            return (
            <button>
                <img src={url} alt={data[index].assetDir}/>
            </button>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    React.useEffect(() => {
        if(data ==  null)
        {
            getData()
        }
    }, []);

    React.useEffect(() => {
        console.log("DATA CHANGED")
        console.log(data)
    })

    return(
        <div className="WebsiteSlider_container" >
            {data && data.length > 0 ?
                <Carousel
                    currentSlide={0}
                    thumbnails = {props.thumbnails}
                    content = {data.map((item, index) => {
                        console.log(item)
                        return (
                            <WebsiteExample 
                                key={`websiteExample-${index}`}
                                id={item.id}
                                title={item.title}
                                assetDir={item.assetDir}
                                href={item.href}
                                imageList={item.imageList}
                                badges={item.badges}
                        />
                        )
                    })}
                    /> : null
            }
        </div>
    )
}

export default WebsiteSlider;