import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies("token", "", {
    path: "/",
    expires: new Date(Date.now() + 8 * 60 * 60),
    maxAge: 8 * 60 * 60,
    sameSite: "lax",
  });
  const [token, setToken] = useState("");

  useEffect(() => {
    const newToken = cookies.token;
    if (newToken) setToken(newToken);
  }, [cookies.token]);

  return (
    <UserContext.Provider value={{ token, setCookie, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
