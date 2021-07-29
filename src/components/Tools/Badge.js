import React from 'react'

const Badge = props => {
    var icon = null;
    var title = null;

    if(props.img)
    {
        var className = props.title ? "details-badge" : "details-badge-fullWidth"
        icon = <img 
                    // className={className}
                    src={`badges/${props.img}`} 
                    alt={props.img}
                />
    }

    if(props.title)
        title = <span>{props.title}</span>
        
    return (
        <div 
            className="details-badge"
            key={`${props.section}-badge-${props.title}`}
        >
            {icon}
            {title}
        </div>
    )
}

export default Badge