import { Dimensions, PixelRatio } from 'react-native';

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const scale = (size: number): number => (SCREEN_WIDTH / guidelineBaseWidth) * size;
const verticalScale = (size: number): number => (SCREEN_HEIGHT / guidelineBaseHeight) * size;
const smartScale = (size: number): number => PixelRatio.roundToNearestPixel(scale(size));

export {
  scale,
  smartScale,
  verticalScale,
}