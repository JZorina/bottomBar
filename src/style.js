import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    zIndex: 99,
    backgroundColor: "#F8f8f8",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: "rgba(162,162,162,0.2)",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 1.0,
    shadowRadius: 2,
    elevation: 24,
    //bottom: 30,
    width: "100%",
    height: "100%",
  },

  menuContent: {
    paddingHorizontal: 20,
  },
  content: {
    zIndex: 99,
    top: 7,
    width: "100%",
    height: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    alignSelf: "flex-end",
  },

  contactButtonImage: {
    width: 16,
    height: 16,
    right: 7,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonText: {
    color: "#132d42",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "70%",
  },
  actionsButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    // top: -35,
    width: 70,
    //   backgroundColor: "pink",
    borderRadius: 50,
  },
  actionButtonContainer: {
    flex: 2.5,
    alignItems: "center",
    justifyContent: "space-between",
    //backgroundColor: "purple",
    top: -15,
  },
  actionsButtonImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    zIndex: 99999,
  },
  void: {
    height: 20,
    width: "100%",
    backgroundColor: "green",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
