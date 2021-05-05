import React from 'react';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';



import './product-table.style.css';

  const ProductTable= () => {
     return(
         <div className="product-table-container"  >

           

        
           <p><ProductCategoryRow categoryName="Marcos bicicletas"  /></p>
           <ProductRow product= {{
             marca: 'Monguss', 
             color:'Azul',
             procedencia: 'Australia',
             precio: '12.000.000',
             stock: 0

           
             
           }} />
             <ProductRow product= {{
             marca: 'Garry Tunner', 
             color:'Azul',
             procedencia: 'Estados Unidos',
             precio: '1.000.000',
             stock: 1
            }} />
            
                 <ProductRow product= {{
             marca: 'turboman', 
             color:'Azul',
             procedencia: 'China',
             precio: '11.000.000',
             stock: 3
            }} />
             
          
             
            
          
          <p> <ProductCategoryRow categoryName="Accesorios "  /></p>
           <ProductRow product= {{
             marca: 'Monguss',
             color:'Azul',
             procedencia: 'Australia',
             precio: '12.000.000',
             stock: '2'
          
             
            
           }} />

           <p><ProductCategoryRow categoryName="Vestimenta"  /></p>
           <ProductRow product= {{
             marca: 'Monguss',
             color:'Azul',
             procedencia: 'Australia',
             precio: '12.000.000',
             stock: '2'
          
             
            
           }} />
        
           
         
            
         </div>

     );
    
}
export default ProductTable ;