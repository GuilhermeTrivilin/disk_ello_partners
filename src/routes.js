import React from 'react'
import { View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSafeArea } from 'react-native-safe-area-context'

import Start from './pages/Start'

import Login from './pages/Auth/Login'
import RegisterFirstStep from './pages/Auth/Register/FirstStep'

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
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}