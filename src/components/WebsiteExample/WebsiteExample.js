import React from 'react'
import SlickCarousel from './SlickCarousel/SlickCarousel'
import './css/WebsiteExample.css'

const WebsiteExample = (props) => {
    const badges = (list) => {
        return list.map((listItem) => {
            return <div 
                className="details-badge"
                >
                <span>{listItem}</span>
            </div>
        })
    }
    const tags = list => {
        return list.map(listItem => {
            return <div 
                className={"details-badge_other"}
            >
                <span>{listItem}</span>
            </div>
        }) 
    }
    return(<article className="webExample-container">
                <div className="webExample-wrapper">
                    <h3 className="webExample-details-title">{props.title}</h3>
                    <div className="webExample-content">

                        <div className="webExample-carousel-container">
                            <SlickCarousel 
                                assetDir={props.assetDir}
                                imageList={props.imageList}
                            />
                            <div className="webExample-carousel-sizeToggle"
                                onClick={e => {
                                    e.target.parentNode.classList.toggle("webExample-carousel_fullWidth")
                                }}
                            ></div>
                        </div>
                        <div className="webExample-details-container">
                            <div className="webExample-details-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </div>
                            <div className="webExample-details-tags">
                                <div className="webExample-details-badges">
                                    {badges(["SASS", "HTML", "JS", "REACT.JS"])}
                                </div>
                                <div className="webExample-details-other">
                                    {tags(["React-slick", "node.js", "mongoDB"])}
                                </div>
                            </div>
                            <div className="webExample-details-CTA">
                                <button className="details-CTA-button"><a href={props.href} target="_blank">CLICK TO VISIT</a></button>
                            </div>
                        </div>
                        
                    </div>
                </div>   
            </article>)
}

export default WebsiteExample