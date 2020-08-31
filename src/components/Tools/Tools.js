import React from 'react'

const Tools = props => {
    const renderRow = (title, list) => {
        return(<div className="tools-wrapper">
        <div className="tools-title"><span>{title}:</span></div>
            <div className="tools-items">
                    {list.map((listItem) => {
                        if(!listItem.img){
                            return <div 
                            // className={"details-badge_other"}
                            className="details-badge"
                            key={`${title}-badge-${listItem.title}`}
                            >
                                <span>{listItem.title}</span>
                            </div>
                        }
                        if(!listItem.title){
                            return <div 
                            className="details-badge"
                            key={`${title}-badge-${listItem.title}`}
                            >
                            <img className="details-badge-fullWidth" src={`badges/${listItem.img}`} alt={listItem.img}/>
                        </div>                            
                        }
                        return <div 
                            className="details-badge"
                            key={`${title}-badge-${listItem.title}`}
                            >
                            <img src={`badges/${listItem.img}`} alt={listItem.title}/>
                            <span>{listItem.title}</span>
                        </div>
                        })
                    }
            </div>
    </div>)
    }
    const renderAll = (data) => {
        console.log("render ALL")
        console.log(data)
        return data.map(obj => {
            return renderRow(obj.title, obj.list)
        })
    }
          
    return ( <div className="webExample-tools-container">
                <div className="webExample-tools-headline">Toolbox:</div>
                {renderAll(props.data)}
            </div>)
}
export default Tools