import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import images from "./utils/images";
import { SwipableMenu } from "./SwipableMenu";
import { MenuContent } from "./MenuContent";
//interface BarProps {type:string;}

export const Bar = ({ type }) => {
  const [isPanelActive, setIsPanelActive] = useState(false);
  const handleContactPress = () => {
    console.log("handleContactPress");
  };
  const handleActionsPress = (val) => {
    console.log("handleActionsPress", val);
    setIsPanelActive(val ? val : false);
  };

  return (
    <View style={styles.barContainer}>
      <SwipableMenu
        isPanelActive={isPanelActive}
        onClose={() => setIsPanelActive(false)}
      >
        <View style={styles.menuContent}>
          <MenuContent type={type} />
        </View>
      </SwipableMenu>

      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleContactPress()}
          >
            <Image source={images.contactButton} />
            <Text style={styles.buttonText}>{texts.contact}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actionButtonContainer}>
          <TouchableOpacity
            onPress={() => handleActionsPress(!isPanelActive)}
            style={styles.actionsButton}
          >
            {isPanelActive && (
              <Image
                source={images.actionsCloseButton}
                style={styles.actionsButtonImage}
              />
            )}

            {!isPanelActive && (
              <Image
                source={images.actionsOpenButton}
                style={styles.actionsButtonImage}
              />
            )}
          </TouchableOpacity>
          <Text style={[styles.buttonText, {}]}>{texts.actions}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleContactPress()}
          >
            <Image source={images.contactButton} />
            <Text style={styles.buttonText}>{texts.contact}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 99999,
  },
  button: {
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  menuContent: {
    paddingHorizontal: 20,
  },
  barContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  content: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#F8f8f8",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: "rgba(162,162,162,0.2)",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 1.0,
    shadowRadius: 2,
    elevation: 24,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  actionButtonContainer: {
    flex: 2.5,
    alignItems: "center",
  },
  actionsButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    top: -35,
  },
  actionsButtonImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});
const texts = {
  contact: "צור קשר",
  actions: "פעולות",
};
