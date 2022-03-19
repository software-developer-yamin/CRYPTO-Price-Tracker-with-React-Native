import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import CoinItem from "../../components/CoinItem";

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async (pageNumber = 1) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`
    );
    setCoins((exitingCoins) => [...exitingCoins, ...res.data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const refreshCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h"
    );
    setCoins(res.data);
    setLoading(false);
  };

  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinItem marketCoin={item} key={item.id} />}
      onEndReached={() => fetchCoins(coins.length / 50 + 1)}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor="white"
          onRefresh={refreshCoins}
        />
      }
    />
  );
};

export default HomeScreen;
