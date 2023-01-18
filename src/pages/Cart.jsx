import React from "react";


function Cart()
{
    fetch('https://dummyjson.com/carts/2')
    .then(res => res.json())
    .then((data)=>{
        console.log(data);
    });
}

export default Cart;