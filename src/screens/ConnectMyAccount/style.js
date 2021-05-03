import { Platform as PF, StyleSheet } from "react-native";
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from "../../common";
import COLORS from "../../common/colors";
import platform from "../../helpers/platform";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  flexCenter: {
    alignItems: "center",
  },
  paddingTop: {
    paddingTop: PF.OS==="ios"?0:GetOptimalHieght(50),
  },
  title: {
    color: COLORS.POST_USERNAME,
    textAlign: "center",
    fontSize: scaledFontSize(20),
    // fontFamily: 'Poppins',
    fontWeight: "600",
    paddingVertical: GetOptimalHieght(10),
  },
  poweredBy: {
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_BLUE,
    padding: GetOptimalHieght(10),
    marginVertical: GetOptimalHieght(20),
    borderRadius: GetOptimalHieght(6),
    fontSize: scaledFontSize(12),
    color: COLORS.PRIMARY_BLUE,
    fontWeight: "500",
  },
  bold: {
    fontSize: 14,
    fontWeight: "700",
  },
  text: {
    fontSize: scaledFontSize(12),
    color: COLORS.PRIMARY_BLUE,
    fontWeight: "500",
    textAlign: "center",
    width: "70%",
    marginBottom: GetOptimalHieght(25),
  },
  maginVer: {
    marginVertical: GetOptimalHieght(30),
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  blueButton: {
    backgroundColor: COLORS.PRIMARY_LIGHT_BLUE,
    paddingHorizontal: GetOptimalWidth(15),
    paddingVertical: GetOptimalHieght(14),
    borderRadius: GetOptimalHieght(6),
  },
  blueButtonText: {
    textAlign: "center",
    fontSize: scaledFontSize(12),
    //   fontFamily: 'Poppins',
    fontWeight: "600",
    color: COLORS.WHITE,
  },
  cancelButton: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: GetOptimalWidth(15),
    paddingVertical: GetOptimalHieght(14),
    borderRadius: GetOptimalHieght(6),
    borderColor: COLORS.PRIMARY_LIGHT_BLUE,
    borderWidth: 1,
    width: GetOptimalWidth(150),
  },
  confirmButton: {
    backgroundColor: COLORS.PRIMARY_LIGHT_BLUE,
    paddingHorizontal: GetOptimalWidth(15),
    paddingVertical: GetOptimalHieght(14),
    borderRadius: GetOptimalHieght(6),
    width: GetOptimalWidth(150),
  },
  cancelButtonText: {
    textAlign: "center",
    fontSize: scaledFontSize(12),
    //   fontFamily: 'Poppins',
    fontWeight: "600",
    color: COLORS.PRIMARY_BLUE,
  },
});
