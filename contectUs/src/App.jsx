import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation'
import ContactHeader from './Components/ContactHeader'
import ContactForm from './Components/ContactForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/> 
      <ContactHeader/>
      <ContactForm/>
    </>
  )
}

export default App
