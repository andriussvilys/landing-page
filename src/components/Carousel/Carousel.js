import React, { useEffect, useState } from 'react'
import { useGesture } from 'react-use-gesture'

import styles from './css/index.module.scss'

const Carousel = props => {
    const containerRef = React.useRef()
    const dot_active = React.useRef()
    const dot_container = React.useRef()
    const dot_list = React.useRef()
    const slideContainerRef = React.useRef()
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

            const dot_width = dot_active.current.getBoundingClientRect().width;
            const left = ((slidePosition.currentSlide) * ( dot_width )) - (dot_width / 2) 
            console.log(`left: ${left}`)
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
                            // style={{
                            //     transform: `translateX(${slidePosition.currentTransform}%)`
                            // }}
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
                        className={styles.slide}
                        key={`slideContent-${index}`}
                        style={{width: `${100 / props.content.length}%`}}
                    >                    
                        {item}
                    </div>
                )
            })
    }
    
    const moveHandler = (state, options) => {

        const containerWidth = containerRef.current.clientWidth;
        const slideCount = props.content.length
        const slideWidth = 100 / slideCount

        let  transform = slidePosition.currentTransform + ((state.delta[0] * options.direction * options.moveSpeed * 100 / containerWidth) / slideCount)
        transform = Math.round((transform + Number.EPSILON) * 10) / 10

        const margin = (slideWidth / 3)

        if(transform > 0){
            transform = 0
        }
        if(transform < -100 + slideWidth){
            transform = -100 + slideWidth
        }
        // if(transform > margin){

        //     transform = 0
        // }
        if(transform < -100 + margin){
            transform = -100 + slideWidth
        }

        let index = Math.abs(Math.round(transform / slideWidth))
        if(index > slideCount -1){
            index = slideCount - 1
        }

        return setSlidePosition({ 
            ...slidePosition,  
            currentSlide: index,
            currentTransform: transform,
            smooth: false
        })
    }
    const moveEndHandler = (state) => {

        const slideCount = props.content.length
        const slideWidth = 100 / slideCount

        let currentTransform = slidePosition.currentTransform

        let index = Math.abs(Math.round(currentTransform / slideWidth))



        if(index > slideCount -1){
            index = slideCount - 1
        }

        console.log("move end")

        slideTo(index)
    }
    const genericOptions = {
        domTarget: slideContainerRef,
        filterTaps: true,
        lockDirection: true,
        eventOptions: {
            passive: false
        }
    }
    const bind = useGesture(
        {
            // onWheelStart: state => {
            //     state.event.preventDefault()
            // },
            // onWheel: (state) => {

            //     state.event.preventDefault()

            //     if(props.content.length < 2){
            //         return
            //     }

            //     moveHandler(state, {moveSpeed: 2, direction: -1})

            // },
            // onWheelEnd: state => {
            //     state.event.preventDefault()
            //     moveEndHandler(state)
            // },
        },
        {...genericOptions},
    )

    useEffect(() => {
        slideTo(props.currentSlide)
    }, [props.counter])

    useEffect(() => {
        slideTo_dot()
    }, [slidePosition])

    useEffect(bind, [bind])


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