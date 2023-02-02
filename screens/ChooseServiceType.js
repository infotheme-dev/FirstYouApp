import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, FontSize, FontFamily, Color, Margin } from "../GlobalStyles";

const ChooseServiceType = () => {
  return (
    <View style={styles.chooseServiceType}>
      <View style={[styles.chooseServiceType1, styles.wrapperLayout]}>
        <View style={[styles.wrapper, styles.wrapperLayout]}>
          <View style={styles.wrapperChild} />
        </View>
        <View style={styles.body}>
          <View style={[styles.continueButton, styles.continueLayout]}>
            <View style={[styles.button, styles.buttonLayout]} />
            <Text style={[styles.next, styles.nextTypo, styles.nextFlexBox]}>
              Next
            </Text>
          </View>
          <View style={[styles.continueButton1, styles.continueLayout]}>
            <View style={[styles.button1, styles.buttonLayout]} />
            <Text style={[styles.back, styles.backClr, styles.nextTypo]}>
              Back
            </Text>
          </View>
          <View style={styles.bodyChild} />
          <View style={styles.heading}>
            <Text style={[styles.pleaseChooseAContainer, styles.backClr]}>
              <Text
                style={styles.pleaseChooseA}
              >{`Please choose a service / property you want to list `}</Text>
              <Text style={styles.withUsWe}>
                with us. We will show this as you opted.
              </Text>
            </Text>
            <Text style={styles.whatTypeOfContainer}>
              <Text
                style={styles.pleaseChooseA}
              >{`What type of property/service do `}</Text>
              <Text style={styles.withUsWe}>you want to list?</Text>
            </Text>
          </View>
          <View style={[styles.chooseButton, styles.chooseLayout]}>
            <View
              style={[
                styles.chooseButtonChild,
                styles.buttonChildBorder,
                styles.chooseLayout,
              ]}
            />
            <Text style={[styles.hotel, styles.hotelTypo, styles.hotelLayout]}>
              Hotel
            </Text>
            <Text
              style={[
                styles.aBusinessThatContainer,
                styles.businessContainerTypo,
                styles.businessContainerPosition,
              ]}
            >
              <Text style={styles.pleaseChooseA}>
                A business that allows guests to book private
              </Text>
              <Text style={styles.withUsWe}>rooms, suits etc.</Text>
            </Text>
            <Image
              style={[
                styles.building1Icon,
                styles.iconLayout1,
                styles.iconPosition1,
              ]}
              resizeMode="cover"
              source={require("../assets/building-1.png")}
            />
          </View>
          <View style={[styles.chooseButton1, styles.chooseLayout]}>
            <View
              style={[
                styles.chooseButtonChild,
                styles.buttonChildBorder,
                styles.chooseLayout,
              ]}
            />
            <Text style={[styles.hotel, styles.hotelTypo, styles.hotelLayout]}>
              HomeStay
            </Text>
            <Text
              style={[
                styles.aBusinessThatContainer,
                styles.businessContainerTypo,
                styles.businessContainerPosition,
              ]}
            >
              <Text
                style={styles.pleaseChooseA}
              >{`A residential home where guests may book, `}</Text>
              <Text style={styles.withUsWe}>
                one or more rooms, or the entire property.
              </Text>
            </Text>
            <Image
              style={[styles.house21, styles.iconLayout, styles.house21Layout]}
              resizeMode="cover"
              source={require("../assets/house-2-1.png")}
            />
          </View>
          <View style={[styles.chooseButton2, styles.chooseLayout]}>
            <View
              style={[
                styles.chooseButtonChild,
                styles.buttonChildBorder,
                styles.chooseLayout,
              ]}
            />
            <Text
              style={[styles.camping, styles.hotelTypo, styles.hotelLayout]}
            >
              Camping
            </Text>
            <Text
              style={[
                styles.aBusinessThatContainer1,
                styles.businessContainerTypo,
                styles.businessContainerPosition,
              ]}
            >
              <Text style={styles.pleaseChooseA}>
                A business that allows guests to book camp,
              </Text>
              <Text style={styles.withUsWe}>
                tents with other camping activities.
              </Text>
            </Text>
            <Image
              style={[styles.tentIcon, styles.iconPosition1]}
              resizeMode="cover"
              source={require("../assets/tent-icon.png")}
            />
          </View>
          <View style={[styles.chooseButton3, styles.chooseLayout]}>
            <View
              style={[
                styles.chooseButtonChild,
                styles.buttonChildBorder,
                styles.chooseLayout,
              ]}
            />
            <Text style={[styles.hotel, styles.hotelTypo, styles.hotelLayout]}>
              Trek / Tour
            </Text>
            <Text
              style={[
                styles.aBusinessThatContainer,
                styles.businessContainerTypo,
                styles.businessContainerPosition,
              ]}
            >
              <Text style={styles.pleaseChooseA}>
                Create your own tour package or register with
              </Text>
              <Text style={styles.withUsWe}>
                our builtin treks, choose and get more clients.
              </Text>
            </Text>
            <Image
              style={[styles.tour1Icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/tour-1.png")}
            />
          </View>
          <View style={[styles.chooseButton4, styles.chooseLayout]}>
            <View
              style={[
                styles.chooseButtonChild,
                styles.buttonChildBorder,
                styles.chooseLayout,
              ]}
            />
            <Text
              style={[
                styles.transportation,
                styles.hotelTypo,
                styles.transportationLayout,
              ]}
            >
              Transportation
            </Text>
            <Text
              style={[
                styles.aBusinessThatContainer,
                styles.businessContainerTypo,
                styles.businessContainerPosition,
              ]}
            >
              <Text
                style={styles.pleaseChooseA}
              >{`Add A Vehicle or Car type with package helps `}</Text>
              <Text style={styles.withUsWe}>
                customers to book for there travel journey.
              </Text>
            </Text>
            <Image
              style={[
                styles.camper1Icon,
                styles.iconLayout,
                styles.house21Layout,
              ]}
              resizeMode="cover"
              source={require("../assets/camper-1.png")}
            />
          </View>
          <View style={[styles.chooseButton5, styles.chooseLayout]}>
            <View
              style={[
                styles.chooseButtonChild,
                styles.buttonChildBorder,
                styles.chooseLayout,
              ]}
            />
            <Text
              style={[
                styles.transportation,
                styles.hotelTypo,
                styles.transportationLayout,
              ]}
            >{`Restaurant `}</Text>
            <Text
              style={[
                styles.aBusinessThatContainer,
                styles.businessContainerTypo,
                styles.businessContainerPosition,
              ]}
            >
              <Text
                style={styles.pleaseChooseA}
              >{`Add your In-house restaurant or independent `}</Text>
              <Text style={styles.withUsWe}>
                restaurant, to avail food on arrival to guests
              </Text>
            </Text>
            <Image
              style={[styles.cutlery1Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/cutlery-1.png")}
            />
          </View>
          <View style={[styles.chooseButton6, styles.chooseLayout]}>
            <View
              style={[
                styles.chooseButtonChild,
                styles.buttonChildBorder,
                styles.chooseLayout,
              ]}
            />
            <Text
              style={[
                styles.adventureSports,
                styles.hotelTypo,
                styles.transportationLayout,
              ]}
            >
              Adventure Sports
            </Text>
            <Text
              style={[
                styles.aBusinessThatContainer,
                styles.businessContainerTypo,
                styles.businessContainerPosition,
              ]}
            >
              <Text
                style={styles.pleaseChooseA}
              >{`Create your own adventure sports / activities `}</Text>
              <Text style={styles.withUsWe}>
                package or register with our builtin activities
              </Text>
            </Text>
            <Image
              style={[
                styles.surfing1Icon,
                styles.iconPosition,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/surfing-1.png")}
            />
          </View>
        </View>
        <View style={[styles.header, styles.headerPosition]}>
          <View style={[styles.topLogo, styles.iconPosition1]}>
            <Text style={[styles.you, styles.youClr, styles.youTypo]}>
              YOU.
            </Text>
            <Text style={[styles.first, styles.youTypo, styles.backClr]}>
              <Text style={styles.first1}>FIRST</Text>
              <Text style={styles.text}>{` `}</Text>
            </Text>
          </View>
          <View style={[styles.topButton, styles.topLayout]}>
            <View
              style={[
                styles.topButtonChild,
                styles.topLayout,
                styles.buttonChildBorder,
              ]}
            />
            <Text
              style={[
                styles.needHelp,
                styles.youClr,
                styles.businessContainerTypo,
              ]}
            >
              Need Help
            </Text>
          </View>
          <View style={styles.changeLangButton}>
            <Image
              style={[styles.arrowDownIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-down.png")}
            />
            <Text style={[styles.english, styles.nextFlexBox]}>English</Text>
          </View>
          <Image
            style={[styles.progressBarIcon, styles.headerPosition]}
            resizeMode="cover"
            source={require("../assets/progress-bar.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 1132,
    width: 375,
    left: 0,
    position: "absolute",
  },
  continueLayout: {
    display: "none",
    height: 44,
    width: 160,
    top: 983,
    position: "absolute",
  },
  buttonLayout: {
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: Border.br_md,
    borderStyle: "solid",
    height: 44,
    width: 160,
    top: 0,
    left: 0,
    position: "absolute",
  },
  nextTypo: {
    width: 50,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.barlow,
    fontWeight: "600",
    top: 13,
  },
  nextFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  backClr: {
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  chooseLayout: {
    height: 82,
    width: 334,
    position: "absolute",
  },
  buttonChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_md,
    backgroundColor: Color.white,
    top: 0,
    left: 0,
  },
  hotelTypo: {
    height: 25,
    fontSize: FontSize.size_3xl,
    left: 70,
    fontWeight: "700",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.barlow,
    position: "absolute",
  },
  hotelLayout: {
    width: 100,
    height: 25,
    fontSize: FontSize.size_3xl,
  },
  businessContainerTypo: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.barlow,
  },
  businessContainerPosition: {
    left: 70,
    fontSize: FontSize.size_2xs,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    width: 34,
    height: 34,
  },
  iconPosition1: {
    left: 19,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  house21Layout: {
    width: "10.18%",
    height: "41.46%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  transportationLayout: {
    height: 25,
    fontSize: FontSize.size_3xl,
    top: 13,
  },
  iconPosition: {
    top: 24,
    position: "absolute",
    overflow: "hidden",
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
    top: 0,
    height: 1132,
    width: 375,
    left: 0,
    position: "absolute",
  },
  wrapper: {
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
  bodyChild: {
    top: 961,
    left: -21,
    borderTopWidth: 1,
    width: 376,
    height: 1,
    borderColor: "#7c7c7c",
    borderStyle: "solid",
    display: "none",
    position: "absolute",
  },
  pleaseChooseA: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  withUsWe: {
    margin: Margin.m_md,
  },
  pleaseChooseAContainer: {
    top: 59,
    left: 1,
    fontSize: FontSize.size_xs,
    whiteSpace: "pre-wrap",
    fontFamily: FontFamily.barlow,
  },
  whatTypeOfContainer: {
    fontSize: FontSize.size_4xl,
    fontWeight: "700",
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.barlow,
    top: 0,
    left: 0,
    position: "absolute",
  },
  heading: {
    width: 314,
    height: 93,
    top: 0,
    left: 0,
    position: "absolute",
  },
  chooseButtonChild: {
    borderColor: "#7c7c7c",
  },
  hotel: {
    top: 13,
    width: 100,
  },
  aBusinessThatContainer: {
    top: 38,
  },
  building1Icon: {
    top: 25,
    height: 34,
    overflow: "hidden",
  },
  chooseButton: {
    top: 131,
    left: 0,
  },
  house21: {
    top: "31.71%",
    right: "84.13%",
    bottom: "26.83%",
    left: "5.69%",
  },
  chooseButton1: {
    top: 239,
    left: 0,
  },
  camping: {
    top: 5,
  },
  aBusinessThatContainer1: {
    top: 30,
  },
  tentIcon: {
    top: 16,
    width: 39,
    height: 34,
  },
  chooseButton2: {
    top: 347,
    left: 0,
  },
  tour1Icon: {
    top: 26,
    left: 24,
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  chooseButton3: {
    top: 455,
    left: 0,
  },
  transportation: {
    width: 132,
  },
  camper1Icon: {
    top: "30.49%",
    right: "83.23%",
    bottom: "28.05%",
    left: "6.59%",
  },
  chooseButton4: {
    top: 563,
    left: 0,
  },
  cutlery1Icon: {
    width: 32,
    height: 32,
    left: 21,
    top: 24,
  },
  chooseButton5: {
    top: 671,
    left: 0,
  },
  adventureSports: {
    width: 154,
  },
  surfing1Icon: {
    left: 20,
    height: 34,
  },
  chooseButton6: {
    top: 779,
    left: 0,
  },
  body: {
    top: 83,
    height: 861,
    width: 334,
    left: 21,
    position: "absolute",
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
  },
  topLogo: {
    width: 46,
    height: 40,
    top: 0,
  },
  topButtonChild: {
    borderColor: "#f6182d",
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
    fontFamily: FontFamily.barlow,
    fontWeight: "600",
    top: 0,
    left: 0,
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
  },
  header: {
    top: 12,
    height: 53,
  },
  chooseServiceType1: {
    top: 4,
  },
  chooseServiceType: {
    flex: 1,
    width: "100%",
    height: 1136,
    overflow: "hidden",
  },
});

export default ChooseServiceType;
