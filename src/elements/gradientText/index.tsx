import React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import style from './style';

const GradientText = props => {
  return (
    <MaskedView
      style={style.container}
      maskElement={
        <Text style={[props.style, style.maskedText]}>{props.children}</Text>
      }>
      <LinearGradient
        colors={props.colors || ['black', 'white']}
        start={props.start || {x: 0, y: 0}}
        end={props.end || {x: 1, y: 0}}
        locations={props.locations}
        useAngle={props.useAngle}
        angle={props.angle}
        angleCenter={props.angleCenter}>
        <Text style={[props.style, style.text]}>{props.children}</Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
