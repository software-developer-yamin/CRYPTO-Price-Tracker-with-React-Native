import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const WatchListContext = createContext();

export const useWatchList = () => useContext(WatchListContext);

const WatchListProvider = ({ children }) => {
  const [watchListCoinIds, setWatchListCoinIds] = useState([]);

  const getWatchListData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@watchlist_coins");
      setWatchListCoinIds(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getWatchListData();
  }, []);

  const storeWatchlistCoinId = async (coinId) => {
    try {
      const newWatchList = [...watchListCoinIds, coinId];
      const jsonValue = JSON.stringify(newWatchList);
      await AsyncStorage.setItem("@watchlist_coins", jsonValue);
      setWatchListCoinIds(newWatchList);
    } catch (e) {
      console.log(e);
    }
  };

  const removeWatchlistCoinId = async (coinId) => {
    try {
      const newWatchList = watchListCoinIds.filter(
        (coinValue) => coinValue !== coinId
      );
      const jsonValue = JSON.stringify(newWatchList);
      await AsyncStorage.setItem("@watchlist_coins", jsonValue);
      setWatchListCoinIds(newWatchList);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <WatchListContext.Provider
      value={{ watchListCoinIds, storeWatchlistCoinId, removeWatchlistCoinId }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListProvider;
