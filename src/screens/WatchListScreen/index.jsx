import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import CoinItem from "../../components/CoinItem";
import { useWatchList } from "../../contexts/WatchListContext";

const WatchListScreen = () => {
  const { watchListCoinIds} = useWatchList();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const transformCoinIds = () => watchListCoinIds.join("%2C");

  const fetchCoins = async (pageNumber = 1) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${transformCoinIds()}&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`
    );
    setCoins((exitingCoins) => [...exitingCoins, ...res.data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  console.log(watchListCoinIds);
  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinItem marketCoin={item} key={item.id} />}
    />
  );
};

export default WatchListScreen;
