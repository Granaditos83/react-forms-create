import React from 'react';

import './product-category-row.style.css';

  const ProductCategoryRow= (props) => {
     return(
         <div className ="product-category-row-container"  >

            {props.categoryName}

            
<table>
<tr>
  <td><option value="c1">Marca</option></td>
  <td> <option value="c2">Color</option></td>
  <td><option value="c3">Procedencia</option></td>
  <td> <option value="c4">Precio</option></td>
  <td> <option value="c4">Stock</option></td>
</tr>
</table>
           
          
            
         </div>

     );
    
}
export default ProductCategoryRow ;