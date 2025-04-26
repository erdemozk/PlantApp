import { StyleSheet } from "react-native";
import AppSettings from '@appSettings';
import { smartScale, verticalScale } from "_utils";

const defaultStyle = StyleSheet.create({
  container: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#28AF6E',
    paddingVertical: verticalScale(16),
  },
  text: {
    color: '#FFFFFF',
    letterSpacing: 0.24,
    fontSize: smartScale(16),
    lineHeight: smartScale(24),
    fontFamily: AppSettings.fonts["500"],
  }
});

export default defaultStyle;