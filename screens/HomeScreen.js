import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color, Margin } from "../GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeScreen}>
      <View style={[styles.homeScreen1, styles.headerLayout]}>
        <View style={[styles.header, styles.headerLayout]}>
          <View style={[styles.header, styles.headerLayout]}>
            <View style={[styles.topLogoChild, styles.headerLayout]} />
            <Text style={[styles.you, styles.youTypo]}>YOU.</Text>
            <Text style={[styles.first, styles.youTypo]}>
              <Text style={styles.first1}>FIRST</Text>
              <Text style={styles.text}>{` `}</Text>
            </Text>
          </View>
          <View style={styles.topButton}>
            <View style={[styles.topButtonChild, styles.childPosition]} />
            <Text
              style={[
                styles.listYourServices,
                styles.text1Typo,
                styles.listYourServicesTypo,
                styles.text1Position,
              ]}
            >
              List your services
            </Text>
          </View>
          <View style={styles.changeLangButton}>
            <Image
              style={[styles.arrowDownIcon, styles.arrowIconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-down9.png")}
            />
            <Text style={[styles.english, styles.text1Typo]}>English</Text>
          </View>
        </View>
        <View style={[styles.body, styles.bodyLayout]}>
          <View style={styles.bodyChild} />
          <View style={[styles.mobileInput, styles.bodyLayout]}>
            <View
              style={[styles.input, styles.buttonLayout, styles.inputBorder]}
            />
            <View style={[styles.label, styles.labelPosition]}>
              <View style={[styles.labelOuter, styles.labelPosition]} />
              <Text style={[styles.mobileNumber, styles.mobileNumberTypo]}>
                Mobile Number
              </Text>
            </View>
            <View style={styles.inputappend}>
              <Image
                style={[styles.arrowDownIcon1, styles.arrowIconLayout]}
                resizeMode="cover"
                source={require("../assets/arrow-down10.png")}
              />
              <View style={[styles.inputappendChild, styles.childPosition]} />
              <Text
                style={[styles.text1, styles.text1Typo, styles.text1Position]}
              >
                +91
              </Text>
            </View>
          </View>
          <Text
            style={[
              styles.enterTheRegisteredContainer,
              styles.mobileNumberTypo,
            ]}
          >
            <Text
              style={styles.enterTheRegistered}
            >{`Enter the registered  mobile number or  we will send `}</Text>
            <Text style={styles.yourThroughOur}>
              your through our registration process.
            </Text>
          </Text>
          <Text style={[styles.welcomeToFirstrek, styles.text1Typo]}>
            WELCOME TO FIRSTREK
          </Text>
          <Pressable
            style={[styles.continueButton, styles.buttonLayout]}
            onPress={() => navigation.navigate("OTPScreen")}
          >
            <View
              style={[styles.button, styles.buttonLayout, styles.inputBorder]}
            />
            <Text style={[styles.continue, styles.text1Typo]}>Continue</Text>
          </Pressable>
          <Text
            style={[
              styles.byLoggingIntoContainer,
              styles.text1Typo,
              styles.listYourServicesTypo,
            ]}
          >
            <Text style={styles.byLoggingIntoTheAccountYo}>
              <Text
                style={styles.byLoggingInto}
              >{`By logging into the account you are agreeing with our `}</Text>
              <Text>Terms</Text>
            </Text>
            <Text style={styles.yourThroughOur}>
              <Text>of use</Text>
              <Text>{` and `}</Text>
              <Text style={styles.privacyPolicy}>Privacy policy</Text>
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayout: {
    height: 752,
    width: 375,
    position: "absolute",
  },
  youTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inter,
    fontWeight: "800",
    left: 19,
    position: "absolute",
  },
  childPosition: {
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.barlow,
    textAlign: "left",
    position: "absolute",
  },
  listYourServicesTypo: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.barlow,
  },
  text1Position: {
    left: 12,
    fontWeight: "600",
  },
  arrowIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bodyLayout: {
    width: 334,
    position: "absolute",
  },
  buttonLayout: {
    height: 44,
    width: 334,
    left: 0,
    position: "absolute",
  },
  inputBorder: {
    borderWidth: 1.5,
    borderColor: "#000",
    height: 44,
    borderStyle: "solid",
    borderRadius: Border.br_md,
  },
  labelPosition: {
    width: 103,
    top: 0,
    position: "absolute",
  },
  mobileNumberTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.barlow,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  topLogoChild: {
    backgroundColor: Color.white,
    left: 0,
    top: 0,
  },
  you: {
    top: 41,
    fontSize: FontSize.size_7xl,
    color: Color.crimson,
  },
  first1: {
    fontSize: FontSize.size_5xl,
  },
  text: {
    fontSize: FontSize.size_6xl,
  },
  first: {
    top: 17,
    color: Color.black,
  },
  header: {
    left: 0,
    top: 0,
  },
  topButtonChild: {
    borderColor: "#f6182d",
    borderWidth: 1,
    borderRadius: Border.br_md,
    borderStyle: "solid",
    height: 28,
    width: 125,
    backgroundColor: Color.white,
  },
  listYourServices: {
    top: 6,
    fontWeight: "600",
    color: Color.crimson,
  },
  topButton: {
    top: 28,
    left: 161,
    height: 28,
    width: 125,
    position: "absolute",
  },
  arrowDownIcon: {
    height: "44.79%",
    width: "21.27%",
    top: "38.86%",
    right: "0%",
    bottom: "16.36%",
    left: "78.73%",
  },
  english: {
    fontSize: FontSize.size_3xs,
    color: Color.gray,
    fontWeight: "600",
    left: 0,
    top: 0,
  },
  changeLangButton: {
    height: "1.86%",
    width: "13.64%",
    top: "4.65%",
    right: "5.02%",
    bottom: "93.48%",
    left: "81.33%",
    position: "absolute",
  },
  bodyChild: {
    top: -15,
    left: -21,
    backgroundColor: Color.whitesmoke_100,
    height: 326,
    display: "none",
    width: 375,
    position: "absolute",
  },
  input: {
    top: 10,
    backgroundColor: Color.white,
  },
  labelOuter: {
    height: 17,
    backgroundColor: Color.white,
    left: 0,
  },
  mobileNumber: {
    top: 1,
    left: 5,
    fontWeight: "600",
  },
  label: {
    left: 11,
    height: 18,
  },
  arrowDownIcon1: {
    height: "20.52%",
    width: "24.04%",
    top: "39.97%",
    right: "-0.53%",
    bottom: "39.51%",
    left: "76.49%",
  },
  inputappendChild: {
    borderColor: "#7c7c7c",
    borderRightWidth: 1,
    width: 1,
    height: 34,
  },
  text1: {
    top: 7,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    color: Color.black,
  },
  inputappend: {
    height: "61.11%",
    width: "14.18%",
    top: "29.63%",
    right: "4.99%",
    bottom: "9.26%",
    left: "80.84%",
    position: "absolute",
  },
  mobileInput: {
    top: 83,
    height: 54,
    left: 0,
  },
  enterTheRegistered: {
    marginBlockEnd: 0,
    marginBlockStart: 0,
  },
  yourThroughOur: {
    margin: Margin.m_md,
  },
  enterTheRegisteredContainer: {
    top: 31,
    whiteSpace: "pre-wrap",
    left: 0,
  },
  welcomeToFirstrek: {
    fontSize: FontSize.size_4xl,
    fontWeight: "700",
    color: Color.black,
    left: 0,
    top: 0,
  },
  button: {
    backgroundColor: Color.black,
    top: 0,
  },
  continue: {
    top: 13,
    left: 134,
    fontSize: FontSize.size_base,
    color: Color.white,
    fontWeight: "600",
  },
  continueButton: {
    top: 156,
  },
  byLoggingInto: {
    color: Color.black,
  },
  byLoggingIntoTheAccountYo: {
    marginBlockEnd: 2,
    marginBlockStart: 0,
  },
  privacyPolicy: {
    textDecoration: "underline",
    color: Color.dodgerblue,
  },
  byLoggingIntoContainer: {
    top: 225,
    left: 0,
  },
  body: {
    top: 471,
    left: 21,
    height: 259,
  },
  homeScreen1: {
    top: 2,
    left: 4,
  },
  homeScreen: {
    flex: 1,
    width: "100%",
    height: 754,
    overflow: "hidden",
  },
});

export default HomeScreen;
