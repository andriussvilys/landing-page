import React from 'react'
import './css/Selector.css'

const Selector = (props) => {

    // const [open, toggleOpen] = React.useState(props.open)
    // const [fullSize, toggleFullSize] = React.useState(false)

    return(
        <article className={"Selector-container"}>
            {props.imageList.map(( filename, index ) => {
                return (
                    <div 
                        className={"Selector-image"}
                        key={`selector-${filename}-index`}
                    >
                        <img 
                            src={`carousel/${props.assetDir}/${filename}`}  
                            alt={filename}
                        />
                    </div>
                )
            })}
        </article>
    )
}

export default Selector