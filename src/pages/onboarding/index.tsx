import React from 'react';
import { SafeAreaView, Image, View } from 'react-native';
import { Button, UnderlinedText } from 'elements';
import { PaginationDots } from 'components';
import { OnboardingContainer } from 'pageContainers';
import { smartScale } from '_utils';
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

  return (
    <SafeAreaView style={styles.container}>
      <UnderlinedText
        fontSize={smartScale(28)}
        underlineOffsetRatio={.5}
        text={onboardingItem.title}
        boldStyle={styles.boldWord}
        textStyle={styles.headerTitle}
        boldWord={onboardingItem.boldWord}
      />
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
