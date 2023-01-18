import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Register from './pages/Register';

import {BrowserRouter,Routes,Route}  from 'react-router-dom';



function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
      <Routes>

        
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/productlist" element = {<ProductList/>}/>
        <Route path = "/product" element = {<Product/>}/>
        <Route path = "/category" element = {<Category/>}/>
        <Route path = "/cart" element = {<Cart/>}/>

        




      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
