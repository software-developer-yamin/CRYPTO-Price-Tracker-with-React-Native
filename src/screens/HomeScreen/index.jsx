import { FlatList } from "react-native";
import cryptocurrencies from "../../../assets/data/cryptocurrencies.json";
import CoinItem from "../../components/CoinItem";

const index = () => {
  return (
    <FlatList
      data={cryptocurrencies}
      renderItem={({ item }) => <CoinItem marketCoin={item} />}
    />
  );
};

export default index;
