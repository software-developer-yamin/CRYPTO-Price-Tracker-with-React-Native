import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

const index = ({ symbol, currentPrice }) => {
  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState(currentPrice.usd.toString());

  const changeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value) || 0;
    setUsdValue((floatValue * currentPrice.usd).toString());
  };

  const changeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value) || 0;
    setCoinValue((floatValue / currentPrice.usd).toString());
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Text style={{ color: "white", alignSelf: "center" }}>
          {symbol.toUpperCase()}
        </Text>
        <TextInput
          style={styles.InputStyle}
          value={coinValue}
          keyboardType={"numeric"}
          onChangeText={changeCoinValue}
        />
      </View>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Text style={{ color: "white", alignSelf: "center" }}>USD</Text>
        <TextInput
          style={styles.InputStyle}
          value={usdValue}
          keyboardType={"numeric"}
          onChangeText={changeUsdValue}
        />
      </View>
    </View>
  );
};

export default index;
