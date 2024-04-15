import { Table, ConfigProvider, InputNumber } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { changeQuantity, removeFromCart } from '@/redux/slices/cartSlice';

const CartTable = ({cart}) => {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const dispatch = useDispatch();
  const cols = [
    {
      key: 1,
      title: 'Product',
      width: '66%',
      render: (product) => (
        <div className='flex'>
          <div className='relative w-[100px] h-[100px]'>
            <Image src={product.thumbnail} alt={product.title} fill sizes='100px, 100px'/>
          </div>
          <div className='p-2 text-[#fff]'>
            <h6 className='font-bold'>{product.title}</h6>
            <h5 className='font-semibold'>{USDollar.format(product.price)}</h5>
            <h6 className='text-[#C80E0E] underline cursor-pointer'
              onClick={() => dispatch(removeFromCart({product: product, quantity: product.quantity}))}>Remove</h6>
          </div>
        </div>
      )
    },
    {
      key: 2,
      title: 'Quantity',
      render: (product) => (
        <ConfigProvider theme={{
          token: {
            colorPrimary: '#f5cd47'
          }
        }}>
          <InputNumber value={product.quantity} max={product.stock} min={0} 
            onChange={(val) => dispatch(changeQuantity({product: product, quantity: val}))}/>
        </ConfigProvider>
      ),
    },
    {
      key: 3,
      title: 'Price',
      render: (product) => (
        <h6 className='font-semibold text-[#fff]'>{USDollar.format(product.price * product.quantity)}</h6>
      )
    },
  ]
  return (
    <>
    <ConfigProvider theme={{
        token: {
          colorPrimary: '#f5cd47',
        },
        components: {
          Table: {
            headerBg: "linear-gradient(#2e3038, rgb(10,10,10))",
            headerColor: "#f5cd47",
            headerSplitColor: "#f5cd47",
            rowHoverBg: "linear-gradient(#1c1c18, rgb(58 58 55))",
            borderColor: "black"
          }
        }
      }}>
      <Table dataSource={cart} columns={cols} />
    </ConfigProvider>
    </>
  )
}

export default CartTable