import AppSettings from '@appSettings';
import { StyleSheet } from "react-native";
import { smartScale, verticalScale } from '_utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: verticalScale(12),
    backgroundColor: '#FFFFFF'
  },
  headerTitle: {
    color: '#13231B',
    alignItems: 'center',
    paddingLeft: verticalScale(24),
    fontFamily: AppSettings.fonts["500"],
  },
  boldWord: {
    color: '#13231B',
    fontFamily: AppSettings.fonts["800"]
  },
  headerContent: {
    fontSize: 16,
    marginTop: 8,
    color: 'rgba(19, 35, 27, 0.7)'
  },
  onboardingImage: {
    flex: 1,
    width: '100%',
    marginTop: verticalScale(20),
  },
  footerContainer: {
    bottom: 0,
    width: '100%',
    position: 'absolute',
  },
  buttonContainer: {
    marginHorizontal: smartScale(24),
  },
  dotsContainer: {
    marginVertical: verticalScale(33),
    alignSelf: 'center',
  }
});

export default styles;