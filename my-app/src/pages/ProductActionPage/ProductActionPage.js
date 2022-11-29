import { Component } from "react";
import callApi from "../../utils/apiCaller";



class ProductActionPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            txtName : '',
            txtPrice:'',
            chkbStatus: false
        }
    }

    onChange=(e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }
    onSave=(e)=>{
        var {txtName,txtPrice,chkbStatus}= this.state;
        e.preventDefault();
        console.log(this.props.histoty)
        callApi('products','POST',{
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }).then(res=>{
        })
    }


  render(){

    var {txtName,txtPrice,chkbStatus} = this.state;

    return (
       <div className="container">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
         
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên sản phẩm</label>
                        <input type="text" className="form-control" name="txtName" value={txtName} onChange = {this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input type="number" className="form-control" name="txtPrice" value={txtPrice} onChange = {this.onChange}/>
                    </div>
                    <div className="form-group">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="chkbStatus" value={chkbStatus} onChange={this.onChange}/>
                                Trạng thái
                            </label>
                        </div>
                        
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
            
            </div>
       </div>
       
       
      );
     }
    
  }
  
  export default ProductActionPage;
  