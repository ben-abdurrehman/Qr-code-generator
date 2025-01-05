import React, { useState } from 'react'
import styled from 'styled-components';

const App = () => {
  const [inputVal, setInputVal] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputVal()
    console.log()
  }
  const Container = styled.div
  `
  width: 90vw;
  height: 90vh;
  padding-block: 30px;
  padding-inline: 50px;
  background-color: #3b3b3b;
  border-radius: 10px;
  `
  const Text = styled.h1
  `
    color: white;
    font-size: 4rem;
    font-weight: 800;
  `
  const Input = styled.input
  `
    width: 45%;
    border-radius: 10px;
    padding-block: 20px;
    padding-inline: 20px;
    background-color: #1c1c1c;
    border: none;
    font-size: 1.5rem;


  `
  const Submit = styled.button
  `
    
  `
  return (
    <Container>
      <Text>
        Please enter the URL below!
      </Text>
      <Input type='text'></Input>
      <Submit onClick={() => handleSubmit(e)}>Submit</Submit>
    </Container>
  )
}

export default App