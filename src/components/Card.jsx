import React from "react";

const Card = ({ product }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem;" }}>
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          {/* <p>Price: ₹{product.price}</p> */}
          {product.discount > 0 ? (
            <p>
              price : ₹<del>{product.price}</del>{" "}
              <span className="ps-1">₹{product.discountedPrice}</span>
            </p>
          ) : (
            <p>price :₹{product.price}</p>
          )}
          <a href="#" className="btn btn-primary">
            View More
          </a>
          <button className="btn btn-secondary">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Card;
