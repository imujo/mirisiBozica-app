import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

export default function AllDayList({ events, loading, error, navigation }) {
  if (loading) {
    return <Text style={{ height: 35 }}>Loading...</Text>;
  } else if (error) {
    return <Text>Error</Text>;
  }

  return (
    <View style={{ minHeight: 35 }}>
      {events.map((item, i) => {
        return (
          <TouchableNativeFeedback
            key={i}
            onPress={() => {
              navigation.navigate("AddApartmentScreen", {
                event_id: item.event_id,
                type: "edit",
              });
            }}
          >
            <View style={styles.item}>
              <Text style={[styles.bold, styles.text]}>{item.guest}</Text>
              {item.n_adults != 0 && (
                <Text style={styles.text}>Odrasli: {item.n_adults}</Text>
              )}
              {item.n_children != 0 && (
                <Text style={styles.text}>Djeca: {item.n_children}</Text>
              )}
              {item.price != 0 && (
                <Text style={styles.text}>Cijena: €{item.price}</Text>
              )}
            </View>
          </TouchableNativeFeedback>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#aecbeb",
    marginVertical: 3,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderLeftColor: "#00487c",
    borderLeftWidth: 5,
    height: 30,
  },
  bold: {
    fontWeight: "700",
    marginRight: 15,
    fontSize: 15,
  },
  text: {
    marginRight: 12,
    fontSize: 13,
    color: "#00487c",
  },
});
