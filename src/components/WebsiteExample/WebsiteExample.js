import React from 'react'
import { Fragment } from 'react'
import Badge from '../Tools/Badge'
import './css/WebsiteExample.css'
import './SlickCarousel/SlickCarousel'
import SlickCarousel from './SlickCarousel/SlickCarousel'


const WebsiteExample = (props) => {

    const [fullSize] = React.useState(false)

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
    
    return(
        <Fragment>

            <h3 className={"webExample-title"}>{props.title}</h3>

            <div className="webExample-wrapper" id={props.id}>

                <div className="webExample-content">

                    <div className={`webExample-carousel-container ${fullSize ? "webExample-carousel_fullWidth" : ""}`}>
                        
                        <SlickCarousel
                            assetDir={props.assetDir}
                            imageList={props.imageList}
                        />
                        
                    </div>

                    <div className="webExample-details-container">

                        <div className="webExample-details-description">
                            {
                                props.description ? 
                                    props.description.map(paragraph => {
                                        return <p>
                                            {paragraph}
                                            <br/><br/>
                                        </p>
                                    }) : 
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                            }
                        </div>

                        <div className="webExample-details-tags">
                            <div className="webExample-details-badges">
                                {badges(props.badges.badges)}
                            </div>
                            <div className="webExample-details-other">
                                {tags(props.badges.other)}
                            </div>
                        </div>

                        <div className="webExample-details-CTA">
                            <button className="details-CTA-button CTA">
                                <a href={props.href} target="_blank" rel="noopener noreferrer">
                                    live site
                                </a>
                            </button>
                            {props.gh_link ?                             
                                <button className="CTA-secondary">
                                    <a href={props.gh_link} target="_blank" rel="noopener noreferrer">
                                        GH repository
                                    </a>
                                </button>
                            : null}
                        </div>

                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default WebsiteExample