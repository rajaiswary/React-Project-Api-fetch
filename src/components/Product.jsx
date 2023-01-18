import React, { useState, useEffect } from "react";

const Product = () => {
  const [pro, setPro] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setPro(data.products);
        console.log(data.products);
      });
  }, []);

  return (
    <>
      <h1>Products</h1>

      <div className="container">
        <div className="row text-center">
          {pro.map((val, key) => {
            return (
              <div className="col-md-3 mt-5">
                <div className="card" style={{height: '29rem'}} key={key}>
                    <div style={{height:'auto'}}>
                    <img src={val.thumbnail} className='card-img-top' />
                   </div>
                  <div className="card-body" style={{height:'75px'}}>
                  <p>{val.title}</p>
                    <p style={{fontSize:'12px'}}>{val.description}</p>
                    <p>{val.price}</p>
                  </div>
                  <div className="card-footer" style={{height:'55px'}}>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
