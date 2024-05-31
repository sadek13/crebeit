import { useState, useEffect } from 'react';

const UseList=(url)=>{

    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(null);
    const [error,setError]=useState(null);


useEffect(()=>{
    fetch(url)
    .then((res)=>{
        console.log(res);
        return res.json
    })
    .then((res)=>{
        console.log(res);

        setData(res);
    })
    .catch(error=>{
        return error.json
    }
    )
})
return {data, error,isPending}
}

export default UseList;