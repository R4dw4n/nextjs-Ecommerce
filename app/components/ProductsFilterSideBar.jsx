import { Checkbox, ConfigProvider, Radio } from "antd"
import { useEffect, useState } from "react";
import { categoriesMap, checkboxes, radios, sortingFunctions } from "../products/filteringData"

const ProductsFilterSideBar = ({mask, setMask, products, filteredProducts, setFilteredProducts}) => {
  const [sortingValue, setSortingValue] = useState(4);
  const boxChange = (val) => {
    let tmp = 0;
    val.forEach((bit) => {
      tmp += Math.pow(2, bit);
    });
    setMask(tmp);
  }
  const radioChange = (e) => {
    setSortingValue(e.target.value);
  }

  //FILTERING AND SORTING
  useEffect(() => {
    let tmp = products;
    tmp.sort(sortingFunctions[sortingValue]);
    tmp = tmp.filter((product) => {
      return mask === 0 || (mask & Math.pow(2, categoriesMap[product.category]));
    })
    setFilteredProducts([...tmp]);
  }, [products, mask, sortingValue]);
  
  return (
    <div className="py-16 pl-8 w-80 h-full">
      <ConfigProvider theme={{
        token: {
          colorPrimary: "#f5cd47",
          colorText: "#fff"
        }
      }}>
        <div className="w-full h-full" style={{
            borderRight: '1px solid lightgray'
          }}>
        {
          checkboxes.map((item, ind) => {
            return (
              <div key={ind} style={{
                borderBottom: '1px solid lightgray',
                marginBottom: '20px',
                paddingBottom: '10px'
              }}>
                <p className="mb-4 font-sans">{item.title}</p>
                <Checkbox.Group className="flex flex-col justify-around gap-4" options={item.options} onChange={boxChange}/>
              </div>
            )
          })
        }
          <div style={{
              borderBottom: '1px solid lightgray',
              marginBottom: '20px',
              paddingBottom: '10px'
          }}>
            <p className="mb-4 font-sans">{radios.title}</p>
            <Radio.Group className="flex flex-col justify-around gap-4" options={radios.groups} onChange={radioChange} defaultValue={4} />
          </div>
        </div>
      </ConfigProvider>
    </div>
  )
}

export default ProductsFilterSideBar