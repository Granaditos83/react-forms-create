import React, { useState } from 'react';
import FilterableProductTable  from './components/filterable-product-table/filterable-product-table.comp';

  const ProductsPage = () => {


    let productsList =  [
      
        {
          id:"c1",
          name: 'Marcos bicicletas',
          products:[
            {
              id:"c1p1",
              marca: 'Monguss', 
              color:'Azul',
              procedencia: 'Australia',
              precio: '12.000.000',
              stock: 0,
            },
            {
              id:"c1p2",
              marca: 'Garry Tunner', 
              color:'Azul',
              procedencia: 'Estados Unidos',
              precio: '1.000.000',
              stock: 0,
            },
            {
              id:"c1p3",
              marca: 'turboman', 
              color:'Azul',
              procedencia: 'China',
              precio: '11.000.000',
              stock: '3'
            },
            {
              id:"c1p4",
              marca: 'yayoRacing', 
              color:'verde menta',
              procedencia: 'China',
              precio: '11.000.000',
              stock: '4', 
            }
          ]
        },
           
            
        
      
      
        {
          id:"c2",
          name: 'Accesorios',
          products: [
            {
              id:"c2p1",
              marca: 'Fox suspension',
              color:'Estandar',
              procedencia: 'Estados unidos',
              precio: '7.000.000',
              stock: '2'
            },
            {
              id:"c2p2",
              marca: 'Morita suspension',
              color:'Amarillo',
              procedencia: 'Australia',
              precio: '11.000.000',
              stock: '0',
            },
            {
              id:"c2p3",
              marca: 'Monguss suspension',
              color:'Azul',
              procedencia: 'Africa',
              precio: '8.500.000',
              stock: '7'
            },
            {
              id:"c2p4",
              marca: 'Canino suspension',
              color:'Cromado',
              procedencia: 'Europa',
              precio: '12.000.000',
              stock: '9'
            }
            
          ]
        },


        
        {
          id:"c3",
          nane: 'Vestimenta',
          products: [
            {
              id:"c3p1",
              marca: 'Rigo go',
              color:'Azul',
              procedencia: 'Colombia',
              precio: '120.000',
              stock: 3,
            },
            {
              id:"c3p2",
              marca: 'Fox racing',
              color:'rojo Claro',
              procedencia: 'Estados unidos',
              precio: '145.000',
              stock: 6,

            },
            {
              id:"c3p3",
              marca: 'Fox racing',
              color:'Amarillo sol',
              procedencia: 'Estados unidos',
              precio: '145.000',
              stock: 3,
            }
          
          ]
        },
        
        {
          id:"c4",
          nane: 'Cascos',
          products: [
            {
              id:"c4p1",
              marca: 'Rigo go',
              color:'Azul',
              procedencia: 'Colombia',
              precio: '120.000',
              stock: 3,
            },
            {
              id:"c4p2",
              marca: 'Fox racing',
              color:'Azul',
              procedencia: 'Colombia',
              precio: '120.000',
              stock: 0,

            },
            {
              id:"c4p3",
              marca: 'Armamentox',
              color:'Metalizado',
              procedencia: 'Colombia',
              precio: '150.000',
              stock: 0,
            }
          
          ]
        },
        

      ];

      const[products, setProducts] = useState (productsList);
  
      
     return(
       <>
       <FilterableProductTable
        productsList={products} 
        onAddProduct={(productObj, categoryId)=>{

          const newProducts = [];
       for(let i = 0; i < products.length; i++){
         if(products[i].id === categoryId){
           newProducts.push(products[i]);
         }
         else{
          newProducts.push
          ({...products[i],
            products:[... products[i].products,productObj]
          }

         );

         }
       

       }
       setProducts (newProducts);
      


        } }

        />
      
       </>


     );
    
}
export default ProductsPage;
    
            

     
      
   




