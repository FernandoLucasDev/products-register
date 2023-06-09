import React, { useEffect, useState } from 'react';
import { Create } from '../op_buttons/Options';
import './Add.css'

const Add = () => {

    const [SKU, setSku] = useState(null);
    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const [type, setType] = useState('dvd');
    const [size, setSize] = useState(null);
    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const [length, setLenght] = useState(null);
    const [dataAll, setDataAll] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [msg, setMsg] = useState('');

    let skus = localStorage.getItem("SKUs");

    function sendFormData(e) {
        e.preventDefault();
       
    }

    useEffect(() => {
        const sendData = () => {
            setDataAll({
                sku: SKU,
                name: name,
                price: price,
                type: type,
                size: size,
                weight: weight,
                height: height,
                width: width,
                length: length,
              })
            };
            sendData();
        }, [SKU, name, price, type, size, weight, height, width, length]);

        useEffect(() => {
            if (Object.keys(dataAll).length !== 0) {
                localStorage.setItem('dataCreate', JSON.stringify(dataAll));
            }
        }, [dataAll]);

        useEffect(() => {
            const checkFormValidity = () => {
              if (
                dataAll.sku === null ||
                dataAll.name === null ||
                dataAll.price === null ||
                (dataAll.type === 'dvd' && dataAll.size === null) ||
                (dataAll.type === 'book' && dataAll.weight === null) ||
                (dataAll.type === 'furniture' && (dataAll.height === null || dataAll.width === null || dataAll.length === null))
              ) {
                return false;
              }
              if(skus.includes(SKU)) {
                return false;
              }
              return true;
            };
          
            let isValid = checkFormValidity();
            setIsFormValid(isValid)
            localStorage.setItem('isFormValid', isFormValid);
          }, [dataAll]);

          useEffect(() => {
            if(!isFormValid) {
                setMsg("Please, submit required data")
            } else {
                setMsg('');
            }
          }, [isFormValid]);
          

    return (
        <>
        <div className='back_form'>
        <p className='alertMsg'>{msg}</p>
        <form onSubmit={sendFormData} id='product_form'>
            <div>
                <label htmlFor="SKU"><strong>SKU</strong></label><br></br>
                {skus.includes(SKU) ? <p>This SKU already exists!</p> : <></>}
                <input type='text' id='sku' name='sku' className='input' placeholder='SKU'  onChange={(e) => setSku(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="SKU"><strong>Name</strong></label><br></br>
                <input type='text' id='name' name='name' className='input' placeholder='Name' onChange={(e) => setName(e.target.value)}  required/>
            </div>
            <div>
                <label htmlFor="SKU"><strong>Price</strong></label><br></br>
                <input type='number' step="0.01" min="0" id='price' name='price' className='input' placeholder='Price' onChange={(e) => setPrice(e.target.value)}  required />
            </div>
            <div>
                <label htmlFor="type"><strong>Price</strong></label><br></br>
                <select name="productType" id="productType" className='input' value={type} onChange={(e) => setType(e.target.value)} required>
                    <option value="dvd">DVD</option>
                    <option value="book">Book</option>
                    <option value="furniture ">Furniture</option>
                </select>
            </div>
            {
            type === "dvd" ? 
                (
                <>
                    <div>
                        <label htmlFor="size"><strong>Size</strong></label><br></br>
                        {size === null ? <p className='alertMsg'>Plase, provide size!</p> : <></>}
                        <input type='number' id='size' name='size' className='input' placeholder='Size' onChange={(e) => setSize(e.target.value)}  required/>
                    </div>
                </>
                )
                : type === "book" ? 
                (
                <>
                    <div>
                        <label htmlFor="weight"><strong>Weight (KG)</strong></label><br></br>
                        {weight === null ? <p className='alertMsg'>Plase, provide weight!</p> : <></>}
                        <input type='number' step="0.01" min="0" id='weight' name='weight' className='input' placeholder='Weight' onChange={(e) => setWeight(e.target.value)}  required/>
                    </div>
                </>
                )
                :
                (
                    <>
                    <div>
                        <label htmlFor="height"><strong>Height (cm)</strong></label><br></br>
                        {height === null ? <p className='alertMsg'>Plase, provide height!</p> : <></>}
                        <input type='number' id='height' name='height' className='input' placeholder='Height' onChange={(e) => setHeight(e.target.value)}  required/>
                    </div>
                    <div>
                        <label htmlFor="size"><strong>Width (cm)</strong></label><br></br>
                        {width === null ? <p className='alertMsg'>Plase, provide width!</p> : <></>}
                        <input type='number' id='size' name='size' className='input' placeholder='Width' onChange={(e) => setWidth(e.target.value)}  required/>
                    </div>
                    <div>
                        <label htmlFor="lenght"><strong>Lenght (cm)</strong></label><br></br>
                        {length === null ? <p className='alertMsg'>Plase, provide length!</p> : <></>}
                        <input type='number' id='lenght' name='lenght' className='input' placeholder='Lenght' onChange={(e) => setLenght(e.target.value)}  required/>
                    </div>
                </>
                )
            }
        </form>
        </div>
        <Create data={dataAll} />
        </>
    )
}

export default Add;