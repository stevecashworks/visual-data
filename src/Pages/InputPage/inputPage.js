import './inputPage.css'

import { useContext } from 'react';
import {FaChevronRight,FaChevronLeft} from 'react-icons/fa'
import { AppContext } from '../../App';
import { Link } from 'react-router-dom';


const InputPage=()=>{
     const {state,dispatch}=useContext(AppContext)
     const {noOfItems,items}=state
     const setName=(e,id)=>{
      dispatch({type:'set_name',payLoad:{id, New:e.target.value}})
     }
      const setQuantity=(e,id)=>{
        dispatch({type:'set_quantity',payLoad:{id, New:e.target.value}})
      }
     console.log(items)
    return(
       <div className="input-page">
        
        <div className="mid-inp"  >
            <div className='mid-inp-top'>
            <h1>How many items do you want to compare?</h1>
                <div className="counter">
                   <FaChevronLeft onClick={()=>{dispatch({type:'decrease_count'});dispatch({type:"removeItem"})}}  className="chev" />
                   <div className='output'>{noOfItems}</div>
                    <FaChevronRight onClick={()=>{dispatch({type:'increase_count'});dispatch({type:"addItem",payLoad:{id:`item ${items.length+1}`,name:'',quantity:''}})}} className="chev"/>
                </div>
            </div>
            {(noOfItems>0)&&<div className="item-details">
                
              
            {
            items.map((item)=>{
                        return <div key={item.id} className='newItem'>
                            <p>{item.id}</p>
                            <input placeholder='Please input  variable name ' onChange={(e)=>{setName(e,item.id)}}/>
                            <input type="number" onChange={(e)=>{setQuantity(e,item.id)}} placeholder='Input quantity for this item'/>
                        </div>
                        
                    })}
                    <Link to="/output" style={{textDecoration:"none"}}>

                <button className='done-btn'>Done</button>
                    </Link>
                </div>}
        </div>
        
        </div>
    )
}
export default InputPage