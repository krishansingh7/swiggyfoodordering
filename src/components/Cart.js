import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../../utils/cartSlice'

const Cart = () => {

  const cardItems = useSelector((store)=>store.cart.items)

  const dispatch = useDispatch();

  const handleClearBtn = () => {
    dispatch(clearCart())
  }

  // console.log(ItemList);

  return (
    <div className='w-8/12 m-auto '>
    <div className='flex justify-around items-center my-4 '>
    <h1 className='font-bold text-4xl'>Cart</h1>
    <button className='py-2 px-4 bg-black text-white rounded-md' onClick={handleClearBtn}>Clear Cart</button>
    </div>
    <div className=''>
    {/* <button className='bg-red-300'>Clear</button> */}
      <ItemList items={cardItems}/>
    </div>
    </div>
  )
}

export default Cart;