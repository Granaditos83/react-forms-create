import React from 'react';
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
            }
          ]
        },
           
            
        
      
      
        {
          id:"c2",
          name: 'Accesorios',
          products: [
            {
              id:"c2p1",
              marca: 'Monguss',
              color:'Azul',
              procedencia: 'Australia',
              precio: '12.000.000',
              stock: '2'
            },
            {
              id:"c2p2",
              marca: 'Monguss',
              color:'Azul',
              procedencia: 'Australia',
              precio: '12.000.000',
              stock: '2'
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
              color:'Azul',
              procedencia: 'Colombia',
              precio: '120.000',
              stock: 6,

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

            }
          
          ]
        },
        

      ]
  
      
     return(
       <>
       <FilterableProductTable
        productsList={productsList} 
        
        />
      
       </>


     );
    
}
export default ProductsPage;
    
            

     
      
   




