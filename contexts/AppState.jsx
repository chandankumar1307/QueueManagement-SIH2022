import React, { createContext, useState } from "react";

const initialState = {
    isAuthenticated: false,
};

export const AppStateContext = createContext(initialState);

export const AppStateProvider = ({ children }) => {
    const [appState, setAppState] = useState(initialState);

    return (
        <AppStateContext.Provider value={{appState, setAppState}}>
            {children}
        </AppStateContext.Provider>
    );
};
