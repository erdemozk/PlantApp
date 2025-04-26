import AppSettings from '@appSettings';
import { StyleSheet } from "react-native";
import { smartScale, verticalScale, scale } from '_utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  headerContainer: {
    paddingHorizontal: smartScale(24)
  },
  headerTitle: {
    lineHeight: 28,
    color: '#13231B',
    letterSpacing: 0.07,
    fontSize: smartScale(28),
    paddingTop: verticalScale(12),
    fontFamily: AppSettings.fonts["400"],
  },
  semiBold: {
    fontFamily: AppSettings.fonts["600"]
  },
  headerSubtitle: {
    maxWidth: '85%',
    letterSpacing: 0.07,
    fontSize: smartScale(16),
    lineHeight: smartScale(22),
    marginTop: verticalScale(8),
    color: 'rgba(19, 35, 27, 0.7)',
    fontFamily: AppSettings.fonts["400"],
  },
  image: {
    width: scale(375),
    height: scale(499),
    marginTop: verticalScale(24),
  },
  buttonContainer: {
    marginHorizontal: smartScale(24)
  },
  agreementsText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: smartScale(11),
    marginTop: verticalScale(17),
    lineHeight: verticalScale(15),
    color: 'rgba(89, 113, 101, 0.7)',
    fontFamily: AppSettings.fonts["400"],
  },
  underlineDecoration: {
    textDecorationLine: 'underline'
  }
});

export default styles;