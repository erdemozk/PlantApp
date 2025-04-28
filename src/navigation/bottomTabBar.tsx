import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  DiagnoseScreen,
  ScanScreen,
  MyGardenScreen,
  ProfileScreen,
} from 'pages';
import { Icon } from 'elements';
import { Platform } from 'react-native';
import { ScanBottomButton } from 'components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type MainTabParamList = {
  Home: undefined;
  Diagnose: undefined;
  Scan: undefined;
  MyGarden: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  const insets = useSafeAreaInsets()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#28AF6E',
        tabBarInactiveTintColor: '#BDBDBD',
        tabBarStyle: Platform.select({
          android: {
            height: 60 + insets.bottom,
          }
        }),
        tabBarLabelStyle: {
          paddingTop: 2
        }
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        name="Diagnose"
        component={DiagnoseScreen}
        options={{
          title: 'Diagnose',
          tabBarIcon: ({color}) => (
            <Icon name="healthcare" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarButton: ({onPress}) => <ScanBottomButton onPress={onPress} />,
        }}
      />
      <Tab.Screen
        name="MyGarden"
        component={MyGardenScreen}
        options={{
          title: 'My Garden',
          tabBarIcon: ({color}) => (
            <Icon name="garden" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="profile" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
