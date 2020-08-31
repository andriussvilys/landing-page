import React from 'react'
import Badge from './Badge'

const Tools = props => {
    const renderRow = (title, list) => {
        return(<div className="tools-wrapper">
        <div className="tools-title"><span>{title}:</span></div>
            <div className="tools-items">
                    {list.map((listItem) => {
                        return <Badge 
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
                <div className="webExample-tools-headline">Toolbox:</div>
                {renderAll(props.data)}
            </div>)
}
export default Tools