import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'

function App() {

  return (
    <>
      "<WelcomeMessage />"
      <hr></hr>
        <Header />
      <hr></hr>
        <MainContent />
        <Counter/>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <hr></hr>
        <Footer />
    </>
  );
}

export default App
