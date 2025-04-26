import AppSettings from '@appSettings';
import { StyleSheet } from 'react-native';
import { smartScale } from '_utils';

const styles = StyleSheet.create({
  imageBackground: {
    borderWidth: 1,
    borderRadius: 12,
    overflow: 'hidden',
    paddingHorizontal: 14,
    width: smartScale(240),
    height: smartScale(164),
    justifyContent: 'flex-end',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  title: {
    height: 50,
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 5,
    color: '#FFFFFF',
    letterSpacing: -0.24,
    alignSelf: 'flex-start',
    fontFamily: AppSettings.fonts['500'],
  },
});

export default styles;
