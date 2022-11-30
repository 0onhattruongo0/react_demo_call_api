import * as Types from "../constants/ActionTypes"


var initialState = [];

var findIndex=(products,id)=>{
    var result =-1;
    products.forEach((product,index) => {
        if(product.id===id){
          return  result = index
        }
    });
    return result
}


const products =(state=initialState,action)=>{
    var index = -1;
    switch (action.type){
        case Types.FETCH_PRODUCT:
            // console.log(action)
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            var id = action.id
            index =findIndex(state,id);
            state.splice(index,1)
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state]
        default: return [...state]
    }
}

export default products