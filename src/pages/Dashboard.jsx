import React, { useState } from 'react'
// import products from '../data.js'
import Navbar from '../components/Navbar.jsx'
import Card from '../components/Card.jsx'


const Dashboard = ({products}) => {
    const [productsState, setproductsState] =useState(products)
  return (
    <>
    <div>
      <Navbar/>
      <div className='d-flex flex-wrap me-5 ms-5'>
        {products.map((product,index)=>(
            <div keys={index}>
                <div className='badge bg-success'>{product.category}</div>
            </div>
        ))}

      </div>

      <div className='container'>
        <div className='row'>
            {productsState.map((product, index)=>(
                <div className='col-12 col-md-6 col-lg-3' keys={index}>
                    <Card product={product}/>

                </div>


            ))}

        </div>
      </div>

    </div>
    </>
  )
}

export default Dashboard
