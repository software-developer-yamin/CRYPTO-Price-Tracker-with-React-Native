import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { useWatchList } from "../../../../contexts/WatchListContext";
import styles from "./styles";

const index = ({ image, symbol, marketCapRank, coinId }) => {
  const navigation = useNavigation();

  const { watchListCoinIds, storeWatchlistCoinId, removeWatchlistCoinId } =
    useWatchList();

  const checkIfCoinIsWatched = () =>
    watchListCoinIds.some((coinValue) => coinValue === coinId);

  const handleWatchListCoin = () => {
    console.log("WatchlistCoin");
    if (checkIfCoinIsWatched()) {
      return removeWatchlistCoinId(coinId);
    } else {
      return storeWatchlistCoinId(coinId);
    }
  };

  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name="chevron-back"
        size={30}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            #{marketCapRank}
          </Text>
        </View>
      </View>
      <FontAwesome
        name={checkIfCoinIsWatched() ? "star" : "star-o"}
        size={25}
        color={checkIfCoinIsWatched() ? "#FFBF00" : "white"}
        onPress={handleWatchListCoin}
      />
    </View>
  );
};

export default index;
