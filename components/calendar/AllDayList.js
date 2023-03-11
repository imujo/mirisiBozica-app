import { View, Text, StyleSheet } from "react-native";

export default function AllDayList({ events, loading, error }) {
  if (loading) {
    return <Text>Loading...</Text>;
  } else if (error) {
    return <Text>Error</Text>;
  }

  return (
    <View>
      {events.map((item, i) => {
        return (
          <View key={i} style={styles.item}>
            <Text style={styles.text}>{item.guest}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#a2d2ff",
    marginVertical: 3,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  text: {
    fontWeight: "700",
    color: "white",
  },
});
