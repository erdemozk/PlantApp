import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import style from './style';

type GradientTextProps = LinearGradientProps & {
  children: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  textStyle,
  colors = ['black', 'white'],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  locations,
  useAngle,
  angle,
  angleCenter,
}) => (
  <MaskedView
    style={style.container}
    maskElement={
      <Text style={[textStyle, style.maskedText]}>{children}</Text>
    }
  >
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      locations={locations}
      useAngle={useAngle}
      angle={angle}
      angleCenter={angleCenter}
    >
      <Text style={[textStyle, style.text]}>{children}</Text>
    </LinearGradient>
  </MaskedView>
);

export default GradientText;