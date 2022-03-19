import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { View } from "react-native";
import Loading from "../../components/Loading";
import Header from "./components/Header";
import Price from "./components/Price";
import PriceConverter from "./components/PriceConverter";

const CoinDetailedScreen = () => {
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(false);

  const route = useRoute();
  const {
    params: { coinId },
  } = route;

  useEffect(async () => {
    setLoading(true);
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    setCoin(res.data);
    setLoading(false);
  }, [coinId]);

  if (loading || !coin) {
    return <Loading />;
  }

  const {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = coin;

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Header image={small} symbol={symbol} marketCapRank={market_cap_rank} />
      <Price
        name={name}
        currentPrice={current_price}
        priceChangePercentage24h={price_change_percentage_24h}
      />
      <PriceConverter symbol={symbol} currentPrice={current_price} />
    </View>
  );
};

export default CoinDetailedScreen;
