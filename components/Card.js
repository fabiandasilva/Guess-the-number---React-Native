import { StyleSheet, View } from "react-native";

import React from "react";

const Card = (props) => (
   <View style={{ ...styles.inputCard, ...props.styles }}>
      {props.children}
   </View>
);
const styles = StyleSheet.create({
   inputCard: {
     justifyContent: "center",
     alignContent: "center",
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

export default Card;
