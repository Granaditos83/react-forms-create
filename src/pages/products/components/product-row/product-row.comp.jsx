import React from 'react';


import './product-row.style.css';

  const ProductRow = (props) => {
     return (
         <div className = "product-row-container"  >
        {props.product.marca } { ' ' }  {props.product.color} { ' ' } {props.product.procedencia} { ' ' }$ { }
        
        
        
        {
            props.product.precio <=1
            ?
            <span className="precio-no-valido">{props.product.precio} { }{  } precio no valido 😰  </span>
            :
            <span>  {props.product.precio} { }  </span>
        
        
        
        } 
        {
           
            props.product.stock <=1
            ?
            <span className="producto-sin-existencia">{props.product.stock} { }🔴{  } producto no disponible 😰  </span>
            :
            <span>  {props.product.stock} { }🟢 Producto disponible 🙂 </span>
        
        }
    
           
          
            
         </div>

     );
    
}
export default ProductRow ;