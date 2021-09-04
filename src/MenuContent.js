import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { content } from "./Utils";

// interface MenuContentProps {
//   type: 'General' | 'Car' | 'Flight';
// }

export const MenuContent = ({ type, ...rest }) => {
  const renderContent = () => {
    const menuContent = content.filter((i) => i.type.includes(type));
    return menuContent.map((menuItem) => {
      return (
        <TouchableOpacity
          key={menuItem.id}
          style={styles.container}
          onPress={() => console.log("Hi!")}
        >
          <Text style={styles.button}>{menuItem.name}</Text>
        </TouchableOpacity>
      );
    });
  };
  return <View>{renderContent()}</View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    justifyContent: "center",
  },
  button: {
    color: "#132D42",
    lineHeight: 23,
    fontSize: 16,
    paddingTop: 13.5,
    paddingBottom: 7.5,
  },
});
