import React from 'react';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';



import './product-table.style.css';

  const ProductTable= (props) => {

   



     return(
         <div className="product-table-container"  >
           <div>
           {props.productsList.map  ((category, index)=>{
             return (
             <React.Fragment key={category.id} >

             <ProductCategoryRow categoryName ={category.name} />

             {category.products.map ((product, indexProduct)=>{
              return(
                <ProductRow  key={product.id} product={ product}/>
                );
              } ) }
              </React.Fragment>
              );
            } ) }
              <div>

          
              
            <div className="products-form">
         <form >
           <tr>
             <td>
             categorias
             </td>
             
           
           </tr>
           <tr>
             <td>
             <select>
             <option value="c1">Marcos bicicletas</option>
             <option value="c2">Accesorios</option>
             <option value="c3">Vestimenta</option>
             <option value="c4">Cascos</option>
           </select>
             </td>
             </tr>
             <tr>
               <td>Marca</td>
               <td><input type="text" /></td>
             </tr>
             <tr>
               <td>Color</td>
               <td><input type="text" /></td>
             </tr>
             <tr>
               <td>Procedencia</td>
               <td><input type="text" /></td>
             </tr>
             <tr>
               <td>Precio</td>
               <td><input type="text" /></td>
             </tr>
             <tr>
               <td>Stock</td>
               <td><input type="text" /></td>
             </tr>
             <td>
             <tr>
             <a class="boton_personalizado" href="">Agregar producto</a>
             </tr>
             </td>
            
         
          
            
          
          
         </form>
       </div>
            </div>
                    
                 
                


         


             
          
          
           </div>

      
        </div>

);

}
export default ProductTable ;


           

        
           
           
         
            
   