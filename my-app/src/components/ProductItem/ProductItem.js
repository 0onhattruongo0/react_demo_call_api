import { Component } from "react";
import { Link } from "react-router-dom";



class ProductItem extends Component {
  onDelete = (id) =>{
    if(window.confirm('Bạn có chắc muốn xóa không?')){
      this.props.onDelete(id)
    }
  }
  render(){
    var {index,product} = this.props;
  var status = product.status? "Còn Hàng" : "Hết Hàng";
  var classStatus = product.status? "label label-warning" : "label label-danger";
    return (
        <tr>
            <td>{index+1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
            <span className={classStatus}>{status}</span>
            </td>
            <td>
            <Link to={`/product/${product.id}/edit`} className="btn btn-success">Sửa</Link>
            <button type="button" className="btn btn-danger" onClick={()=>this.onDelete(product.id)}>Xóa</button>
            </td>
      </tr>
    );
  }
 
  
  }
  
  export default ProductItem;
  