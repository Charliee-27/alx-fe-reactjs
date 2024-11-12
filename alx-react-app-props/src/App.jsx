import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext, { UserProvider } from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <UserProvider value={userData}>
        <ProfilePage />
      </UserProvider>
    </UserContext.Provider>
  );
}

export default App;
