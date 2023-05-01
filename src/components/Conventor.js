import React, { useState } from 'react';
import "../css/Comment.css";

function Conventor(props) {
  const [priceInUAH, setPriceInUAH] = useState(props.price);
  const [priceInUSD, setPriceInUSD] = useState(convertUAHtoUSD(props.price));

  const handlePriceInUAHChange = (e) => {
    const newPriceInUAH = parseFloat(e.target.value);
    setPriceInUAH(newPriceInUAH);
    setPriceInUSD(convertUAHtoUSD(newPriceInUAH));
  };

  const handlePriceInUSDChange = (e) => {
    const newPriceInUSD = parseFloat(e.target.value);
    setPriceInUSD(newPriceInUSD);
    setPriceInUAH(convertUSDtoUAH(newPriceInUSD));
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h2>Price</h2>
      <label htmlFor="priceInUAH">Price in UAH:</label>
      <input
        type="number"
        id="priceInUAH"
        value={priceInUAH}
        onChange={handlePriceInUAHChange}
      />
      <label htmlFor="priceInUSD">Price in USD:</label>
      <input
        type="number"
        id="priceInUSD"
        value={priceInUSD}
        onChange={handlePriceInUSDChange}
      />
    </div>
  );
}

function convertUAHtoUSD(uah) {
  const exchangeRate = 0.027;
  return uah * exchangeRate;
}

function convertUSDtoUAH(usd) {
  const exchangeRate = 36.95;
  return usd * exchangeRate;
}

export default Conventor;
