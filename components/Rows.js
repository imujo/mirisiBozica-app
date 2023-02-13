import { Children, cloneElement } from "react";
import { StyleSheet, View } from "react-native";

function RowsContainer({ gap, style, children }) {
  const arrayChildren = Children.toArray(children);
  return (
    <View style={[localStyles.rows, style]}>
      {Children.map(arrayChildren, (child, index) => {
        const isLast = index == arrayChildren.length - 1;

        return cloneElement(child, { isLast, gap });
      })}
    </View>
  );
}

function Row({ isLast, gap, style, children }) {
  return (
    <>
      <View style={[localStyles.row, style]}>{children}</View>
      {!isLast && <View style={{ width: gap }} />}
    </>
  );
}

const localStyles = StyleSheet.create({
  rows: {
    display: "flex",
    flexDirection: "row",
  },
  row: {
    flex: 1,
  },
});

export default { RowsContainer, Row };
