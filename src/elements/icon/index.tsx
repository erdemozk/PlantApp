import React from 'react';
import { StyleProp, TextStyle, ColorValue } from 'react-native';
import createIconSet from '@react-native-vector-icons/icomoon';
import AppSettings from '@appSettings';

const icomoonJson = AppSettings.icomoonJson
const IconComponent = icomoonJson ? createIconSet(icomoonJson) : () => null;

interface IconProps {
  name: string;
  size: number;
  color: ColorValue;
  style?: StyleProp<TextStyle>;
}

const Icon = ({ style, name, size, color }: IconProps) => {
  if (!icomoonJson) return null;

  return <IconComponent name={name} size={size} color={color} style={style} />;
};

export default Icon;