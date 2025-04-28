import AppSettings from '@appSettings';
import { StyleSheet, Platform } from 'react-native';
import { smartScale, verticalScale } from '_utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFAFA',
  },
  headerContainer: {
    zIndex: 1,
    paddingHorizontal: smartScale(24),
    marginTop: Platform.OS === 'ios' ? 0 : 10,
  },
  headerTitle: {
    color: '#13231B',
    letterSpacing: 0.07,
    fontSize: smartScale(16),
    fontFamily: AppSettings.fonts['400'],
  },
  welcomeText: {
    color: '#13231B',
    lineHeight: 28,
    letterSpacing: 0.35,
    fontSize: smartScale(24),
    marginTop: verticalScale(6),
    fontFamily: AppSettings.fonts['500'],
  },
  headerImage: {
    width: '100%',
    position: 'absolute',
    top: Platform.OS === 'ios' ? smartScale(-45) : smartScale(-25),
  },
  searchContainer: {
    gap: 12,
    borderWidth: 0.2,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: verticalScale(14),
    marginHorizontal: smartScale(24),
    paddingHorizontal: smartScale(16),
    paddingVertical: verticalScale(12),
    borderColor: 'rgba(60, 60, 67, 0.25)',
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 15.5,
    letterSpacing: 0.07,
    fontFamily: AppSettings.fonts['400'],
  },
  promotionContainer: {
    gap: 16,
    height: 64,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: smartScale(24),
    backgroundColor: '#24201A',
    marginHorizontal: smartScale(24),
    paddingHorizontal: smartScale(12),
    paddingVertical: verticalScale(13),
  },
  mailImage: {
    width: smartScale(40),
  },
  promotionTextContainer: {
    flex: 10
  },
  promotionTitle: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.32,
    fontFamily: AppSettings.fonts['600'],
  },
  promotionSubTitle: {
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: 0,
    fontFamily: AppSettings.fonts['400'],
  },
  getStartedTitle: {
    fontSize: 15,
    marginTop: 24,
    lineHeight: 20,
    color: '#13231B',
    letterSpacing: -0.24,
    marginLeft: smartScale(24),
    fontFamily: AppSettings.fonts['500'],
  },
  questionContainer: {
    marginTop: smartScale(16),
  },
  questionContentContainer: {
    gap: 10,
    paddingHorizontal: smartScale(24),
  },
  categoriesContainer: {
    marginTop: smartScale(16),
  },
  categoriesContentContainer: {
    gap: 16,
    paddingBottom: 30,
    paddingHorizontal: smartScale(24),
  },
});

export default styles;
