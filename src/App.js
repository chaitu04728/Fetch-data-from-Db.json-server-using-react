// App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useNavigate } from 'react-router-dom';
import AllProductsPage from './components/AllProductsPage';
import AboutPage from './components/AboutPage';
import Main from './components/Main.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isProductsActive: false,
    };
  }

  handleProductsClick = () => {
    const { history } = this.props;
    history.push('/products');
    this.setState({ isProductsActive: true });
  };

  render() {
    const { isProductsActive } = this.state;

    return (
      <Router>
        <div>
          <nav className='hd'>
            <ul style={{display:"flex",padding:"10px",margin:"10px"}}>
              <li>
                <Link to="/" className='dav'>Home</Link>
              </li>
              <li>
                <Link to="/about" className='dav'>About</Link>
              </li>
              <li>
                <Link to="/products" className='dav'>
                  Products
                </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<AllProductsPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;