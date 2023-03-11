


// create a context (warehouse)
// provider
// consumer

import React from "react";



const AppContext = React.createContext();

const AppProvider = ({children}) => {
<AppContext.Provider value="wajid mohammed">{children}</AppContext.Provider>;
};


export { AppContext, AppProvider };