import React from 'react';
import {
  Text,
  ViewStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import defaultStyle from './defaultStyle';

interface Props {
  title: string;
  disabled?: boolean
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

const Button: React.FC<Props> = ({
  title = '',
  disabled = false,
  onPress = () => { },
  textStyle = defaultStyle.text,
  containerStyle = defaultStyle.container,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[defaultStyle.container, containerStyle]}>
    <Text style={textStyle}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
