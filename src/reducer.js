 const reducer=(state,action)=>{
  const {type,payLoad}=action;
    switch(type){
        case'increase_count':{if(state.noOfItems===10){return state}return{...state,noOfItems:state.noOfItems+1}}
        case "decrease_count":{if(state.noOfItems===0){return state} return {...state,noOfItems:state.noOfItems-1}}
        case 'addItem': {
                if(state.noOfItems===11){
                    return state
                }    
            return {...state,items:[...state.items,payLoad]}
        }
        case "set_name":{return{...state,items:state.items.map(item=>{
            if(item.id===payLoad.id){
                    return {...item,name:payLoad.New}
            }
            return item
        })}}
        case 'set_quantity':{
            return{...state, items:state.items.map(item=>{
                if(item.id===payLoad.id){
                    return {...item,quantity:payLoad.New}
                }
                return item
            })}
        }
        case "removeItem":return {...state,items:state.items.filter(x=>x.id!==`item ${state.items.length}`)}
        default:return state
    }
 }
 export default reducer