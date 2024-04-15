'use client'
import { ConfigProvider, Pagination } from 'antd';
import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import ProductsFilterSideBar from '../components/ProductsFilterSideBar';
import { getProducts } from './fetchData';

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [mask, setMask] = useState(0);

  const changePage = (page) => {
    setCurrentPage(page);
  }

  useEffect(() => {
    getProducts(`https://dummyjson.com/products?limit=9&skip=${(currentPage-1) * 9}`, setProducts);
  }, [currentPage]);

  return (
    <div className='flex'>
      <div>
        <ProductsFilterSideBar mask={mask} setMask={setMask} filteredProducts={filteredProducts}
          products={products} setFilteredProducts={setFilteredProducts} />
      </div>

      <div className="p-4">
        <Cards products={filteredProducts} gap={6} width={250} height={250} loading={products.length === 0} />
        <ConfigProvider
          theme={{
            token: {
              colorPrimaryBorder: '#000',
              colorPrimary: '#f5cd47',
              colorText: '#fff',
              colorBgTextHover: 'rgba(100, 100, 100, 0.09)'
            },
            components: {
              Pagination: {
                itemActiveBg: '#000',
                itemBg: 'lightgray',
                itemLinkBg: 'lightgray',
              },
            },
          }}
        >
        <Pagination current={currentPage} pageSize={9} total={100} showSizeChanger={false} onChange={changePage} />
      </ConfigProvider>
      </div>
    </div>
  )
}

export default Page