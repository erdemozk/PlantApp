import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    borderRadius: 50,
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: Platform.OS === 'android' ? 20: 10,
  },
  gradient: {
    width: 64,
    height: 64,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerBorder: {
    width: 64,
    zIndex: 1,
    height: 64,
    borderWidth: 4,
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: 'transparent',
    borderColor: 'rgba(255, 255, 255, 0.24)',
  }
});

export default styles