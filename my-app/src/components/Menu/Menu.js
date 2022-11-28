import { Outlet,Link,useResolvedPath, useMatch } from "react-router-dom";



function Menu() {

  const CustomLink= ({children,to}) =>{
    const resolved = useResolvedPath(to)
    const match = useMatch({path:resolved.pathname,end:true})
    return (
      <li className={match ? 'active' : ''}>
        <Link to={to} >
          {children}
        </Link>
      </li>
    )
  }

  return (
    <div >
      <div className="navbar navbar-default">
          <div className="navbar-brand">Call API</div>
          <ul className="nav navbar-nav">
            {/* <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/product">Quản lý sản phẩm</Link>
            </li> */}
            <CustomLink to="/">Trang chủ</CustomLink>
            <CustomLink to="/product">Quản lý sản phẩm</CustomLink>
          </ul>
        </div>
        <Outlet />
    </div>
    
  );
}

export default Menu;
