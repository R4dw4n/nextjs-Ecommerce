import { Button, ConfigProvider, Input } from 'antd'
import React from 'react'

function CartCheckout({subtotal}) {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className='p-4 m-4 bg-gradient-to-r from-[#2e3038] to-[rgb(20,20,20)] rounded-lg'>
      <h1 className='m-2 text-2xl font-extrabold'>Order Summary</h1>
      <p className='m-2'>By placing your order, you agree to the <span className='underline cursor-pointer'>Terms and Services</span></p>
      <ConfigProvider theme={{
        token: {
          colorPrimary: '#f5cd47',
        }
      }}>
        <div className='flex gap-[15px]'>
          <Input placeholder='Promo Code?' className='w-[65%]' />
          <button className='w-[35%] h-[45px] bg-maingold text-[#fff]'>APPLY</button>
        </div>
      </ConfigProvider>
      
      <div className='p-2'>
        <div className='p-4 flex justify-around items-center'><h6>Subtotal</h6> <h6>{USDollar.format(subtotal)}</h6></div>
        <div className='p-4 flex justify-around items-center'><h6>Shipping</h6> <h6>{USDollar.format(0)}</h6></div>
        <div className='p-4 flex justify-around items-center'><h6>Discount</h6> <h6>-{USDollar.format(subtotal)}</h6></div>
        <div className='ml-14 w-72 h-[2px] bg-maingold' />
        <div className='p-8 flex justify-around items-center'><h6>Total</h6><h6>{USDollar.format(subtotal)}</h6></div>
      </div>

      <button className='w-full h-12 bg-maingold text-[#fff] font-bold'>CHECKOUT</button>
    </div>
  )
}

export default CartCheckout