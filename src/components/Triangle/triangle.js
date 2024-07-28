import React from 'react';
import './css/triangle.scss'

const Triangle = () => {

    return <div className="spinner-container">
                <div className="circleBound"
                    onClick={(e) => {
                        e.stopPropagation()
                        let nodes = Array.from(document.querySelectorAll('.spinner-container *'))
                        nodes.forEach(node => {
                            node.classList.toggle("anim-pause")
                        })
                    }}
                >
                    <div className="innerCircle">
                        <div className="triangle-wrapper">
                            <div className="circle circle-1">
                                <div className="triangle-edge" id="triangle-edge_1"></div>
                                <div className="circle-inner circle-inner_1">
                                    <div className="circle-label-wrapper">
                                        <span className="circle-label circle-label_1">IMAGINE</span>
                                    </div>
                                    <img src="triangle/lightbulb-emoji.png" alt="lightbulb emoji" />
                                </div>
                            </div>
                            <div className="circle circle-2">
                                <div className="triangle-edge" id="triangle-edge_2"></div>
                                <div className="circle-inner circle-inner_2">
                                    <div className="circle-label-wrapper">
                                        <span className="circle-label circle-label_2">BUILD</span>
                                    </div>
                                    <img src="triangle/write-emoji.png" alt="write emoji" />
                                </div>
                            </div>
                            <div className="circle circle-3">
                                <div className="triangle-edge" id="triangle-edge_3"></div>
                                <div className="circle-inner circle-inner_3">
                                    <div className="circle-label-wrapper">
                                        <span className="circle-label circle-label_3">PLAN</span>
                                    </div>
                                    <img src="triangle/plan-emoji.png" alt="map emoji" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

export default Triangle