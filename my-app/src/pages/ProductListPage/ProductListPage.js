import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
// import callApi from '../../utils/apiCaller';
import {actDeleteProductRequest, actFetchProductsRequest} from '../../actions/index'


class ProductListPage extends Component {
    constructor (props){
        super(props);
        this.state = {
            products : []
        }
    }
    

    componentDidMount(){
        // axios({
        //     method:'GET',
        //     url: 'http://localhost:3000/products',
        //     data:null
        // }).then(res=>{
        //     this.setState({
        //         products: res.data
        //     })
        // }).catch(err =>{
        //     console.log(err)
        // })

        // ----------------
        // callApi('products','GET',null).then(res=>{
        //     // this.setState({
        //     //     products : res.data
        //     // })
        //     // console.log(res)
        //     this.props.fetchAllProducts(res.data)
        // })

        this.props.fetchAllProducts()
    }

    onDelete=(id)=>{
        // var products = this.state.products;
        // console.log(products)
        // callApi(`products/${id}`,'DELETE',null).then(res=>{
        //     if(res.status===200){
        //         var index = this.findIndex(products,id);
        //         if(index !== -1){
        //             products.splice(index,1)
        //             this.setState({
        //                 products : products
        //             })
        //         }
                
        //     }
        // })
        this.props.onDeleteProduct(id)

    }

    // findIndex(products,id){
    //     var result = -1;
    //     for( let i = 0; 1<products.length;i++){
    //        if(products[i].id === id){
    //          result = i;
    //          return result
    //        }
    //     }
    //     return result
    // }

    render(){
        var {products} = this.props;
      
        // var products = this.state.products;
        // console.log(products)
        
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">          
                        <Link to="/product/add"  className="btn btn-info">Thêm sản phẩm</Link>
                        <ProductList >{this.showProducts(products)}</ProductList>
                    </div>
                
                 </div>
            </div>
            
        );
   
    }   
    showProducts(products){
        var result = null;
        if(products.length>0){
            result = products.map((product,index) => {
                return (
                    <ProductItem key={index} product={product} index={index} onDelete={this.onDelete} />
                )
            });
        }
        return result
    }
   
}

const mapStateToProps = (state)=>{
    return {
        
        products : state.products
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        fetchAllProducts: ()=>{
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct:(id)=>{
            dispatch(actDeleteProductRequest(id))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (ProductListPage);