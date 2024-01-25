import React from 'react'
import FoodList from './Components/FoodList'

export default function App() {
      const fooditem=["Pizza","Pink Pasta","Burger","Fries","Butter Naan","Chicken", "Parantha"];
      return <FoodList item={fooditem}/>

}
