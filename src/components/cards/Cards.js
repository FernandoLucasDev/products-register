import React, { useEffect, useState } from 'react';
import './Cards.css'
import GetProducts from './Api';

const Card = () => {
    const [data, setData] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [skuList, setSkuList] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const apiData = await GetProducts();
          setData(apiData);
          let skuValues = apiData.map(item => item.SKU);
          setSkuList(skuValues);
        } catch (error) {
          console.error(error);
          setData([]);
        }
      };
      fetchData();
    }, []);

    const handleCheckboxChange = (productId) => {
      if (selectedIds.includes(productId)) {
        setSelectedIds(selectedIds.filter((id) => id !== productId));
      } else {
        setSelectedIds([...selectedIds, productId]);
      }
    };

  localStorage.setItem("SKUs", skuList);
  localStorage.setItem("dataDelete", selectedIds);
  
    return (
        <div className="back">
        {data.map((product) => (
          <div key={product.id} className="card-container">
            <div className='info'>
                <div className='check'>
                  <form>
                      <input
                      type='checkbox'
                      className='delete-checkbox'
                      checked={selectedIds.includes(product.id)}
                      onChange={() => handleCheckboxChange(product.id)}
                    />
                  </form>
                </div>
                <p>{product.SKU}</p>
                <h3>{product.product_name}</h3>
                <p>{product.product_price}$</p>
                {
                  product.product_type === 'dvd' ?
                  (
                  <>
                  <p>Size: {product.size}MB</p>
                  </>
                  ) 
                  : product.product_type === 'book' ?
                  (
                  <>
                  <p>Weight: {product.weight}KG</p>
                  </>
                  ) : (
                  <>
                  <p>Dimentions: {product.height}x{product.width}x{product.length}</p>
                  </>
                  )
                }
            </div>
          </div>
        ))}
      </div>
    );
  };
  
export default Card;