import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export default function Button(props) {
  const styles = StyleSheet.create({
    container: {
      width: "95%",
      height: 50,
      backgroundColor: props.backgroundColor,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={props.function?props.function:()=>{}}
    >
      <Text
        style={{
          fontFamily: "Inter-Medium",
          fontSize: RFValue(16),
          color: props.color ? props.color : "black",
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
