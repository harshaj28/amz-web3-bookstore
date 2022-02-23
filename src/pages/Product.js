import React from 'react';
import { Button , Rate } from 'antd';
import Header from "../components/Header"
import "./Product.css"
import { useLocation } from 'react-router-dom';
import Purchase from '../components/Purchase';


const Product = () => {
  let {state:book}=useLocation();
  return (
    <>
    <div className="container">
      <Header />
      <div className="product-content">
        <div>
          <div className="product-img">
            <img src={book.image} alt="product" width="100%"></img>
          </div>
          <p style={{ textAlign: "center" }}>Hover over image to zoom</p>
        </div>
        <div className="product-details">
          <h1>{book.name}</h1>
          <Rate value={book.rating} disabled={true}></Rate>
          <hr></hr>
          <p>
            Price:
            <span className="price"> ${book.price}</span>
          </p>
          <p>
            No Import Fees & Free Shipping Included
          </p>
          <hr></hr>
          <h3>About This Item</h3>
          <p>
            {book.about}
          </p>
        </div>
        <div className="purchase-details">
          <Purchase book={book}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product;
