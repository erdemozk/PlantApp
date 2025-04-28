import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'elements';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

interface ScanBottomBarProps {
  onPress: () => void;
}

const ScanBottomBar: React.FC<ScanBottomBarProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={onPress}>
      <LinearGradient
        useAngle
        angle={-27}
        style={styles.gradient}
        colors={['#2CCC80', '#28AF6E']}>
        <Icon name="identify" size={25} color="#FFFFFF" />
      </LinearGradient>
      <View style={styles.innerBorder} />
    </TouchableOpacity>
  );
};

export default ScanBottomBar;
