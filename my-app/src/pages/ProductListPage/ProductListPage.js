import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import callApi from '../../utils/apiCaller';


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
        callApi('products','GET',null).then(res=>{
            this.setState({
                products : res.data
            })
        })
    }

    render(){
        // var {products} = this.props;
        // console.log(products)
        var products = this.state.products;
        
        
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
                    <ProductItem key={index} product={product} index={index} />
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

export default connect(mapStateToProps,null) (ProductListPage);