import React, { useEffect, useState } from 'react';
import './Options.css'
import './Api'
import deleteProduct from './Api';
import createProduct from '../add/API';

let candeleteFlag = false;
let cancreateFlag = false;

const Options = (props) => {

    const { route } = props;
   
    return (
        <>
        <div className='options-bar'>
            <div className='content'>
               {route === "/" ?  <h2 className='title'>Product List</h2> : <h2 className='title'>Add Product</h2>}
                <div className='buttons'>
                    {route === "/" ?
                    (
                    <>
                    <a className='btn' href='/add'>Add</a>
                    <a className='btn' onClick={SetValueDelete}>Mass delete</a>
                    </>
                    )
                    :
                    (
                    <>
                    <a className='btn' onClick={SetValueCreate}>Save</a>
                    <a className='btn' href='/'>Cancel</a>
                    </>
                    )
                }   
                </div>
            </div>
        </div>
        </>
    )
}

const DeleteData = (ids) => {
    if(candeleteFlag){
       ids.forEach(id => {
            deleteProduct(id);
       });
    }
}

const Create = () => {
    let data = localStorage.getItem('dataCreate');
    let permission = localStorage.getItem('isFormValid');
    if(cancreateFlag && permission == "true") {
        createProduct(JSON.parse(data));
        cancreateFlag = false;
    }
    console.log(permission)
}

const SetValueDelete = () => {
    let data = localStorage.getItem('dataDelete');
    let list = data.split(",");
    candeleteFlag = true;
    DeleteData(list);
}

const SetValueCreate = () => {
    cancreateFlag = true;
    Create();
}

export {
    Options,
    DeleteData,
    Create
};