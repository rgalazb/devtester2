import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Step1, Step2, Step3 } from './screens'

const AppNavigator = createStackNavigator({
  Step1: {
    screen: Step1,
  },
  Step2: {
    screen: Step2,
  },
  Step3: {
    screen: Step3,
  }
},
{
  initialRouteName: 'Step1'
});

export default createAppContainer(AppNavigator);