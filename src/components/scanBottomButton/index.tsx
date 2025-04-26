import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'elements';
import styles from './style';

interface ScanBottomBarProps {
  onPress: () => void
}

const ScanBottomBar: React.FC<ScanBottomBarProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.container}>
      <Icon name="identify" size={25} color="#FFFFFF" />
    </TouchableOpacity>
  )
};

export default ScanBottomBar;
