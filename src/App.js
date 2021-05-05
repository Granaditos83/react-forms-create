import logo from './logo.svg';
import './App.css';
import ProductsPage from './pages/products/products.page';
import videoBike from './pages/products/components/video/videoBike.mp4';


function App() {
  return (
    <div className="App">
      
      

      <video  autoPlay  loop muted
      style = {{
        position:"absolute",
        width: "100%",
        left:"0%",
        top:"2%",
        height:"163%",
        objectFit:"cover",
        transform:"traslate(-60%, -60% )",
        zIndex:"-1",
    }}
      >
        <source src={videoBike} type="video/mp4"  >

        </source>
      </video>

      

    
  
      ______<ProductsPage/>
      
      
      
    </div>
  );
}

export default App;
