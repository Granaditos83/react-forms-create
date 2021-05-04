import React from 'react';
import './search-bar.style.css';

  const SearchBar = () => {
     return(
         <div className="search-bar-container"  >
           <input type="text" placeholder="Buscar tu sueño"  /> <br></br>
           <input type="checkbox" />Mostrar solo productos disponibles
          
            
         </div>

     );
    
}
export default SearchBar ;