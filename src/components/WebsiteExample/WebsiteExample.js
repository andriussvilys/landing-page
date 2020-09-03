import React from 'react'
import SlickCarousel from './SlickCarousel/SlickCarousel'
import Badge from '../Tools/Badge'
import './css/WebsiteExample.css'


const WebsiteExample = (props) => {
    const [open, toggleOpen] = React.useState(props.open)
    const badges = (list) => {
        return list.map((listItem, index) => {
            return <Badge 
                        key={`websiteExample-${props.id}-${index}`}
                        section={props.id}
                        title={listItem.title}
                        img={listItem.img}
                    />
        })
    }
    const tags = list => {
        if(list.length > 0){
            return list.map(listItem => {
                return <div 
                className={"details-badge_other"}
                key={`${props.id}-tag-${listItem}`}
                >
                    <span>{listItem}</span>
                </div>
            }) 
        }
        else return null
    }
    return(<article className={`webExample-container ${open ? "" : "webExample-hide"}`} id={props.id}>
                <div className="webExample-wrapper">
                    <div 
                    onClick={e => {
                        e.stopPropagation()

                        const parentBox = document.querySelector(`#${props.id}`)
                        const contentBox = document.querySelector(`#${props.id} .webExample-content`)
                        const height = contentBox.clientHeight
                        const titleHeight = 50
                        if(open){
                            parentBox.style = `height: ${height + titleHeight}px`
                        }
                        toggleOpen(!open)

                        // console.log(`HEIGHT : ${height}`)
                    }}
                    className="webExample-details-title">
                        <h3 
                        // className="webExample-details-title"
                        >• {props.title}</h3>

                    </div>
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
                                    {badges(props.badges.badges)}
                                    {/* {badges(["SASS", "HTML", "JS", "REACT.JS"])} */}
                                </div>
                                <div className="webExample-details-other">
                                    {tags(props.badges.other)}
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