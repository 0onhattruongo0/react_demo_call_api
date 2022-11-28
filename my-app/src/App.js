import './App.css';
import Menu from './components/Menu/Menu';
// import ProductList from './components/ProductList/ProductList';
import routes from './routes';
import {Outlet, Route, BrowserRouter, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <div className="App">  
          <Menu />
          <div className='container'>    
            <div className="row">
              {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">          
                  <button type="button" className="btn btn-info">Thêm sản phẩm</button>
                  <ProductList />
              </div> */}
              {this.showContentMenus(routes)}
            </div>
          </div> 
      </div>
      </Routes>
    </BrowserRouter>
  );
  
}
showContentMenus = (routes)=>{
    var result = null;
    if(routes.length>0){
      result = routes.map((route,index)=>{
        return (
          <Route key={index} path={route.path} element={route.main} />
        )
      })
    }
    return <Outlet>{result}</Outlet>
}
export default App;
