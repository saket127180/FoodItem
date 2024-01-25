import React from 'react'

export default function FoodList(props) {
    let item=props.item;
  return (
    <>
    {console.log(props.item)}
    <div className='container'>
    <h3 className='Pb-3'>Food Items</h3>
    <ul className="list-group">
        {
            item.map((x)=>{
                return  <li className="list-group-item">{x}</li>
            }
        )}
 
  
</ul>
</div>
    </>
  )
}
