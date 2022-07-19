import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";
import React from "react"

const NumberContainer = (props) => {
     return(
          <View style={styles.container}>
               <Text styles={styles.number}>{props.children}</Text>
          </View>
     )
}


const styles = StyleSheet.create({
     container: {
          borderWidth: 2,
          borderColor: Colors.accent,
          padding: 10,
          borderRadius: 10,
          marginVertical: 10,
          alignItems: "center",
          justifyContent: "center",
     },
     number: {
          fontSize: 22,
          color: Colors.accent,
     },
});


export default NumberContainer;
