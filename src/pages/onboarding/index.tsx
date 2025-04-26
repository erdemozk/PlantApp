import React from 'react';
import { Text, SafeAreaView, Image, View } from 'react-native';
import { Button } from 'elements';
import { PaginationDots } from 'components';
import { OnboardingContainer } from 'pageContainers';
import styles from './style';

interface OnboardingItem {
  index: number;
  title: string;
  boldWord: string;
  image: any;
}

type Props = {
  onboardingItem: OnboardingItem;
  onContinue: () => void;
  totalItems: number;
  activeIndex: number;
};

const OnboardingScreen: React.FC<Props> = ({
  onboardingItem,
  onContinue,
  totalItems,
  activeIndex,
}) => {
  const titleParts = onboardingItem.title.split('{%b%}');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>
        {titleParts[0]}
        <Text style={styles.boldWord}>{onboardingItem.boldWord}</Text>
        {titleParts[1]}
      </Text>
      <Image
        source={onboardingItem.image}
        style={styles.onboardingImage}
      />
      <View style={styles.footerContainer}>
        <Button
          title="Continue"
          onPress={onContinue}
          containerStyle={styles.buttonContainer}
        />
        <PaginationDots
          totalItems={totalItems}
          activeIndex={activeIndex}
          containerStyle={styles.dotsContainer}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingContainer(OnboardingScreen);
