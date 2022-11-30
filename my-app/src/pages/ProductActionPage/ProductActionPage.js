import { Component } from "react";
import callApi from "../../utils/apiCaller";
import { Link, Navigate,useParams   } from 'react-router-dom';
import {connect} from 'react-redux'
import { actAddProductRequest } from "../../actions";



function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class ProductActionPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            txtName : '',
            txtPrice:'',
            chkbStatus: false,
            redirect : false
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
        var {txtName,txtPrice,chkbStatus,id}= this.state;
        var product = {
            id : id,
            name :txtName,
            price :txtPrice,
            status: chkbStatus
        }
        e.preventDefault();
        if(id===''){
            // callApi('products','POST',{
            //     name: txtName,
            //     price: txtPrice,
            //     status: chkbStatus
            // }).then(res=>{
            //     this.setState({
            //         redirect : true
            //     })
            // })
                this.setState({
                redirect : true
            })
            this.props.onAddProduct(product)
        }else{
            callApi(`products/${id}`,'PUT',{
                id: id,
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res=>{
                this.setState({
                    redirect : true
                })
            })
        }
       
    }

    componentDidMount() {
        let { id } = this.props.params;
        if(id){
            callApi(`products/${id}`,'GET',null).then(res=>{
                var data = res.data;
                // console.log(data)
                this.setState({
                    id : data.id,
                    txtName : data.name,
                    txtPrice:data.price,
                    chkbStatus: data.status
                })
                // console.log(this.state)
            })
        }
       
       
    }
  render(){
    var {txtName,txtPrice,chkbStatus,redirect} = this.state;
    if(redirect === true){
       return <Navigate to="/product" replace={true} />
    }

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
                                <input type="checkbox" name="chkbStatus" value={chkbStatus} checked={chkbStatus} onChange={this.onChange}/>
                                Trạng thái
                            </label>
                        </div>
                        
                    </div>
                    <Link to='/product' className="btn btn-danger mr-10">Trở lại</Link>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
            
            </div>
       </div>
       
       
      );
     }
    
  }

  const mapDispatchToProps=(dispatch,props)=>{
    return {
        onAddProduct : (product) =>{
            dispatch(actAddProductRequest(product))
        }
    }
  }
  
  export default connect(null,mapDispatchToProps)(withParams(ProductActionPage));
  