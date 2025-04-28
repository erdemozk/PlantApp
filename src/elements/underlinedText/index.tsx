import React, { useState } from 'react';
import { View, Text, Image, LayoutChangeEvent, StyleProp, TextStyle } from 'react-native';
import styles from './style';

type UnderlineLayoutType = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type UnderlinedTextProps = {
  text: string;
  boldWord: string;
  fontSize: number;
  underlineOffsetRatio: number;
  textStyle: StyleProp<TextStyle>;
  boldStyle: StyleProp<TextStyle>;
};

const UnderlinedText: React.FC<UnderlinedTextProps> = ({
  text = '',
  textStyle,
  boldStyle,
  boldWord,
  fontSize,
  underlineOffsetRatio,
}) => {
  const [underlineLayout, setUnderlineLayout] = useState<UnderlineLayoutType | null>(null);

  const textParts = text.split('{%b%}');
  const calculatedLineHeight = fontSize * 1.2;
  const underlineOffset = fontSize * underlineOffsetRatio;

  const handleLayout = (event: LayoutChangeEvent) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setUnderlineLayout({ x, y, width, height });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textRow}>
        <Text style={[textStyle, { fontSize, lineHeight: calculatedLineHeight }]}>
          {textParts[0]}
        </Text>

        <View
          onLayout={handleLayout}
          style={{ minHeight: calculatedLineHeight, justifyContent: 'flex-end' }}>
          <Text
            style={[boldStyle, { fontSize, lineHeight: calculatedLineHeight }]}>
            {boldWord}
          </Text>
        </View>

        <Text style={[textStyle, { fontSize, lineHeight: calculatedLineHeight }]}>
          {textParts[1]}
        </Text>
      </View>

      {underlineLayout && (
        <Image
          source={require('src/assets/images/brush.png')}
          style={[
            styles.underline,
            {
              left: underlineLayout.x,
              width: underlineLayout.width,
              top: underlineLayout.y + underlineLayout.height - underlineOffset,
            },
          ]}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

export default UnderlinedText;
