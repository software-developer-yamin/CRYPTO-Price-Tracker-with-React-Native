import { View } from "react-native";
import Coin from "../../../assets/data/crypto.json";
import CoinDetailHeader from "./components/CoinDetailHeader";

const index = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank },
  } = Coin;

  return (
    <View>
      <CoinDetailHeader
        image={small}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
    </View>
  );
};

export default index;
