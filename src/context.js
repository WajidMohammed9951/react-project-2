


// create a context (warehouse)
// provider
// consumer

import React,{ useContext } from "react";



const AppContext = React.createContext();

const AppProvider = ({children}) => {
<AppContext.Provider value="wajid mohammed">{children}</AppContext.Provider>;
};

// globalcustom hook
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };