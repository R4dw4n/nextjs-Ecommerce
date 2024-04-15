'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartTable from './CartTable';
import CartCheckout from './CartCheckout';

function Page() {
  const { cart } = useSelector(state => state.cart);
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    setSubtotal(cart.reduce((pre, curr) => {
      return pre + curr.price * curr.quantity;
    }, 0))
  }, [cart])
  return (
    <div className="w-full min-h-screen mx-auto">
      <div className='flex'>
        <div className='p-4 w-[70%]'>
          <h1 className='text-bold text-3xl py-4'>
            Shopping Cart
          </h1>
          <CartTable cart={cart}/>
        </div>

        {/* CHECKOUT */}
        <CartCheckout subtotal={subtotal} />
      </div>
    </div>
  )
}

export default Page