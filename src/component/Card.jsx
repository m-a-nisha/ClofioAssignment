import React from 'react'

export default function Card({ data }) {
    console.log(data);
    const { price, descp, color } = data;
    return (
        <div id='card' style={{ backgroundColor: `${color}` }}>
            <h1>&#36; { price }</h1>
            <p>{ descp }</p>
        </div>
    )
}
