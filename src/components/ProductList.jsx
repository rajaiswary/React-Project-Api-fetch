import React, { useState } from "react";

const Product = () => {
  const [pro, setPro] = useState([]);
  const [search,setSearch] = useState("");

  
  

  function productSearch()
  {
    if(search.length>0)
    {
      
        fetch(`https://dummyjson.com/products/search?q=${search}`)
          .then((response) => response.json())
          .then((data) => {
            setPro(data.products);
            console.log(data.products);
          });
    }
  }

  return (
    <>
      <h1>Products</h1>

      <div className="container">

      <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search For Products..."  aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(event)=>{setSearch(event.target.value)}}/>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={productSearch}>Search</button>
</div>
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
