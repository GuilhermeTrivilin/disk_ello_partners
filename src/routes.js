import React from 'react'
import { View } from 'react-native'

import DrawerContent from '~/components/DrawerContent'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useSafeArea } from 'react-native-safe-area-context'

import Start from './pages/Start'

import Login from './pages/Auth/Login'
import RegisterFirstStep from './pages/Auth/Register/FirstStep'
import RegisterSecondStep from './pages/Auth/Register/SecondStep'
import RegisterThirdStep from './pages/Auth/Register/ThirdStep'
import RegisterFourthStep from './pages/Auth/Register/FourthStep'
import RegisterFifthStep from './pages/Auth/Register/FifthStep'
import RegisterSixthStep from './pages/Auth/Register/SixthStep'

import Home from './pages/Main/Home'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Connected = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name='Home' component={Home} />
        </Drawer.Navigator>
    )
}

export default function Routes() {

    const insets = useSafeArea()

    return (
        <View style={{ paddingTop: insets.top, flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Connected' screenOptions={{ headerShown: false }} >
                    <Stack.Screen name='Start' component={Start} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='RegisterFirstStep' component={RegisterFirstStep} />
                    <Stack.Screen name='RegisterSecondStep' component={RegisterSecondStep} />
                    <Stack.Screen name='RegisterThirdStep' component={RegisterThirdStep} />
                    <Stack.Screen name='RegisterFourthStep' component={RegisterFourthStep} />
                    <Stack.Screen name='RegisterFifthStep' component={RegisterFifthStep} />
                    <Stack.Screen name='RegisterSixthStep' component={RegisterSixthStep} />
                    <Stack.Screen name='Connected' component={Connected} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}