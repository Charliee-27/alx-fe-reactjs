import { useState } from 'react'
import './App.css'
import WelcomeMessage from './WelcomeMessage'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import UserProfile from './UserProfile'

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
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <hr></hr>
    </>
  );
}

export default App
