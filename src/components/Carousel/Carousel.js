import React, { useEffect, useState } from 'react'
import { useGesture } from 'react-use-gesture'

import styles from './css/index.module.scss'

const Carousel = props => {

    const containerRef = React.useRef()
    const dot_active = React.useRef()
    const dot_container = React.useRef()
    const dot_list = React.useRef()
    const slideContainerRef = React.useRef()
    const activeSlideRef = React.useRef()


    const [mobile, setMobile] = useState(window.document.body.getBoundingClientRect().width > 720 ? false : true)
    function checkDocumentSize() {
        setMobile(window.document.body.getBoundingClientRect().width > 720 ? false : true);
    }
    
    window.onresize = checkDocumentSize;

    const [slidePosition, setSlidePosition] = useState({
        file: props.file,
        swiped: false,
        smooth: true,
        currentSlide: props.currentSlide,
        prevTransform: props.initialTransform,
        currentTransform: props.initialTransform
    })

    const slideTo_dot = () => {
        if(dot_active && dot_active.current){

            const dot_width = dot_active.current.offsetWidth;
            const left = ((slidePosition.currentSlide) * ( dot_width )) - (dot_width / 2) 

            dot_container.current.scroll(left, 0);

        }
    }

    const slideTo = (index) => {
        let slideToIndex = index;

        if(slideToIndex < 0){
            slideToIndex = props.content.length - 1; 
        }
        else if(slideToIndex > props.content.length - 1){
            slideToIndex = 0;
        }

        const newTransfrom = -((100 / props.content.length) * slideToIndex)

        let nextImage = null;
       
        setSlidePosition({
            ...slidePosition,
            smooth: true,
            file: nextImage,
            currentSlide: slideToIndex,
            currentTransform: newTransfrom,
            prevTransform: newTransfrom,
        })
    }

    const dots = (imageList) => {
        const dots = imageList.map((image, index) => {
            return <li 
                    onClick={() => {
                        slideTo(index)
                        // setTimeout(() => {
                        //     slideContainerRef.current.scrollIntoView(true);
                        // }, 800);
                    }}
                    ref={index === slidePosition.currentSlide ? dot_active : null}
                    key={`${image}-${index}`} 
                    className={`${styles.dot} ${index === slidePosition.currentSlide ? styles.dot_active : ""}`}
                >
                    <img 
                        src={image} 
                        alt={`Click this thumbnail to scroll to slide ${index}`} 
                    />
                </li>
        })
        return (
            <div
                className={styles.dotContainer}
            >
                {arrowPrev()}
                <div 
                    className={styles.dotWrapper}
                    ref={dot_container} 
                >
                    {imageList.length < 2 ? null : 
                        <ul 
                            ref={dot_list} 
                            className={styles.dotList}
                        >
                            {dots}
                        </ul>}
                </div>
                {arrowNext()}
            </div>
        )
    }

    const arrowNext = () => {
        if(mobile)return
        if(props.content && props.content.length < 2){
            return
        }
        return <button 
            className={styles.arrowNext}
            onClick={() => {
                slideTo(slidePosition.currentSlide + 1)
            }}
        ></button>
    }

    const arrowPrev = () => {

        if(mobile)return

        if(props.content && props.content.length < 2){
            return
        }

        return <button 
            className={styles.arrowPrev}
            onClick={() => {
                slideTo(slidePosition.currentSlide - 1)
            }}
        ></button>
    }

    const renderContent = (content) => {
        if(content && content.length > 0)
           return content.map((item, index) => {
                return (
                    <div
                        id={`SLIDE-${index}`}
                        ref={index === slidePosition.currentSlide ? activeSlideRef : null}
                        className={styles.slide}
                        key={`slideContent-${index}`}
                        style={{width: `${100 / props.content.length}%`}}
                    >                    
                        {item}
                    </div>
                )
            })
    }

    const resizeContainer = () => {
        if(activeSlideRef && activeSlideRef.current)
        {
            setTimeout(() => {

                const slideHeight = activeSlideRef.current.offsetHeight;
                slideContainerRef.current.style.height = `${slideHeight + 2}px`

            }, 500);
        }
    }

    window.addEventListener('resize', () => {
            resizeContainer()
            slideTo_dot()
    });


    useEffect(() => {

        resizeContainer();
        slideTo_dot()

    }, [slidePosition])

    return(
            <div 
                className={styles.carousel}
                ref={containerRef}
            >
                {dots(props.thumbnails)}
                <div 
                    id="container_main"
                    className={styles.container}
                >
                    <div 
                        id={"slideContainer"}
                        className={`${styles.slideContainer} ${slidePosition.smooth ? styles.smoothSlide : ""}`}
                        ref={slideContainerRef}
                        style={{
                            width: `${100 * props.content.length}%`,
                            transform: `translateX(${slidePosition.currentTransform}%)`
                        }}
                    >
                        {renderContent(props.content)}
                    </div>
                </div>
        </div>
    )
}

export default Carousel