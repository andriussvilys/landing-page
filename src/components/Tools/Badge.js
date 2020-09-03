import React from 'react'

const Badge = props => {
    if(!props.img){
        return <div 
        // className={"details-badge_other"}
        className="details-badge"
        key={`${props.section}-badge-${props.title}`}
        >
            <span>{props.title}</span>
        </div>
    }
    if(!props.title){
        return <div 
        className="details-badge"
        key={`${props.section}-badge-${props.title}`}
        >
        <img className="details-badge-fullWidth" src={`badges/${props.img}`} alt={props.img}/>
    </div>                            
    }
    return <div 
        className="details-badge"
        key={`${props.section}-badge-${props.title}`}
        >
        <img src={`badges/${props.img}`} alt={props.title}/>
        <span>{props.title}</span>
    </div>
}

export default Badge