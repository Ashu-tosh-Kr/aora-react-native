import { createContext, useContext, useEffect } from "react";

const GlobalContext = createContext(null);

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    // If logged in, set user and isLoggedIn to true
    // Else, set isLoggedIn to false
  }, []);
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
