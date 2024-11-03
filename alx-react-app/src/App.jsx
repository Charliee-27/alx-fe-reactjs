import { useState } from 'react'
import './App.css'
import WelcomeMessage from './WelcomeMessage'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage/>
      <hr></hr>
        <Header/>
        <MainContent/>
        <Footer/>
      <hr></hr>
        <UserProfile name='Charles Mizinga' age='22' bio='Hey there am learning React with alx veryy well structured'/>
    </>
  );
}

export default App
