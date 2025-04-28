import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppSettings from '@appSettings';

export interface FeatureItem {
  icon: string;
  title: string;
  subtitle: string;
}

export type OptionType = {
  value: 'month' | 'year'
}

const PaywallLogics = () => {
  const navigation = useNavigation()
  const [selectedOption, setSelectedOption] = useState<'month' | 'year'>('year');

  const featuresData = [
    {
      icon: 'scanner',
      title: "Unlimited",
      subtitle: "Plant Identify"
    },
    {
      icon: 'speed',
      title: "Faster",
      subtitle: "Process"
    },
    {
      icon: 'leaves',
      title: "Detailed",
      subtitle: "Plant care"
    }
  ] as FeatureItem[]

  const onboardingCompleted = async (): Promise<void> => {
    try {
      await AsyncStorage.setItem(AppSettings.asyncStorageKeys.onboarding, 'true');
    } catch {}
    finally {
      navigation.navigate('MainTabs')
    }
  };

  const handleClose = async (): Promise<void> => {
    onboardingCompleted()
  };

  const handleTryFree = async (): Promise<void> => {
    // TODO: Implement purchase logic
    onboardingCompleted()
  };

  const handleRestore = (): void => {
    // TODO: Implement restore purchases logic
  };

  const handleAgreements = (): void => {
    // TODO: Implement agreement modal logic
  };

  const handleSelectOption = (value: 'month' | 'year'): void => setSelectedOption(value);

  return {
    selectedOption,
    featuresData,
    handleClose,
    handleTryFree,
    handleRestore,
    handleAgreements,
    handleSelectOption
  };
};


const PaywallContainer = (WrappedComponent: React.FC) => {
  return props => {
    const overviewProps = PaywallLogics();
    return <WrappedComponent {...props} {...overviewProps} />;
  };
};

export default PaywallContainer;