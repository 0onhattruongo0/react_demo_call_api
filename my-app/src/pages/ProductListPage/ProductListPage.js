import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"

class ProductListPage extends Component {

    render(){
        var {products} = this.props;
        console.log(products)
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">          
                    <Link to="/product/add" className="btn btn-info">Thêm sản phẩm</Link>
                    <ProductList >{this.showProducts(products)}</ProductList>
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