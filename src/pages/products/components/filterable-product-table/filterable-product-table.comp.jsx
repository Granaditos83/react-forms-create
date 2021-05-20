import React from 'react';

import ProductTable from '../product-table/product-table.comp';
import SearchBar from '../serach-bar/search-bar.comp';
import './filterable-product-table.style.css'



  const FilterableProductTable = (props) => {
     return(
         <div className="filterable-product-table-container"  >
            <h1>R🚲DAND🚲.com  ® </h1> <h2>by: Granados</h2>
            



           

           <SearchBar/>
        
           <ProductTable
            productsList = {props.productsList}
            onAddProduct={props.onAddProduct}

             />
             
            
         </div>

     );
    
}
export default FilterableProductTable ;