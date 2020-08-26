import React from 'react';
import './triangle.css'

const Triangle = () => {
    return <div class="spinner-container">
                    <div class="circle-labels">
                            <span class="circle-label circle-label_1">IMAGINE</span>
                            <span class="circle-label circle-label_2">PLAN</span>
                            <span class="circle-label circle-label_3">BUILD</span>
                    </div>
                    <div class="circleBound">
                        <div class="innerCircle">
                            <div class="triangle-wrapper">
                                <div class="circle circle-1">
                                    <img src="triangle/write-emoji.png" alt="write emoji" />
                                </div>
                                <div class="circle circle-2">
                                    <img src="triangle/plan-emoji.png" alt="map emoji" />
                                </div>
                                <div class="circle circle-3">
                                    <img src="triangle/lightbulb-emoji.png" alt="lightbulb emoji" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
}

export default Triangle