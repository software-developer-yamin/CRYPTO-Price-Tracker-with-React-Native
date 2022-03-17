import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const index = ({ image, symbol, marketCapRank }) => {
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="chevron-back" size={30} color="white" />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            #{marketCapRank}
          </Text>
        </View>
      </View>
      <EvilIcons name="user" size={30} color="white" />
    </View>
  );
};

export default index;
