import React from 'react'

const Tools = props => {
    const renderRow = (title, list) => {
        // return(<div className="tools-wrapper">
        //             <div className="tools-title"><span>{title}:</span></div>
        //                 <div className="tools-items">
        //                         {list.map((listItem) => {
        //                             return (<div 
        //                                 className="details-badge"
        //                                 key={`${title}-badge-${listItem.title}`}
        //                                 >
        //                                 <img src={`badges/${listItem.img}`} alt={listItem.title}/>
        //                             </div>)
        //                             })
        //                         }
        //                 </div>
        //         </div>)
        return(<div className="tools-wrapper">
        <div className="tools-title"><span>{title}:</span></div>
            <div className="tools-items">
                    {list.map((listItem) => {
                        return (<div 
                            className="details-badge"
                            key={`${title}-badge-${listItem.title}`}
                            >
                            <img src={`badges/${listItem.img}`} alt={listItem.title}/>
                        </div>)
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