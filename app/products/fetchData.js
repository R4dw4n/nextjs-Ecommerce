import React from 'react'
import axios from "axios"

export const getProducts = (url, setProducts, one=0) => {
  axios.get(url)
  .then(response => {
    if(one) {
      setProducts(response.data);
    }else {
      setProducts(response.data.products);
    }
  })
  .catch(error => {
    console.log(error);
  })
}