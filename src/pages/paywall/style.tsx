import AppSettings from '@appSettings';
import { StyleSheet, Platform } from "react-native";
import { smartScale, verticalScale, scale } from '_utils';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#101E17',
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  closeButton: {
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: smartScale(24),
    height: smartScale(24),
    justifyContent: 'center',
    marginRight: smartScale(24),
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
  },
  paywallImage: {
    width: '100%', 
    height: scale(570),
    position: 'absolute', 
    top: Platform.OS === 'ios' ? verticalScale(-40) : verticalScale(-110),
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    marginHorizontal: smartScale(24),
    marginTop: verticalScale(190),
    fontFamily: AppSettings.fonts['400'],
  },
  titleBold: {
    fontSize: 30,
    fontFamily: AppSettings.fonts['700'],
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 20,
    marginHorizontal: smartScale(24),
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: AppSettings.fonts['300'],
  },
  featuresContainer: {
    marginBottom: 24,
  },
  featuresContentContainer: {
    gap: 8,
    paddingHorizontal: smartScale(24)
  },
  featureCard: {
    borderRadius: 14,
    width: smartScale(156),
    padding: smartScale(16),
    height: verticalScale(130),
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  featureIconContainer: {
    width: smartScale(36),
    height: smartScale(36),
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    borderRadius: 8
  },
  featureTitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ffffff',
    marginTop: verticalScale(16),
    fontFamily: AppSettings.fonts['500'],
  },
  featureSubtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: AppSettings.fonts['400'],
  },
  optionsContainer: {
    marginHorizontal: smartScale(24),
    gap: verticalScale(16),
    marginBottom: verticalScale(26),
  },
  optionButton: {
    borderWidth: 0.5,
    borderRadius: 14,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: smartScale(13),
    paddingHorizontal: smartScale(16),
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  optionButtonSelected: {
    borderColor: '#28AF6E',
    backgroundColor: 'transparent',
    borderWidth: 1.5
  },
  radioCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.08)'
  },
  radioCircleSelected: {
    backgroundColor: '#28AF6E',
  },
  radioInnerCircle: {
    width: 8,
    height: 8,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: AppSettings.fonts['500'],
  },
  optionSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: AppSettings.fonts['400'],
  },
  optionSubtitleLight: {
    fontFamily: AppSettings.fonts['300']
  },
  saveBadge: {
    position: 'absolute',
    top: -1,
    right: -1,
    backgroundColor: '#28AF6E',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 20,
  },
  saveBadgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  tryButtonContainer: {
    marginHorizontal: smartScale(24),
  },
  disclaimerText: {
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: verticalScale(8),
    marginHorizontal: smartScale(24),
    color: 'rgba(255, 255, 255, 0.52)',
    fontFamily: AppSettings.fonts['300']
  },
  footerLinks: {
    fontSize: 11,
    marginTop: 10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: smartScale(24),
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: AppSettings.fonts['400'],
  },
});

export default styles;