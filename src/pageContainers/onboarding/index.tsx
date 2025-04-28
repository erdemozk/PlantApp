import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

interface OnboardingItem {
  index: number;
  title: string;
  boldWord: string;
  image: any;
}

const onboardingData: OnboardingItem[] = [
  {
    index: 0,
    title: 'Take a photo to {%b%} the plant!',
    boldWord: 'identify',
    image: require('src/assets/images/onboardingOne.png')
  },
  {
    index: 1,
    title: 'Get plant {%b%}',
    boldWord: 'care guides',
    image: require('src/assets/images/onboardingTwo.png')
  },
  {
    index: 2,
    title: 'Paywall',
    boldWord: '',
    image: require('src/assets/images/paywall.png')
  }
];

const OnboardingLogics = () => {
  const navigation = useNavigation()
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  const handleContinue = (): void => {
    if (currentPageIndex === 0) return setCurrentPageIndex(1);
    else return navigation.navigate('PaywallScreen');
  };

  const currentOnboardingItem = onboardingData[currentPageIndex];

  return {
    onboardingItem: currentOnboardingItem,
    onContinue: handleContinue,
    totalItems: onboardingData.length,
    activeIndex: currentPageIndex,
  };
};

const OnboardingContainer = (WrappedComponent: React.FC) => {
  return props => {
    const overviewProps = OnboardingLogics();
    return <WrappedComponent {...props} {...overviewProps} />;
  };
};

export default OnboardingContainer;