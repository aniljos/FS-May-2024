import React from 'react';
import Message from './components/Message';
import Counter from './components/Counter';
import FnCounter from './components/FnCounter';
import ListProducts from './components/ListProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import EditProduct from './components/EditProduct';
import Search from './components/Search';
import Login from './components/Login';

function App() {
  return (

    <Router>
    <div className='container-fluid'>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
          <a className='navbar-brand' href="#">React</a>
          <ul className='nav'>
              <li className='nav-item'>
                  <Link className='nav-link' to="/">Home</Link>
              </li>
              <li className='nav-item'>
                  <Link className='nav-link' to="/counter">Counter</Link>
              </li>
              <li className='nav-item'>
                  <Link className='nav-link' to="/products">Products</Link>
              </li>
              <li className='nav-item'>
                  <Link className='nav-link' to="/search">Search</Link>
              </li>
              <li className='nav-item'>
                  <Link className='nav-link' to="/login">Login</Link>
              </li>
          </ul>
        </div>
      </nav>

      <main style={{border: '2px solid blue', minHeight: '400px', padding: '10px'}}>
          <Routes>
              <Route path='/' element={<Message text='Hello React' textColor='blue'/>}/>
              <Route path='/counter' element={<Counter value={10}/>} />
              <Route path='/products' element={<ListProducts/>} />
              <Route path='/products/:id' element={<EditProduct/>}/> 
              <Route path='/search' element={<Search/>}/>
              <Route path='/login' element={<Login/>}/>
          </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
