import React, { useState, useRef, useEffect } from 'react'
import { Input } from '@headlessui/react'
import validator from 'validator';

const App = () => {
  const [url, setUrl] = useState("ben")
  
  const handleSubmit = () => {
    if(validator.isURL(url))
    {
      console.log(`The URL ${url} you entered is a fine url`)
    }
    else
    console.log(`The URL ${url} you entered isn't a fine url`)
  }

  return (
    <div style={{width: "90vw", height: "90vh", paddingBlock: "30px", paddingInline: "50px", backgroundColor: "#3b3b3b", borderRadius: "10px"}}>
      <h1 style={{ color: "white", fontSize: "4rem", fontWeight: "800"}}>
        Please enter the URL below!
      </h1>
      <Input style={{width: "45%", borderRadius: "10px", paddingBlock: "20px", paddingInline: "20px", backgroundColor: "#1c1c1c", border: "none", fontSize: "1.5rem"}} type='text' onChange={e => setUrl(e.target.value)}></Input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App