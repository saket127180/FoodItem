import React from 'react'
import style from './css_module/Fooditem.module.css'

export default function Fooditem({x}) {
  return (
  <li key={x} className={`list-group-item ${style.hello}`}>{x}</li>
  );
}
