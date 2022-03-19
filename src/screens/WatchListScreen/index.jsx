import { Text, View } from "react-native";
import { useWatchList } from "../../contexts/WatchListContext";

const WatchListScreen = () => {
  const { watchListCoinIds } = useWatchList();
  console.log(watchListCoinIds);
  return (
    <View>
      <Text style={{ color: "white" }}>WatchList Screen</Text>
    </View>
  );
};

export default WatchListScreen;
