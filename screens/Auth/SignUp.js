import { View, Text, TouchableOpacity, Dimensions, Keyboard, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import TextInputField from "../../components/TextInputField";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../../components/Button";
const { width, fontScale } = Dimensions.get("window");
import * as COLORS from '../../constants/Colors'
console.log(fontScale);
export default function SignUp({ navigation }) {
  const [name, setName] = useState();
  const [nickname, setNickname] = useState();
  const [email, setEmail] = useState();
  const [homeno, setHomeno] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [KeyBoardVisible, setKeyboardVisible] = useState(false);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    // Clean up listeners when the component unmounts
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const submit = () => {
    navigation.navigate("OTPScreen");
  };
  console.log(KeyBoardVisible);
  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.TitleContainer}></View>
        <View style={styles.DetailContainer}>
          <View style={{ height: "50%", width: "100%", alignItems: "center", justifyContent: "center" }}>
            <Image
              style={{
                width: Dimensions.get("screen").width / 1.9,
                height: Dimensions.get("screen").width / 1.9,
              }}
              source={require("../../assets/images/email.png")}
            />
          </View>
          <View style={{ height: "30%" }}>
            <TextInputField
              isSecured={false}
              placeholder={"Enter email"}
              function={setName}
              value={name}
              textInputStyles={{ height: "15%" }}
              backgroundColor={"#EBEBEB"}
              onChange={() => {}}
            />
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <Button
            backgroundColor=
            title="Send OTP"
            color="white"
            function={() => {
              navigation.navigate("Register");
            }}
          />
          <View
            style={{
              width: "95%",
              height: 50,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-evenly",
  },
  TitleContainer: {
    height: "5%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  DetailContainer: {
    height: "75%",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-evenly",
  },
  ButtonContainer: {
    height: 140,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
