import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import { UserContext } from './components/UserContext'
import ProfilePage from './ProfilePage'
import UserDetails from './UserDetails'


function App() {
  const [userData, setUserData] = useState(0)
  const [ShowProfile, setShowProfile] = useState(false)


  return (
    <>
      "<WelcomeMessage />"
      <hr></hr>
        <Header />
        <MainContent />

        <UserContext.Provider value={{ userData, setUserData}}> 
          {ShowProfile ? <ProfilePage/> : <UserDetails/>}
        </UserContext.Provider>

        <Footer />
      <hr></hr>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <hr></hr>
    </>
  );
}

export default App
