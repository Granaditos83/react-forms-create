import React from 'react';


import './product-row.style.css';

  const ProductRow = (props) => {
     return (
         <div className = "product-row-container"  >
        {props.product.marca} { ' ' }  {props.product.color} { ' ' } {props.product.procedencia} { ' ' } {props.product.precio} { }

        {
           
            props.product.stock === 0
            ?
            <span className="producto-sin-existencia">$ {props.product.stock} { }🔴{  } producto no disponible 😰  </span>
            :
            <span> $ {props.product.stock} { }🟢 Producto disponible 🙂 </span>
        
        }
           
          
            
         </div>

     );
    
}
export default ProductRow ;