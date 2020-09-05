import React from 'react';
import './css/alt-css/triangle.css'

const Triangle = () => {

    window.onload = () => {
        var c1 = document.getElementById("triangle-edge_1");
        var c2 = document.getElementById("triangle-edge_2");
        var c3 = document.getElementById("triangle-edge_3");
        // var ctx = c.getContext("2d");
        // ctx.beginPath();
        // ctx.moveTo(0, 0);
        // ctx.lineTo(300, 150);
        // ctx.stroke();
        // console.log(c)
        // console.log(c)
        // console.log(c)
    }


    return <div className="spinner-container">
                    {/* <div className="circle-labels">
                            <span className="circle-label circle-label_1">IMAGINE</span>
                            <span className="circle-label circle-label_2">PLAN</span>
                            <span className="circle-label circle-label_3">BUILD</span>
                    </div> */}
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