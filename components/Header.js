import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";
import React from "react";

const Header = (props) => {
   const { title } = props;
   return (
      <View style={styles.header}>
         <Text style={styles.headerTitle}>{title}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   header: {
      width: "100%",
      height: 90,
      paddingTop: 36,
      backgroundColor: Colors.primary,
      alignItems: "center",
      justifyContent: "center",
   },
     headerTitle: {
          color: "white",
          fontSize: 22,
     }
});

export default Header;
