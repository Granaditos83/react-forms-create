import React, { useState } from 'react';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';



import './product-table.style.css';

  const ProductTable= (props) => {


     const [category, setCategory] = useState ('c1');
     const [name, setName] = useState ();
     const [color, setColor] = useState ();
     const [procedencia, setProcedencia] = useState ();
     const [precio, setPrecio] = useState (0);
     const [stock, setStock] = useState (10);

     const adicionarProducto = (event)=> {
       event.preventDefault();
       const newProduct=
       {
        category:category,
        
        marca: name,
        color: color,
        procedencia: procedencia,
        precio: Number (precio) ,
        stock: Number(stock),
      };
        
      

     
       props.onAddProduct( newProduct, category);
       console.log('category' + category );
       console.log('name' + name );
       console.log('color' + color );
       console.log('procedencia' + procedencia );
       console.log('precio' + precio );
       console.log('stock' + stock );

     }
    


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
             <select
              value={category}
              onChange={(event)=>{
                console.log(event.target.value);
              setCategory(event.target.value);  

              }}
              >
             <option value="c1">Marcos bicicletas</option>
             <option value="c2">Accesorios</option>
             <option value="c3">Vestimenta</option>
             <option value="c4">Cascos</option>
           </select>
             </td>
             </tr>
             <tr>
               <td>Marca</td>
               <td><input
                type="text"
                value={name}
                onChange={(event)=>{
                setName(event.target.value);
                

                }}
                 /></td>
             </tr>
             <tr>
               <td>Color</td>
               <td><input
                type="text"
               
                value={color}
                onChange={(event)=>{
                setColor(event.target.value);
                

                }}
                 /></td>
             </tr>
             <tr>
               <td>Procedencia</td>
               <td><input
                type="text"
              
                value={procedencia}
                onChange={(event)=>{
                setProcedencia(event.target.value);
                

                }}
                 /></td>
             </tr>
             <tr>
               <td>Precio</td>
               <td><input
                type="Number"
                
                value={precio}
                onChange={(event)=>{
                setPrecio(event.target.value);
                

                }}
                 /></td>
             </tr>
             <tr>
               <td>Stock</td>
               <td><input
                type="Number"
               
                value={stock}
                onChange={(event)=>{
                setStock(event.target.value);
                

                }}
                 /></td>
             </tr>
             <td>
             <tr>
             <a class="boton_personalizado"  onClick={adicionarProducto} href="">Agregar producto</a>
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


           

        
           
           
         
            
   