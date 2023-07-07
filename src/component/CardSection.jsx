import React from 'react'
import Card from './Card'

export default function CardSection() {
    const cardData = [
        {id:1, price : "400,000", descp: "Total budget you own", color:"#FFFFFF"},
        { id: 2, price: "299,762", descp: "Spent month-to-date", color:"#a1d3ff"},
        { id: 3, price: "2,874,582", descp: "Forecasted till month end", color:"#a1fff6"}
    ]
  return (
      <div id='cardSection'>
          {
              cardData.map(data => (
                  <Card key={data.id} data = {data}/>
              ))
          }
          
    </div>
  )
}
