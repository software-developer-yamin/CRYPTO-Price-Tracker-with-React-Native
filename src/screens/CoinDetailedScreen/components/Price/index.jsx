import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";
import styles from "./styles";

const index = ({ name, currentPrice, priceChangePercentage24h }) => {
  const percentageColor = priceChangePercentage24h < 0 ? "#ea3943" : "#16c784";
  const percentageIconName =
    priceChangePercentage24h < 0 ? "caretdown" : "caretup";

  return (
    <View style={styles.priceContainer}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.currentPrice}>{`$${currentPrice.usd}`}</Text>
      </View>
      <View
        style={{
          backgroundColor: percentageColor,
          flexDirection: "row",
          borderRadius: 5,
          paddingHorizontal: 3,
          paddingVertical: 8,
          alignItems: "center",
        }}
      >
        <AntDesign
          name={percentageIconName}
          size={12}
          color={"white"}
          style={{ alignSelf: "center", marginRight: 5 }}
        />
        <Text style={styles.priceChange}>
          {priceChangePercentage24h.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
};

export default index;
