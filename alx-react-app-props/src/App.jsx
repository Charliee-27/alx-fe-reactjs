import React from 'react';
import { UserProvider } from './UserContext';
import ProfilePage from './ProfilePage';

function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

    return (
        <UserProvider value={userData}>
            <ProfilePage />
        </UserProvider>
    );
}

export default App;
