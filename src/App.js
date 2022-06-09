import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import axios from "axios";
import { useEffect } from "react";
import CoinPage from "./pages/CoinPage";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    });
  }, [url]);

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home coins={coins} />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path="/coin/:coinId" element={<CoinPage />}>
          <Route path=":coinId" />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
