"use client"
import React from 'react'
import { useState } from 'react'
const page = () => {
  const [url, seturl] = useState('');
  const [shorturl, setshorturl] = useState('');
  const [generated, setgenerated] = useState(false);
  const generate= () => {

  const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")   
                setshorturl("")
                console.log(result)
                alert(result.message)
            
            })
            .catch((error) => console.error(error));
    }

  return (
    <div className='flex m-10 flex-col items-center justify-center mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg'>
     <div className='text-2xl font-bold'>Generate Your Short URL</div>
     <div className='flex mt-4 gap-3 flex-col items-center justify-center'>
        <input className='px-2 bg-white focus:outline-purple-600 rounded-md py-1' type="text" placeholder="Enter your long URL here" 
        value={url}
        onChange={e=>{seturl(e.target.value)}} />
        <input className='px-2 bg-white focus:outline-purple-600 rounded-md py-1' type="text" placeholder="Enter preferred alias"
        value={shorturl}
        onChange={e=>{setshorturl(e.target.value)}} />
        <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={generate}>Generate</button>
     </div>
    </div>
  )
}

export default page
