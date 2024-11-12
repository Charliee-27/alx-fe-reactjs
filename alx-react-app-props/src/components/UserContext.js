import React, { createContext, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children, value }) => (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
);

export { UserProvider };
export default UserContext;
