import { StyleSheet, TextInput, View } from "react-native";

import React from "react";

const Input = (props) => (
   <TextInput {...props} style={{ ...styles.input, ...props.style }} />
);

const styles = StyleSheet.create({
   input: {
      height: 40,
      borderColor: "gray",
      borderBottomWidth: 1,
      marginVertical: 10,
      width: 50,
      justifyContent: "center",
      textAlign: "center",
      alignContent: "center",
   },
});

export default Input;
