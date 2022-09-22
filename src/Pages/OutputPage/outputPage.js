import { useContext } from 'react'
import { AppContext } from '../../App'

import './outputPage.css'
const OutputPage=()=>{
    const{state}= useContext(AppContext)
    const {items}=state;
   //getting the maximum to decide the height of each element
    const quants=items.map(item=>item.quantity)
    
   const max=Math.max(...quants);
   // the next 4 lines decides how many pixels represent one unit ;
   // The maximm representation should not be more than 500px in length;
   const rep=(500/max)


    return(
        <div className='output-page'>
            <div className='bar'>
                {items.map(item=>{
                    const sn=Number(item.id.split(' ')[1]);
                    return(
                        <div className='inner-bar' style={{position:'absolute',bottom:'0',left:`${100*sn}px` ,border:"2px solid white",height:`${rep*item.quantity}px`,width:'50px'}}>
                                <p className='bar-name'>{`${item.name} (${item.quantity})`}</p>
                        </div>
                    )
                })}

            </div>
            </div>
    )
}
export default OutputPage