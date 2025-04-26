import AppSettings from '@appSettings';
import { StyleSheet } from 'react-native';
import { smartScale } from '_utils';

const styles = StyleSheet.create({
  imageBackground: {
    paddingTop: 16,
    marginRight: 11,
    paddingLeft: 16,
    borderRadius: 12,
    borderWidth: 0.5,
    overflow: 'hidden',
    width: smartScale(158),
    height: smartScale(152),
    backgroundColor: '#F4F6F6',
    borderColor: 'rgba(41, 187, 137, 0.18)',
  },
  title: {
    height: 50,
    maxWidth: '50%',
    lineHeight: 21,
    color: '#13231B',
    letterSpacing: -0.32,
    fontFamily: AppSettings.fonts['500'],
  },
});

export default styles;
