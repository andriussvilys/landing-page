import React from 'react';
import './css/alt-css/triangle.css'

const Triangle = () => {
    return <div className="spinner-container">
                    <div className="circle-labels">
                            <span className="circle-label circle-label_1">IMAGINE</span>
                            <span className="circle-label circle-label_2">PLAN</span>
                            <span className="circle-label circle-label_3">BUILD</span>
                    </div>
                    <div className="circleBound">
                        <div className="innerCircle">
                            <div className="triangle-wrapper">
                                <div className="circle circle-1">
                                    <div className="circle-inner circle-inner_1">
                                        <img src="triangle/lightbulb-emoji.png" alt="lightbulb emoji" />
                                    </div>
                                </div>
                                <div className="circle circle-2">
                                    <div className="circle-inner circle-inner_2">
                                        <img src="triangle/write-emoji.png" alt="write emoji" />
                                    </div>
                                </div>
                                <div className="circle circle-3">
                                    <div className="circle-inner circle-inner_3">
                                        <img src="triangle/plan-emoji.png" alt="map emoji" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
}

export default Triangle