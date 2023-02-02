import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color, Margin } from "../GlobalStyles";

const AboutGeneralProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutGeneralProfile}>
      <View style={[styles.aboutGeneralProfile1, styles.wrapperLayout]}>
        <View style={[styles.wrapper, styles.wrapperLayout]}>
          <View style={[styles.wrapperChild, styles.wrapperLayout]} />
        </View>
        <View style={styles.body}>
          <Pressable
            style={[styles.continueButton, styles.continueLayout]}
            onPress={() => navigation.navigate("ChooseServiceType")}
          >
            <View
              style={[
                styles.button,
                styles.buttonBorder,
                styles.buttonPosition,
              ]}
            />
            <Text style={[styles.next, styles.nextTypo, styles.nextFlexBox]}>
              Next
            </Text>
          </Pressable>
          <Pressable
            style={[styles.continueButton1, styles.continueLayout]}
            onPress={() => navigation.goBack()}
          >
            <View
              style={[
                styles.button1,
                styles.buttonBorder,
                styles.buttonPosition,
              ]}
            />
            <Text
              style={[styles.back, styles.tellContainerClr, styles.nextTypo]}
            >
              Back
            </Text>
          </Pressable>
          <Text style={[styles.weWillUseContainer, styles.tellContainerClr]}>
            <Text style={styles.weWillUse}>
              We will use this information further with KYC verification
            </Text>
            <Text style={styles.processPleaseMake}>
              Process. Please make sure everything is as Per your ID Card
            </Text>
          </Text>
          <Text
            style={[
              styles.tellUsAboutContainer,
              styles.containerTypo,
              styles.tellContainerClr,
            ]}
          >
            <Text
              style={styles.tellUsAbout}
            >{`Tell us about yourself,  who you are and why you are fit `}</Text>
            <Text style={styles.processPleaseMake}>
              for our platform and customers.
            </Text>
          </Text>
          <Text style={[styles.tellUsAbout1, styles.tellContainerClr]}>
            Tell us about you
          </Text>
          <View style={[styles.scrollSection, styles.inputPosition]}>
            <View style={[styles.mobileInput, styles.dateLayout]}>
              <View
                style={[
                  styles.input,
                  styles.inputPosition,
                  styles.buttonBorder,
                ]}
              />
              <View style={[styles.labelLayout1, styles.labelPosition3]}>
                <View style={[styles.labelLayout, styles.labelPosition3]} />
                <Text style={[styles.yourName, styles.yourTypo]}>
                  Your Name
                </Text>
              </View>
              <View
                style={[
                  styles.inputappend,
                  styles.inputappendPosition,
                  styles.inputappendPosition1,
                ]}
              >
                <Image
                  style={[
                    styles.arrowDownIcon,
                    styles.arrowIconLayout,
                    styles.arrowIconLayout1,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/arrow-down1.png")}
                />
                <View style={[styles.inputappendChild, styles.childPosition]} />
                <Text
                  style={[styles.text, styles.textTypo, styles.textPosition]}
                >
                  +91
                </Text>
              </View>
            </View>
            <View style={[styles.locationInput, styles.dateLayout]}>
              <View
                style={[
                  styles.input,
                  styles.inputPosition,
                  styles.buttonBorder,
                ]}
              />
              <View style={[styles.labelPosition2, styles.labelLayout1]}>
                <View style={[styles.labelPosition2, styles.labelLayout]} />
                <Text style={[styles.yourAddress, styles.yourTypo]}>
                  Your Address
                </Text>
              </View>
              <View
                style={[
                  styles.inputappend1,
                  styles.inputappendPosition,
                  styles.inputappendPosition2,
                ]}
              >
                <Image
                  style={[styles.arrowDownIcon1, styles.arrowIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrow-down1.png")}
                />
                <View style={[styles.inputappendChild, styles.childPosition]} />
                <Text style={[styles.detect, styles.textPosition]}>Detect</Text>
              </View>
            </View>
            <View style={[styles.dateInput, styles.dateLayout]}>
              <View
                style={[
                  styles.input,
                  styles.inputPosition,
                  styles.buttonBorder,
                ]}
              />
              <View style={[styles.labelPosition1, styles.labelLayout1]}>
                <View style={[styles.labelPosition1, styles.labelLayout]} />
                <Text style={[styles.yourName, styles.yourTypo]}>
                  Date of Birth
                </Text>
              </View>
              <View
                style={[
                  styles.inputappend2,
                  styles.inputappendPosition,
                  styles.inputappendPosition2,
                ]}
              >
                <Image
                  style={[styles.arrowDownIcon2, styles.arrowIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrow-down1.png")}
                />
                <View style={[styles.inputappendChild, styles.childPosition]} />
                <Text
                  style={[
                    styles.choose,
                    styles.textPosition,
                    styles.containerTypo,
                  ]}
                >
                  Choose
                </Text>
              </View>
            </View>
            <View style={[styles.dateInput1, styles.dateLayout]}>
              <View
                style={[
                  styles.input,
                  styles.inputPosition,
                  styles.buttonBorder,
                ]}
              />
              <View style={[styles.labelPosition, styles.labelLayout1]}>
                <View style={[styles.labelPosition, styles.labelLayout]} />
                <Text style={[styles.yourName, styles.yourTypo]}>
                  Alternet Mobile No.
                </Text>
              </View>
              <View
                style={[
                  styles.inputappendPosition,
                  styles.inputappendPosition1,
                ]}
              >
                <Image
                  style={[styles.arrowDownIcon3, styles.arrowIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/arrow-down1.png")}
                />
                <View style={[styles.inputappendChild, styles.childPosition]} />
                <Text
                  style={[
                    styles.text1,
                    styles.textPosition,
                    styles.containerTypo,
                  ]}
                >
                  +91
                </Text>
              </View>
            </View>
            <View style={[styles.profilePhotoSection, styles.profilePosition]}>
              <Text
                style={[
                  styles.pleaseUploadYourContainer,
                  styles.containerTypo,
                  styles.tellContainerClr,
                ]}
              >
                <Text style={styles.tellUsAbout}>{`Please Upload Your `}</Text>
                <Text
                  style={styles.tellUsAbout}
                >{`Real / Valid Photo. You can `}</Text>
                <Text style={styles.processPleaseMake}>
                  capture your photo.
                </Text>
              </Text>
              <Image
                style={[
                  styles.profilePhotoSectionChild,
                  styles.profilePosition,
                ]}
                resizeMode="cover"
                source={require("../assets/ellipse-1.png")}
              />
              <Image
                style={styles.photoCamera1Icon}
                resizeMode="cover"
                source={require("../assets/photocamera-1.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.header, styles.headerPosition]}>
          <View style={styles.topLogo}>
            <Text style={[styles.you, styles.youClr, styles.youTypo]}>
              YOU.
            </Text>
            <Text
              style={[styles.first, styles.youTypo, styles.tellContainerClr]}
            >
              <Text style={styles.first1}>FIRST</Text>
              <Text style={styles.text2}>{` `}</Text>
            </Text>
          </View>
          <View style={[styles.topButton, styles.topLayout]}>
            <View
              style={[
                styles.topButtonChild,
                styles.topLayout,
                styles.childPosition,
              ]}
            />
            <Text style={[styles.needHelp, styles.youClr, styles.textTypo]}>
              Need Help
            </Text>
          </View>
          <View style={styles.changeLangButton}>
            <Image
              style={[
                styles.arrowDownIcon4,
                styles.arrowIconLayout,
                styles.arrowIconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/arrow-down5.png")}
            />
            <Text style={[styles.english, styles.nextFlexBox]}>English</Text>
          </View>
          <Image
            style={[styles.progressBarIcon, styles.headerPosition]}
            resizeMode="cover"
            source={require("../assets/progress-bar1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 752,
    width: 375,
    position: "absolute",
  },
  continueLayout: {
    height: 44,
    top: 603,
    width: 160,
    position: "absolute",
  },
  buttonBorder: {
    borderWidth: 1.5,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_md,
    height: 44,
  },
  buttonPosition: {
    width: 160,
    borderColor: "#000",
    left: 0,
    top: 0,
    position: "absolute",
  },
  nextTypo: {
    width: 50,
    fontSize: FontSize.size_base,
    top: 13,
    fontFamily: FontFamily.barlow,
    fontWeight: "600",
  },
  nextFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  tellContainerClr: {
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  containerTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.barlow,
  },
  inputPosition: {
    width: 334,
    left: 0,
    position: "absolute",
  },
  dateLayout: {
    height: 54,
    width: 334,
    left: 0,
    position: "absolute",
  },
  labelPosition3: {
    width: 76,
    top: 0,
    position: "absolute",
  },
  yourTypo: {
    top: 1,
    fontSize: FontSize.size_xs,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.barlow,
    fontWeight: "600",
    position: "absolute",
  },
  inputappendPosition: {
    left: "80.84%",
    bottom: "9.26%",
    top: "29.63%",
    height: "61.11%",
    position: "absolute",
  },
  inputappendPosition1: {
    right: "2.8%",
    width: "16.36%",
    left: "80.84%",
    bottom: "9.26%",
    top: "29.63%",
    height: "61.11%",
  },
  arrowIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  arrowIconLayout1: {
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  childPosition: {
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  textTypo: {
    left: 12,
    fontFamily: FontFamily.barlow,
    fontWeight: "600",
  },
  textPosition: {
    top: 7,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  labelLayout1: {
    height: 18,
    left: 11,
  },
  labelLayout: {
    height: 17,
    backgroundColor: Color.white,
    left: 0,
  },
  inputappendPosition2: {
    left: "80.84%",
    bottom: "9.26%",
    top: "29.63%",
    height: "61.11%",
  },
  profilePosition: {
    height: 100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  headerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  youClr: {
    color: Color.crimson,
    textAlign: "left",
    position: "absolute",
  },
  youTypo: {
    fontFamily: FontFamily.inter,
    fontWeight: "800",
    left: 0,
  },
  topLayout: {
    height: 28,
    width: 84,
    position: "absolute",
  },
  wrapperChild: {
    backgroundColor: Color.white,
    left: 0,
    top: 0,
  },
  wrapper: {
    left: 0,
    top: 0,
  },
  button: {
    backgroundColor: Color.black,
  },
  next: {
    left: 66,
    color: Color.white,
  },
  continueButton: {
    left: 180,
  },
  button1: {
    backgroundColor: Color.whitesmoke_200,
  },
  back: {
    left: 58,
  },
  continueButton1: {
    left: 0,
  },
  weWillUse: {
    marginBlockEnd: 2,
    marginBlockStart: 0,
  },
  processPleaseMake: {
    margin: Margin.m_md,
  },
  weWillUseContainer: {
    top: 555,
    left: 3,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.barlow,
  },
  tellUsAbout: {
    marginBlockEnd: 0,
    marginBlockStart: 0,
  },
  tellUsAboutContainer: {
    top: 31,
    left: 1,
    whiteSpace: "pre-wrap",
  },
  tellUsAbout1: {
    fontSize: FontSize.size_4xl,
    fontWeight: "700",
    fontFamily: FontFamily.barlow,
    left: 0,
    top: 0,
  },
  input: {
    top: 10,
    backgroundColor: Color.white,
  },
  yourName: {
    left: 5,
  },
  arrowDownIcon: {
    width: "20.34%",
    top: "40.73%",
    bottom: "40.27%",
    left: "79.66%",
    height: "19%",
  },
  inputappendChild: {
    borderColor: "#7c7c7c",
    borderRightWidth: 1,
    width: 1,
    height: 34,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_sm,
  },
  inputappend: {
    display: "none",
  },
  mobileInput: {
    top: 126,
  },
  labelPosition2: {
    width: 96,
    top: 0,
    position: "absolute",
  },
  yourAddress: {
    left: 7,
  },
  arrowDownIcon1: {
    width: "20.21%",
    top: "1234.67%",
    right: "-535.73%",
    bottom: "-1153.67%",
    left: "615.52%",
    height: "19%",
    display: "none",
  },
  detect: {
    left: 10,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.barlow,
    fontWeight: "600",
  },
  inputappend1: {
    width: "16.47%",
    right: "2.69%",
  },
  locationInput: {
    top: 196,
  },
  labelPosition1: {
    width: 85,
    top: 0,
    position: "absolute",
  },
  arrowDownIcon2: {
    width: "19.85%",
    top: "1440.73%",
    right: "-524.38%",
    bottom: "-1359.73%",
    left: "604.53%",
    height: "19%",
    display: "none",
  },
  choose: {
    left: 9,
    fontWeight: "600",
  },
  inputappend2: {
    width: "16.77%",
    right: "2.4%",
  },
  dateInput: {
    top: 264,
  },
  labelPosition: {
    width: 125,
    top: 0,
    position: "absolute",
  },
  arrowDownIcon3: {
    height: "20.52%",
    width: "21.25%",
    top: "39.97%",
    right: "-0.46%",
    bottom: "39.51%",
    left: "79.2%",
  },
  text1: {
    left: 13,
    fontWeight: "600",
  },
  dateInput1: {
    top: 331,
  },
  pleaseUploadYourContainer: {
    top: 20,
    left: 124,
    fontWeight: "600",
  },
  profilePhotoSectionChild: {
    width: 100,
  },
  photoCamera1Icon: {
    top: 34,
    left: 34,
    width: 32,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  profilePhotoSection: {
    width: 289,
  },
  scrollSection: {
    top: 97,
    height: 385,
  },
  body: {
    top: 83,
    left: 21,
    width: 340,
    height: 647,
    position: "absolute",
  },
  you: {
    top: 18,
    fontSize: FontSize.size_xl,
  },
  first1: {
    fontSize: FontSize.size_sm,
  },
  text2: {
    fontSize: FontSize.size_lg,
  },
  first: {
    top: 0,
  },
  topLogo: {
    left: 19,
    width: 46,
    height: 40,
    top: 0,
    position: "absolute",
  },
  topButtonChild: {
    borderColor: "#f6182d",
    borderWidth: 1,
    borderRadius: Border.br_md,
    height: 28,
    width: 84,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  needHelp: {
    top: 6,
    fontSize: FontSize.size_2xs,
  },
  topButton: {
    left: 209,
    top: 6,
  },
  arrowDownIcon4: {
    height: "44.79%",
    width: "18.89%",
    top: "38.86%",
    bottom: "16.36%",
    left: "81.11%",
  },
  english: {
    fontSize: FontSize.size_3xs,
    color: Color.gray,
    fontFamily: FontFamily.barlow,
    fontWeight: "600",
    left: 0,
    top: 0,
  },
  changeLangButton: {
    height: "26.42%",
    width: "15.69%",
    top: "24.53%",
    right: "2.98%",
    bottom: "49.06%",
    left: "81.33%",
    position: "absolute",
  },
  progressBarIcon: {
    top: 51,
    height: 3,
    left: 0,
  },
  header: {
    top: 12,
    height: 53,
    left: 0,
  },
  aboutGeneralProfile1: {
    top: 2,
    left: 4,
  },
  aboutGeneralProfile: {
    flex: 1,
    width: "100%",
    height: 756,
    overflow: "hidden",
  },
});

export default AboutGeneralProfile;
