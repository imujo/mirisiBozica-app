import { FlatList, Text } from "react-native";

export default function List({
  data,
  renderItem,
  isError,
  isLoading,
  keyExtractor,
}) {
  if (isError) {
    return <Text>Error</Text>;
  } else if (isLoading) {
    return <Text>Loading</Text>;
  } else if (data.length) {
    return (
      <FlatList
        data={data}
        keyExtractor={keyExtractor ? keyExtractor : (item) => item.id}
        renderItem={renderItem}
      />
    );
  } else {
    return <Text>Nema podataka</Text>;
  }
}
