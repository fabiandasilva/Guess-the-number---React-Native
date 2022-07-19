import { StyleSheet, View } from "react-native";

import React from "react";

const CardNumber = (props) => (
   <View style={{ ...styles.inputCardNumber, ...props.styles }}>
      {props.children}
   </View>
);
const styles = StyleSheet.create({
   inputCardNumber: {
      justifyContent: "center",
      flexDirection: "row",
      alignContent: "space-around",
      alignItems: "center",

      backgroundColor: "white",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.53,
      shadowRadius: 13.97,
      elevation: 21,
   },
});

export default CardNumber;
