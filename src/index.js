import { ChakraProvider } from "@chakra-ui/provider";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <CookiesProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CookiesProvider>
    </ChakraProvider>
  </BrowserRouter>
);
