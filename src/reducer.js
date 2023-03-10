

// create a context (warehouse)
// provider
// consumer

const AppContext = React.createContext();

const AppProvider = ({children}) => {
<AppContext.Provider>{children}</AppContext.Provider>;
};
