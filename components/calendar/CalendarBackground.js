import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Columns from "../Columns";
import Rows from "../Rows";

export default function CalendarBackground({ hourHeight, children }) {
  return (
    <ScrollView style={{ paddingHorizontal: 10 }}>
      {/* HOURS COLUMN */}
      <Columns.ColumnsContainer>
        <Columns.Column style={{ flex: 0, width: 60 }}>
          <Rows.RowsContainter>
            {[...Array(24).keys()].map((hour, i) => {
              return (
                <Rows.Row key={i} style={[styles.row, { height: hourHeight }]}>
                  <View
                    style={{
                      height: 1,
                      backgroundColor: "lightgray",
                      width: "30%",
                      alignSelf: "flex-end",
                    }}
                  />
                  {hour != 0 && (
                    <Text style={styles.hourText}>{hour + ":00"}</Text>
                  )}
                </Rows.Row>
              );
            })}
          </Rows.RowsContainter>
        </Columns.Column>

        {/* EVENTS COLUMN */}

        <Columns.Column>
          <Rows.RowsContainter>
            {[...Array(24).keys()].map((hour, i) => {
              return (
                <Rows.Row key={i} style={[styles.row, { height: hourHeight }]}>
                  <View
                    style={{
                      height: 1,
                      backgroundColor: "lightgray",
                      width: "100%",
                    }}
                  />
                </Rows.Row>
              );
            })}
          </Rows.RowsContainter>
          {children}
        </Columns.Column>
      </Columns.ColumnsContainer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#cdb4db",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    marginRight: 20,
    position: "absolute",
    width: "100%",
  },
  row: {
    flex: 0,
  },
  hourText: {
    fontSize: 13,
    position: "absolute",
    top: "-16%",
  },
});
