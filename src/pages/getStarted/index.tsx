import React from 'react';
import { View, Text, SafeAreaView, Image, ImageBackground } from 'react-native';
import { GetStartedContainer } from 'pageContainers';
import { Button } from 'elements';
import styles from './style';

type Props = {
  handleGetStarted: () => void;
  handleAgreement: () => void;
};

const GetStartedScreen: React.FC<Props> = ({
  handleGetStarted,
  handleAgreement,
}) => (
  <ImageBackground
    source={require('src/assets/images/getStartedBackground.png')}
    style={styles.imageBackground}>
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>
          Welcome to <Text style={styles.semiBold}>PlantApp</Text>
        </Text>
        <Text style={styles.headerSubtitle}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </View>
      <Image
        source={require('src/assets/images/getStarted.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Button
        title="Get Started"
        onPress={handleGetStarted}
        containerStyle={styles.buttonContainer}
      />
      <Text style={styles.agreementsText}>
        By tapping next, you are agreeing to PlantID{'\n'}
        <Text onPress={handleAgreement} style={styles.underlineDecoration}>
          Terms of Use
        </Text>{' '}
        &{' '}
        <Text onPress={handleAgreement} style={styles.underlineDecoration}>
          Privacy Policy.
        </Text>
      </Text>
    </SafeAreaView>
  </ImageBackground>
);

export default GetStartedContainer(GetStartedScreen);
