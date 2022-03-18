import { View } from "react-native";
import Coin from "../../../assets/data/crypto.json";
import CoinDetailHeader from "./components/CoinDetailHeader";
import CoinDetailPriceView from "./components/CoinDetailPriceView";

const index = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <CoinDetailHeader
        image={small}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <CoinDetailPriceView
        name={name}
        currentPrice={current_price}
        priceChangePercentage24h={price_change_percentage_24h}
      />
    </View>
  );
};

export default index;
