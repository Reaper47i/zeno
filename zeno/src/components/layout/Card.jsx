import React from "react"

export function Card(props){
    return(
        <div className="Card">
            <img src={props.img} alt={props.title} />
            <h3>{props.title}</h3>
            <div className="price"><h3>Price {props.price}</h3></div>
            <button className="bt1">Add To Cart</button>
            <button className="bt2">Buy Now</button>
        </div>
    )
}

export function CardCl(props){
    return(
        <div className="Card-cl">
            <img src={props.img} alt={props.title} />
            <h3>{props.title}</h3>
            <div className="price-cl"><h3>Price {props.price}</h3></div>
            <button className="bt1-cl">Add To Cart</button>
            <button className="bt2-cl">Buy Now</button>
        </div>
    )
}




