import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
    const [val,setVal]=useState([]);
    const getProducts = () =>{
        const api="https://fakestoreapi.com/products"
        axios.get(api).then((response)=>{
            console.log(response);
            setVal(response.data);
        }).catch((error)=>{console.log(error);});
    }
    console.log(val);
return (
    <div className='h-screen w-full flex justify-center items-center flex-col'>
        <button onClick={getProducts} className='p-3 bg-red-300 rounded-md overflow-hidden text-lg hover:bg-red-400 cursor-pointer ' >
            Call API
        </button>
        <ul className=''>
            {val.length>0?val.map((data,index)=><li key={index}>{data.title}</li>):"Loading"}
        </ul>
    </div>
 )
}

export default App;