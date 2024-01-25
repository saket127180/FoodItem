import React from 'react'
import Fooditem from './Fooditem';

export default function FoodList(props) {
    let item=props.item;
    if(item.length===0)
    {
      return <h2>No Food Items</h2>
    }
    else{
  return (
    <>
    
    <div className='container'>
    <h3 className=' pt-3 pb-3'>Food Items</h3>
    <ul className="list-group">
        {  
            item.map((x)=>{
                return <Fooditem x={x}/>
            }
        )}
 
  
</ul>
</div>
    </>
  )
        }
}
