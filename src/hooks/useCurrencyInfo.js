import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));

      //data set the value of currency come that converted to any currency ...and then handle by Objects.keys[to]
  }, [data]);
  return data;
}

export default useCurrencyInfo;
