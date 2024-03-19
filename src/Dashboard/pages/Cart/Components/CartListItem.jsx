import React from 'react'
import './CartListItem.css'
import { Link } from 'react-router-dom'
import BasketIconSVG from '../../../../assets/BasketIconSVG'
import TrashIconSVG from '../../../../assets/TrashIconSVG'

function CartListItem() {
  return (
    <div className='item-container'>
        <div className='item-info-container'>
          <div className='item-info-image'>
            <img 
              src='https://gamezone.no/Media/Cache/Images/4/8/WEB_Image_Catan_5-6_spillere_Ekspansjon_Norsk__catan-grunnspillet-5-61567907112.jpeg'
            />
          </div>
          <div className='item-info-name'>
            Product Name
          </div>
          <div className='item-info-price'>199 kr</div>
        <div className='item-info-quantity'>
          <input className='item-input-quantity' type="number" id="quantity" value="1"  min="1" max="99"/>
        </div>
        <div className='item-button-list-remove'>
          <button className='item-button-remove'>
            <TrashIconSVG className='item-button-remove-icon'/>
          </button>
        </div>
        </div>
    </div>
  )
}

export default CartListItem