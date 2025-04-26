import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { GetStartedScreen, OnboardingScreen, PaywallScreen } from 'pages';
import AppSettings from '@appSettings';
import MainTabs from './bottomTabBar';

export type RootStackParamList = {
  OnboardingStack: undefined;
  MainTabs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const OnboardingStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='GetStartedScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="PaywallScreen" component={PaywallScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator: React.FC = () => {
  const [initialRoute, setInitialRoute] = useState<'OnboardingStack' | 'MainTabs' | null>(null);

  const checkOnboardingStatus = async () => {
    try {
      const value = await AsyncStorage.getItem(AppSettings.asyncStorageKeys.onboarding);
      if (value === 'true') setInitialRoute('MainTabs');
      else setInitialRoute('OnboardingStack');
    } catch {
      setInitialRoute('OnboardingStack');
    }
  };

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  if (initialRoute === null) return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" />
    </View>
  );

  return (
    <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default AppNavigator;