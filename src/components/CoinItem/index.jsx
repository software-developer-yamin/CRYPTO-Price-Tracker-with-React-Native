import { AntDesign } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const index = () => {
  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        }}
        style={{
          width: 30,
          height: 30,
          marginRight: 10,
          alignSelf: "center",
        }}
      />
      <View>
        <Text style={styles.title}>Bitcoin</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>1</Text>
          </View>
          <Text style={styles.text}>BTC</Text>
          <AntDesign
            name="caretdown"
            size={12}
            color="white"
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={styles.text}>0.68%</Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text style={styles.title}>56265.09</Text>
        <Text style={styles.text}>MCap 1.076 T</Text>
      </View>
    </View>
  );
};

export default index;
