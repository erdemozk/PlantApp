import React from 'react';
import { useNavigation } from '@react-navigation/native';

const GetStartedLogics = () => {
  const navigation = useNavigation()

  const handleGetStarted = (): void => navigation.navigate('OnboardingScreen');

  const handleAgreement = (type: string): void => {
    // HANDLE DUE TO TYPE OF AGREEMENT
  };

  return {
    handleAgreement,
    handleGetStarted
  };
};


const GetStartedContainer = (WrappedComponent: React.FC) => {
  return props => {
    const overviewProps = GetStartedLogics();
    return <WrappedComponent {...props} {...overviewProps} />;
  };
};

export default GetStartedContainer;