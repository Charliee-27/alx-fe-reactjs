import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext, { UserProvider } from './UserContext';
import UserProfile from './components/UserProfile';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <UserProvider value={userData}>
        <ProfilePage />
        <UserProfile />
      </UserProvider>
    </UserContext.Provider>
  );
}

export default App;
