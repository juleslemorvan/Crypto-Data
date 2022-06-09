import React, { useState, useEffect } from "react";
import axios from "axios";

const CoinPage = () => {
  const [coin, setCoin] = useState({});

  const url = "https://api.coingecko.com/api/v3/coins/bitcoin?sparkline=true";

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoin(res.data);
      console.log(res.data);
    });
  }, [url]);

  return (
    <div>
      <div>
        <img src={coin.image?.large} alt="" />
        <div>
          <p>{coin?.name} price</p>
          <p>({coin.symbol?.toUpperCase()} / EUR)</p>
        </div>
      </div>

      <div>
        <div>
          <div>
            {coin.market_data?.current_price ? (
              <p>€ {coin.market_data.current_price.eur.toLocaleString()}</p>
            ) : null}
            <p>7 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
