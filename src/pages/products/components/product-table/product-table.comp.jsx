import React from 'react';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';

import './product-table.style.css';

  const ProductTable= () => {
     return(
         <div className="product-table-container"  >


           <ProductCategoryRow categoryName="Marcos"  />
           <ProductCategoryRow categoryName="Accesorios"  />
           <ProductCategoryRow categoryName="Vestimenta"  />
           
          
            
         </div>

     );
    
}
export default ProductTable ;