import React from 'react'

function Foodcart(props) {
  return (
    <div style={{border:"1px soild black",textAlign:"center" ,maxHeight:"250px",maxWidth:"250px"}}>
        <img  height={50} width={100} src={props.image} alt="" />
        <h1>Andharspices</h1>
        <p>name:{props.name}</p>
        <p>price:{props.price}</p>
        <button>explore</button>

    </div>
  )
}

export default Foodcart