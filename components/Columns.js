import { Children, cloneElement } from "react";
import { StyleSheet, View } from "react-native";

function ColumnsContainer({ gap, style, children }) {
  const arrayChildren = Children.toArray(children);
  return (
    <View style={[localStyles.columns, style]}>
      {Children.map(arrayChildren, (child, index) => {
        const isLast = index == arrayChildren.length - 1;

        return cloneElement(child, { isLast, gap });
      })}
    </View>
  );
}

function Column({ isLast, gap, style, children }) {
  return (
    <>
      <View style={[localStyles.column, style]}>{children}</View>
      {!isLast && <View style={{ width: gap }} />}
    </>
  );
}

const localStyles = StyleSheet.create({
  columns: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});

export default { ColumnsContainer, Column };
