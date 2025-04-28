import React from 'react';
import { StyleProp, TextStyle, ColorValue } from 'react-native';
import createIconSet from '@react-native-vector-icons/icomoon';
import AppSettings from '@appSettings';
import MultiColorIcon from './multiColorIcon';

const icomoonJson = AppSettings.icomoonJson;
const IconComponent = icomoonJson ? createIconSet(icomoonJson) : () => null;

interface IconProps {
  name: string;
  size: number;
  color?: ColorValue;
  style?: StyleProp<TextStyle>;
}

const Icon = ({ style, name, size, color }: IconProps) => {
  if (!icomoonJson) return null;
  const currentIcon = icomoonJson.icons.find(item => item?.properties?.name === name);
  const isMultiColor = currentIcon?.icon?.isMulticolor;

  if (!currentIcon) return null;

  return isMultiColor ? (
    <MultiColorIcon name={name} currentIcon={currentIcon} size={size} />
  ) : (
    <IconComponent name={name} size={size} color={color} style={style} />
  );
};

export default Icon;
