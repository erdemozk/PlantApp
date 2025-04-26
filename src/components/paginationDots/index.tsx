import React, { useMemo, memo } from 'react';
import { View, StyleProp, ViewStyle, ColorValue } from 'react-native';
import defaultStyles from './defaultStyle';

interface PaginationDotsProps {
  dotSpace?: number;
  totalItems: number;
  activeIndex: number;
  activeDotSize?: number;
  inactiveDotSize?: number;
  activeDotColor?: ColorValue
  inactiveDotColor?: ColorValue
  dotStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const DOT_SPACE = 8;
const ACTIVE_DOT_SIZE = 10;
const INACTIVE_DOT_SIZE = 6;
const ACTIVE_COLOR = '#13231B';
const INACTIVE_COLOR = 'rgba(19, 35, 27, 0.25)';

const PaginationDots: React.FC<PaginationDotsProps> = ({
  dotStyle,
  totalItems,
  activeIndex,
  containerStyle,
  dotSpace = DOT_SPACE,
  activeDotColor = ACTIVE_COLOR,
  activeDotSize = ACTIVE_DOT_SIZE,
  inactiveDotColor = INACTIVE_COLOR,
  inactiveDotSize = INACTIVE_DOT_SIZE,
}) => {
  if (totalItems <= 0 || activeIndex < 0 || activeIndex >= totalItems) return null;

  const dots = useMemo(
    () =>
      Array.from({ length: totalItems }, (_, index) => (
        <View
          key={`dot_${index}`}
          style={[{
            marginHorizontal: dotSpace,
            width: index === activeIndex ? activeDotSize : inactiveDotSize,
            height: index === activeIndex ? activeDotSize : inactiveDotSize,
            backgroundColor: index === activeIndex ? activeDotColor : inactiveDotColor,
            borderRadius: (index === activeIndex ? activeDotSize : inactiveDotSize) / 2,
          },
            dotStyle,
          ]}
        />
      )),
    [totalItems, activeIndex, dotStyle]
  );

  return <View style={[defaultStyles.container, containerStyle]}>{dots}</View>;
};

export default memo(PaginationDots);
