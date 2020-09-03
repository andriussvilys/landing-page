import React from 'react'
import Badge from './Badge'

const Tools = props => {
    const renderRow = (title, list) => {
        return(<div 
                key={`tools-${title}`}
                className="tools-wrapper">
                <div className="tools-title"><span>{title}:</span></div>
                    <div className="tools-items">
                            {list.map((listItem, index) => {
                                return <Badge 
                                    key={`tools-${title}-${listItem.title}-${index}`}
                                    section={title}
                                    title={listItem.title}
                                    img={listItem.img}
                                />
                                })
                            }
                    </div>
            </div>)
    }
    const renderAll = (data) => {
        return data.map(obj => {
            return renderRow(obj.title, obj.list)
        })
    }
          
    return ( <div className="webExample-tools-container">
                {/* <div className="webExample-tools-headline">Toolbox:</div> */}
                <div className="webExample-tools-wrapper">
                    {renderAll(props.data)}
                </div>
            </div>)
}
export default Tools