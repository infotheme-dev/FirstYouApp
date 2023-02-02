import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Margin } from "../GlobalStyles";

const ChooseAccountType = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseAccountType}>
      <Pressable
        style={[styles.chooseAccountType1, styles.wrapperLayout]}
        onPress={() => navigation.navigate("AboutGeneralProfile")}
      >
        <View style={[styles.wrapper, styles.wrapperLayout]}>
          <View style={[styles.wrapperChild, styles.wrapperLayout]} />
        </View>
        <View style={[styles.body, styles.bodyLayout]}>
          <View style={[styles.continueButton, styles.chooseLayout]}>
            <View style={[styles.button, styles.inputLayout]} />
            <Text style={[styles.next, styles.nextTypo]}>Next</Text>
          </View>
          <Text
            style={[
              styles.byClickingBelowContainer,
              styles.containerClr,
              styles.needHelpTypo,
            ]}
          >
            <Text
              style={styles.byClickingBelow}
            >{`By clicking below button we will setup you account `}</Text>
            <Text style={styles.accordinglyAndYou}>
              accordingly and you can’t change it back.
            </Text>
          </Text>
          <Text
            style={[
              styles.tellUsAboutContainer,
              styles.containerClr,
              styles.iHaveATypo,
            ]}
          >
            <Text style={styles.tellUsAbout}>
              Tell us about yourself, why you want to join firstrek. We
            </Text>
            <Text style={styles.accordinglyAndYou}>
              are open for below services only, Choose one or more.
            </Text>
          </Text>
          <Text
            style={[styles.whyYouAre, styles.containerClr, styles.iHaveATypo]}
          >
            Why you are here?
          </Text>
          <View style={[styles.chooseServiceArea, styles.bodyLayout]}>
            <View style={[styles.chooseInput, styles.chooseLayout]}>
              <View style={[styles.input, styles.inputLayout]} />
              <Text
                style={[
                  styles.iHaveA,
                  styles.iHaveAPosition,
                  styles.containerClr,
                  styles.iHaveATypo,
                ]}
              >
                I have a Hotel / HomeStay
              </Text>
              <Image
                style={[styles.inputappendIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/inputappend.png")}
              />
            </View>
            <View style={[styles.chooseInput1, styles.chooseLayout]}>
              <View style={[styles.input, styles.inputLayout]} />
              <Text
                style={[
                  styles.iHaveA,
                  styles.iHaveAPosition,
                  styles.containerClr,
                  styles.iHaveATypo,
                ]}
              >
                I am a Camping Service Provider
              </Text>
              <Image
                style={styles.inputappendIcon1}
                resizeMode="cover"
                source={require("../assets/inputappend1.png")}
              />
            </View>
            <View style={[styles.chooseInput2, styles.chooseLayout]}>
              <View style={[styles.input, styles.inputLayout]} />
              <Text
                style={[
                  styles.iHaveA,
                  styles.iHaveAPosition,
                  styles.containerClr,
                  styles.iHaveATypo,
                ]}
              >
                I am a Trek / Tour Guide
              </Text>
              <Image
                style={styles.inputappendIcon1}
                resizeMode="cover"
                source={require("../assets/inputappend1.png")}
              />
            </View>
            <View style={[styles.chooseInput3, styles.chooseLayout]}>
              <View style={[styles.input, styles.inputLayout]} />
              <Text
                style={[
                  styles.iHaveA,
                  styles.iHaveAPosition,
                  styles.containerClr,
                  styles.iHaveATypo,
                ]}
              >
                I have a Commercial Car /Vehicle
              </Text>
              <Image
                style={styles.inputappendIcon1}
                resizeMode="cover"
                source={require("../assets/inputappend1.png")}
              />
            </View>
            <View style={[styles.chooseInput4, styles.chooseLayout]}>
              <View style={[styles.input, styles.inputLayout]} />
              <Text
                style={[
                  styles.iHaveA,
                  styles.iHaveAPosition,
                  styles.containerClr,
                  styles.iHaveATypo,
                ]}
              >
                I have a In-house / Only Restaurant
              </Text>
              <Image
                style={styles.inputappendIcon1}
                resizeMode="cover"
                source={require("../assets/inputappend1.png")}
              />
            </View>
            <View style={[styles.chooseInput5, styles.chooseLayout]}>
              <View style={[styles.input, styles.inputLayout]} />
              <Text
                style={[
                  styles.iHaveA,
                  styles.iHaveAPosition,
                  styles.containerClr,
                  styles.iHaveATypo,
                ]}
              >
                I am an Adventure Sports Provider
              </Text>
              <Image
                style={styles.inputappendIcon1}
                resizeMode="cover"
                source={require("../assets/inputappend1.png")}
              />
            </View>
          </View>
        </View>
        <View
          style={[styles.header, styles.iHaveAPosition, styles.headerLayout]}
        >
          <View style={styles.topLogo}>
            <Text style={[styles.you, styles.youClr, styles.youTypo]}>
              YOU.
            </Text>
            <Text style={[styles.first, styles.youTypo, styles.containerClr]}>
              <Text style={styles.first1}>FIRST</Text>
              <Text style={styles.text}>{` `}</Text>
            </Text>
          </View>
          <View style={[styles.topButton, styles.topLayout]}>
            <View style={[styles.topButtonChild, styles.topLayout]} />
            <Text style={[styles.needHelp, styles.youClr, styles.needHelpTypo]}>
              Need Help
            </Text>
          </View>
          <View style={styles.changeLangButton}>
            <Image
              style={[styles.arrowDownIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-down.png")}
            />
            <Text style={[styles.english, styles.nextTypo]}>English</Text>
          </View>
          <Image
            style={[styles.progressBarIcon, styles.headerLayout]}
            resizeMode="cover"
            source={require("../assets/progress-bar2.png")}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 752,
    width: 375,
    position: "absolute",
  },
  bodyLayout: {
    width: 334,
    position: "absolute",
  },
  chooseLayout: {
    height: 44,
    width: 334,
    left: 0,
    position: "absolute",
  },
  inputLayout: {
    borderWidth: 1.5,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_md,
    height: 44,
    width: 334,
    left: 0,
    top: 0,
    position: "absolute",
  },
  nextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.barlow,
    fontWeight: "600",
    position: "absolute",
  },
  containerClr: {
    color: Color.black,
    textAlign: "left",
  },
  needHelpTypo: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.barlow,
  },
  iHaveATypo: {
    fontFamily: FontFamily.barlow,
    color: Color.black,
  },
  iHaveAPosition: {
    top: 12,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  headerLayout: {
    width: 375,
    left: 0,
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
    top: 13,
    left: 150,
    color: Color.white,
    fontSize: FontSize.size_base,
  },
  continueButton: {
    top: 603,
  },
  byClickingBelow: {
    marginBlockEnd: 2,
    marginBlockStart: 0,
  },
  accordinglyAndYou: {
    margin: Margin.m_md,
  },
  byClickingBelowContainer: {
    top: 555,
    left: 4,
    position: "absolute",
  },
  tellUsAbout: {
    marginBlockEnd: 0,
    marginBlockStart: 0,
  },
  tellUsAboutContainer: {
    top: 31,
    left: 1,
    fontSize: FontSize.size_xs,
    whiteSpace: "pre-wrap",
    position: "absolute",
  },
  whyYouAre: {
    fontSize: FontSize.size_4xl,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  input: {
    backgroundColor: Color.white,
  },
  iHaveA: {
    left: 17,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  inputappendIcon: {
    height: "75%",
    width: "9.28%",
    top: "13.64%",
    right: "5.09%",
    bottom: "11.36%",
    left: "85.63%",
  },
  chooseInput: {
    top: 0,
  },
  inputappendIcon1: {
    left: 286,
    width: 30,
    height: 33,
    top: 6,
    position: "absolute",
  },
  chooseInput1: {
    top: 60,
  },
  chooseInput2: {
    top: 120,
  },
  chooseInput3: {
    top: 180,
  },
  chooseInput4: {
    top: 240,
  },
  chooseInput5: {
    top: 300,
  },
  chooseServiceArea: {
    top: 87,
    height: 344,
    left: 0,
  },
  body: {
    top: 83,
    left: 21,
    height: 647,
  },
  you: {
    top: 18,
    fontSize: FontSize.size_xl,
  },
  first1: {
    fontSize: FontSize.size_sm,
  },
  text: {
    fontSize: FontSize.size_lg,
  },
  first: {
    top: 0,
    position: "absolute",
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
    borderStyle: "solid",
    borderRadius: Border.br_md,
    height: 28,
    width: 84,
    backgroundColor: Color.white,
    left: 0,
    top: 0,
  },
  needHelp: {
    left: 12,
    top: 6,
    fontWeight: "600",
  },
  topButton: {
    left: 209,
    top: 6,
  },
  arrowDownIcon: {
    height: "44.79%",
    width: "20%",
    top: "38.86%",
    right: "0%",
    bottom: "16.36%",
    left: "80%",
  },
  english: {
    fontSize: FontSize.size_3xs,
    color: Color.gray,
    left: 0,
    top: 0,
  },
  changeLangButton: {
    height: "26.42%",
    width: "14.67%",
    top: "24.53%",
    right: "4%",
    bottom: "49.06%",
    left: "81.33%",
    position: "absolute",
  },
  progressBarIcon: {
    top: 51,
    height: 3,
    left: 0,
    position: "absolute",
  },
  header: {
    height: 53,
    left: 0,
  },
  chooseAccountType1: {
    top: 4,
    left: 2,
  },
  chooseAccountType: {
    flex: 1,
    width: "100%",
    height: 756,
    overflow: "hidden",
  },
});

export default ChooseAccountType;
