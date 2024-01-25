import React from 'react'

export default function Fooditem({x}) {
  return (
  <li key={x} className='list-group-item'>{x}</li>
  );
}
