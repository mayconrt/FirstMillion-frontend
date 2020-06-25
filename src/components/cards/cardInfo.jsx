import React from 'react'

export default function CardInfo(props) {
    return (
        <div className="col-lg-4 col-6">
            <div className={`small-box bg-${props.color}`}>
                <div className="inner">
                    <h3>R$ {props.value}</h3>
                    <p>{props.title}</p>
                </div>
                <div className="icon">
                    <i className={props.classes}></i>
                </div>
                <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right"></i>
                </a>
            </div>
        </div>
    )
}