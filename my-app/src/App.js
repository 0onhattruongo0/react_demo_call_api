import './App.css';
import Menu from './components/Menu/Menu';
// import ProductList from './components/ProductList/ProductList';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import HomePage from './pages/Home/HomePage';
import NotFound from './pages/NotFound/NotFound';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';




function App() {
  var histoty = '222'
  return (

      <div className="App">  
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Menu/>}>
              <Route index element={<HomePage />} />
              <Route path='*' element = {<NotFound />} />
              <Route path='product'element={<ProductListPage />} />
              <Route path='product/add'   element={<ProductActionPage histoty={histoty} />} />
              <Route path='product/:id/edit'element={<ProductActionPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
          {/* <Menu />
          <div className='container'>    
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">          
                  <button type="button" className="btn btn-info">Thêm sản phẩm</button>
                  <ProductList />
              </div>
            
            </div>
          </div>  */}
      </div>
      
  );
  
}

export default App;
