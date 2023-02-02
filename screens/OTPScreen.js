import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color, Margin } from "../GlobalStyles";

const OTPScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.otpScreen}>
      <View style={styles.otpScreen1}>
        <View style={[styles.property1default, styles.reeactrLayout]}>
          <View style={[styles.header, styles.editPosition, styles.editLayout]}>
            <View
              style={[styles.header, styles.editPosition, styles.editLayout]}
            >
              <View style={styles.topLogoChild} />
              <Text style={[styles.you, styles.verifyFlexBox, styles.youTypo]}>
                YOU.
              </Text>
              <Text
                style={[styles.first, styles.verifyFlexBox, styles.youTypo]}
              >
                <Text style={styles.first1}>FIRST</Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
            </View>
            <View style={styles.topButton}>
              <View style={styles.topButtonChild} />
              <Text
                style={[styles.listYourServices, styles.listYourServicesTypo]}
              >
                List your services
              </Text>
            </View>
            <View style={styles.changeLangButton}>
              <Image
                style={styles.arrowDownIcon}
                resizeMode="cover"
                source={require("../assets/arrow-down.png")}
              />
              <Text
                style={[
                  styles.english,
                  styles.verifyFlexBox,
                  styles.editPosition,
                ]}
              >
                English
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={[styles.bodyChild, styles.bodyChildPosition]} />
            <View style={[styles.mobileInput, styles.buttonLayout]}>
              <View style={[styles.otpInput, styles.buttonLayout]}>
                <View style={[styles.input, styles.inputBorder]} />
                <View style={[styles.input1, styles.inputBorder1]} />
                <View style={[styles.input2, styles.inputBorder1]} />
                <View style={[styles.input3, styles.inputBorder1]} />
                <View style={[styles.input4, styles.inputBorder1]} />
                <View style={[styles.input5, styles.inputBorder1]} />
                <Text style={[styles.text1, styles.verifyFlexBox]}>4</Text>
              </View>
              <View style={[styles.label, styles.labelLayout]}>
                <Text
                  style={[
                    styles.resendCode0046s,
                    styles.editTypo,
                    styles.editPosition,
                    styles.editLayout,
                  ]}
                >
                  Resend Code 00:46s
                </Text>
              </View>
              <View
                style={[styles.label1, styles.labelLayout, styles.editPosition]}
              >
                <Text
                  style={[
                    styles.edit,
                    styles.editTypo,
                    styles.editPosition,
                    styles.editLayout,
                  ]}
                >
                  <Text style={styles.text2}>{`+91-8439221651    `}</Text>
                  <Text style={styles.edit1}>Edit</Text>
                </Text>
              </View>
            </View>
            <Text style={[styles.youWillReceiveContainer, styles.editTypo]}>
              <Text
                style={styles.youWillReceive}
              >{`You will receive the OTP if phone number  is valid and `}</Text>
              <Text style={styles.weWillSend}>
                we will send your through next process
              </Text>
            </Text>
            <Text
              style={[
                styles.verifyYourMobile,
                styles.verifyFlexBox,
                styles.editPosition,
              ]}
            >
              VERIFY YOUR MOBILE NO.
            </Text>
            <Pressable
              style={[styles.continueButton, styles.buttonLayout]}
              onPress={() => navigation.navigate("ChooseAccountType")}
            >
              <View
                style={[styles.button, styles.inputBorder, styles.buttonLayout]}
              />
              <Text style={[styles.verifyOtp, styles.verifyFlexBox]}>
                Verify OTP
              </Text>
            </Pressable>
            <Text
              style={[
                styles.byLoggingIntoContainer,
                styles.bodyChildPosition,
                styles.listYourServicesTypo,
              ]}
            >
              <Text style={styles.byLoggingIntoTheAccountYo}>
                <Text
                  style={styles.text2}
                >{`By logging into the account you are agreeing with our `}</Text>
                <Text>Terms</Text>
              </Text>
              <Text style={styles.weWillSend}>
                <Text>of use</Text>
                <Text>{` and `}</Text>
                <Text style={styles.privacyPolicy}>Privacy policy</Text>
              </Text>
            </Text>
          </View>
        </View>
        <View style={[styles.reeactr, styles.reeactrLayout]}>
          <View style={[styles.header, styles.editPosition, styles.editLayout]}>
            <View
              style={[styles.header, styles.editPosition, styles.editLayout]}
            >
              <View style={styles.topLogoChild} />
              <Text style={[styles.you, styles.verifyFlexBox, styles.youTypo]}>
                YOU.
              </Text>
              <Text
                style={[styles.first, styles.verifyFlexBox, styles.youTypo]}
              >
                <Text style={styles.first1}>FIRST</Text>
                <Text style={styles.text}>{` `}</Text>
              </Text>
            </View>
            <View style={styles.topButton}>
              <View style={styles.topButtonChild} />
              <Text
                style={[styles.listYourServices, styles.listYourServicesTypo]}
              >
                List your services
              </Text>
            </View>
            <View style={styles.changeLangButton}>
              <Image
                style={styles.arrowDownIcon}
                resizeMode="cover"
                source={require("../assets/arrow-down8.png")}
              />
              <Text
                style={[
                  styles.english,
                  styles.verifyFlexBox,
                  styles.editPosition,
                ]}
              >
                English
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={[styles.bodyChild, styles.bodyChildPosition]} />
            <View style={[styles.mobileInput, styles.buttonLayout]}>
              <View style={[styles.otpInput, styles.buttonLayout]}>
                <View style={[styles.input, styles.inputBorder]} />
                <View style={[styles.input1, styles.inputBorder1]} />
                <View style={[styles.input2, styles.inputBorder1]} />
                <View style={[styles.input3, styles.inputBorder1]} />
                <View style={[styles.input4, styles.inputBorder1]} />
                <View style={[styles.input5, styles.inputBorder1]} />
                <Text style={[styles.text1, styles.verifyFlexBox]}>4</Text>
              </View>
              <View style={[styles.label, styles.labelLayout]}>
                <Text
                  style={[
                    styles.resendCode0046s,
                    styles.editTypo,
                    styles.editPosition,
                    styles.editLayout,
                  ]}
                >
                  Resend Code 00:46s
                </Text>
              </View>
              <View
                style={[styles.label1, styles.labelLayout, styles.editPosition]}
              >
                <Text
                  style={[
                    styles.edit,
                    styles.editTypo,
                    styles.editPosition,
                    styles.editLayout,
                  ]}
                >
                  <Text style={styles.text2}>{`+91-8439221651    `}</Text>
                  <Text style={styles.edit1}>Edit</Text>
                </Text>
              </View>
            </View>
            <Text style={[styles.youWillReceiveContainer, styles.editTypo]}>
              <Text
                style={styles.youWillReceive}
              >{`You will receive the OTP if phone number  is valid and `}</Text>
              <Text style={styles.weWillSend}>
                we will send your through next process
              </Text>
            </Text>
            <Text
              style={[
                styles.verifyYourMobile,
                styles.verifyFlexBox,
                styles.editPosition,
              ]}
            >
              VERIFY YOUR MOBILE NO.
            </Text>
            <View style={[styles.continueButton, styles.buttonLayout]}>
              <View
                style={[styles.button, styles.inputBorder, styles.buttonLayout]}
              />
              <Text style={[styles.verifyOtp, styles.verifyFlexBox]}>
                Verify OTP
              </Text>
            </View>
            <Text
              style={[
                styles.byLoggingIntoContainer,
                styles.bodyChildPosition,
                styles.listYourServicesTypo,
              ]}
            >
              <Text style={styles.byLoggingIntoTheAccountYo}>
                <Text
                  style={styles.text2}
                >{`By logging into the account you are agreeing with our `}</Text>
                <Text>Terms</Text>
              </Text>
              <Text style={styles.weWillSend}>
                <Text>of use</Text>
                <Text>{` and `}</Text>
                <Text style={styles.privacyPolicy}>Privacy policy</Text>
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reeactrLayout: {
    width: 375,
    left: 20,
    position: "absolute",
    height: 752,
  },
  editPosition: {
    top: "0%",
    left: "0%",
  },
  editLayout: {
    height: "100%",
    top: "0%",
    width: "100%",
  },
  verifyFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  youTypo: {
    fontWeight: "800",
    left: "5.07%",
    textAlign: "left",
    fontFamily: FontFamily.inter,
  },
  listYourServicesTypo: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.barlow,
    textAlign: "left",
  },
  bodyChildPosition: {
    display: "none",
    position: "absolute",
  },
  buttonLayout: {
    width: "100%",
    right: "0%",
  },
  inputBorder: {
    borderWidth: 1.5,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_md,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  inputBorder1: {
    borderColor: "#000",
    width: "12.83%",
    borderStyle: "solid",
    borderRadius: Border.br_md,
    backgroundColor: Color.white,
    bottom: "0%",
    top: "0%",
    height: "100%",
    borderWidth: 1,
    position: "absolute",
  },
  labelLayout: {
    width: "47.45%",
    height: "14.57%",
    position: "absolute",
  },
  editTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  topLogoChild: {
    backgroundColor: Color.white,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  you: {
    top: "5.45%",
    fontSize: FontSize.size_7xl,
    color: Color.crimson,
    fontFamily: FontFamily.inter,
  },
  first1: {
    fontSize: FontSize.size_5xl,
  },
  text: {
    fontSize: FontSize.size_6xl,
  },
  first: {
    top: "2.26%",
    color: Color.black,
    fontFamily: FontFamily.inter,
  },
  header: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  topButtonChild: {
    borderColor: "#f6182d",
    borderStyle: "solid",
    borderRadius: Border.br_md,
    backgroundColor: Color.white,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderWidth: 1,
    position: "absolute",
    width: "100%",
  },
  listYourServices: {
    top: "21.43%",
    left: "9.6%",
    fontFamily: FontFamily.barlow,
    fontWeight: "600",
    color: Color.crimson,
    position: "absolute",
  },
  topButton: {
    height: "3.72%",
    width: "33.33%",
    top: "3.72%",
    right: "23.73%",
    bottom: "92.55%",
    left: "42.93%",
    position: "absolute",
  },
  arrowDownIcon: {
    height: "44.79%",
    width: "20%",
    top: "38.86%",
    bottom: "16.36%",
    left: "80%",
    maxWidth: "100%",
    maxHeight: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  english: {
    fontSize: FontSize.size_3xs,
    color: Color.gray,
    fontFamily: FontFamily.barlow,
    fontWeight: "600",
    left: "0%",
  },
  changeLangButton: {
    height: "1.86%",
    width: "14.67%",
    top: "4.65%",
    right: "4%",
    bottom: "93.48%",
    left: "81.33%",
    position: "absolute",
  },
  bodyChild: {
    height: "125.38%",
    width: "112.28%",
    top: "1.92%",
    right: "-5.99%",
    bottom: "-27.31%",
    left: "-6.29%",
    backgroundColor: Color.whitesmoke_100,
  },
  input: {
    right: "87.17%",
    width: "12.83%",
    borderWidth: 1.5,
    backgroundColor: Color.white,
  },
  input1: {
    right: "69.68%",
    left: "17.49%",
  },
  input2: {
    right: "52.19%",
    left: "34.99%",
  },
  input3: {
    right: "34.69%",
    left: "52.48%",
  },
  input4: {
    right: "17.2%",
    left: "69.97%",
  },
  input5: {
    left: "87.17%",
    right: "0%",
  },
  text1: {
    height: "39.8%",
    width: "5.53%",
    top: "25.44%",
    left: "4.19%",
    fontSize: FontSize.size_2xl,
    fontWeight: "600",
    color: Color.black,
    fontFamily: FontFamily.inter,
  },
  otpInput: {
    height: "36.6%",
    top: "28.28%",
    bottom: "35.12%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  resendCode0046s: {
    fontWeight: "600",
    color: Color.black,
    fontFamily: FontFamily.inter,
    left: "0%",
  },
  label: {
    top: "85.43%",
    right: "51.95%",
    left: "0.6%",
    bottom: "0%",
  },
  text2: {
    color: Color.black,
  },
  edit1: {
    color: Color.dodgerblue,
  },
  edit: {
    fontWeight: "600",
    fontFamily: FontFamily.inter,
    left: "0%",
  },
  label1: {
    right: "52.55%",
    bottom: "85.43%",
    left: "0%",
  },
  mobileInput: {
    height: "45.02%",
    top: "30.77%",
    bottom: "24.21%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  youWillReceive: {
    marginBlockEnd: 0,
    marginBlockStart: 0,
  },
  weWillSend: {
    margin: Margin.m_md,
  },
  youWillReceiveContainer: {
    top: "11.92%",
    left: "0.3%",
    whiteSpace: "pre-wrap",
    color: Color.dodgerblue,
    fontFamily: FontFamily.barlow,
  },
  verifyYourMobile: {
    fontSize: FontSize.size_4xl,
    fontWeight: "700",
    fontFamily: FontFamily.barlow,
    color: Color.black,
    left: "0%",
  },
  button: {
    backgroundColor: Color.black,
    right: "0%",
  },
  verifyOtp: {
    top: "29.55%",
    left: "40.12%",
    fontSize: FontSize.size_base,
    color: Color.white,
    fontFamily: FontFamily.barlow,
    fontWeight: "600",
  },
  continueButton: {
    height: "16.92%",
    top: "83.08%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
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
    top: "94.23%",
    fontFamily: FontFamily.barlow,
    left: "0%",
  },
  body: {
    height: "34.57%",
    width: "89.07%",
    top: "62.63%",
    right: "5.33%",
    bottom: "2.79%",
    left: "5.6%",
    position: "absolute",
  },
  property1default: {
    top: 20,
  },
  reeactr: {
    top: 792,
  },
  otpScreen1: {
    top: -20,
    left: -20,
    borderRadius: 5,
    borderStyle: "dashed",
    borderColor: "#9747ff",
    width: 415,
    height: 1564,
    borderWidth: 1,
    position: "absolute",
    overflow: "hidden",
  },
  otpScreen: {
    flex: 1,
    overflow: "hidden",
    height: 752,
    width: "100%",
  },
});

export default OTPScreen;
