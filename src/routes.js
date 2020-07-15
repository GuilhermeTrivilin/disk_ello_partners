import React from 'react'
import { View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSafeArea } from 'react-native-safe-area-context'

import Start from './pages/Start'

import Login from './pages/Auth/Login'
import RegisterFirstStep from './pages/Auth/Register/FirstStep'
import RegisterSecondStep from './pages/Auth/Register/SecondStep'
import RegisterThirdStep from './pages/Auth/Register/ThirdStep'
import RegisterFourthStep from './pages/Auth/Register/FourthStep'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {

    const insets = useSafeArea()

    return (
        <View style={{ paddingTop: insets.top, flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Start' screenOptions={{ headerShown: false }} >
                    <Stack.Screen name='Start' component={Start} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='RegisterFirstStep' component={RegisterFirstStep} />
                    <Stack.Screen name='RegisterSecondStep' component={RegisterSecondStep} />
                    <Stack.Screen name='RegisterThirdStep' component={RegisterThirdStep} />
                    <Stack.Screen name='RegisterFourthStep' component={RegisterFourthStep} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}