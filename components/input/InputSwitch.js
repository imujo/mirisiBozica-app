import { Switch, View, Text } from "react-native";

export default function InputSwitch({ title, value, setValue, style }) {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
        style,
      ]}
    >
      <Text>{title}</Text>
      <Switch value={value} onValueChange={setValue} />
    </View>
  );
}
