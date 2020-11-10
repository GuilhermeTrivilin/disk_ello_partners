import React from 'react'
import { View } from 'react-native'

import DrawerContent from '~/components/DrawerContent'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useSafeArea } from 'react-native-safe-area-context'

import Start from './pages/Start'
import Preload from './pages/Preload'

import Login from './pages/Auth/Login'
import RegisterFirstStep from './pages/Auth/Register/FirstStep'
import RegisterSecondStep from './pages/Auth/Register/SecondStep'
import RegisterThirdStep from './pages/Auth/Register/ThirdStep'
import RegisterFourthStep from './pages/Auth/Register/FourthStep'
import RegisterFifthStep from './pages/Auth/Register/FifthStep'
import RegisterSixthStep from './pages/Auth/Register/SixthStep'

import Home from './pages/Main/Home'
import ContactUs from './pages/Main/ContactUs'
import OrdersWaiting from './pages/Main/OrdersWaiting'
import OrdersFinalized from './pages/Main/OrdersFinalized'
import Profile from './pages/Main/Profile'

import MarketplaceHome from './pages/Main/MarketplaceHome'
import MarketplaceCart from './pages/Main/MarketplaceCart'
import MarketplaceFavorites from './pages/Main/MarketplaceFavorites'
import MarketplaceHistory from './pages/Main/MarketplaceHistory'
import MarketplaceRequest from './pages/Main/MarketplaceRequest'
import MarketplaceProducts from './pages/Main/MarketplaceProducts'
import MarketplaceProductDetails from './pages/Main/MarketplaceProductDetails'
import MarketplaceProductsComments from './pages/Main/MarketplaceProductsComments'
import MarketplaceProductPayment from './pages/Main/MarketplaceProductPayment'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Connected = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            initialRouteName="MarketplaceHome"
        >
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='ContactUs' component={ContactUs} />
            <Drawer.Screen name='OrdersWaiting' component={OrdersWaiting} />
            <Drawer.Screen name='OrdersFinalized' component={OrdersFinalized} />
            <Drawer.Screen name='Profile' component={Profile} />
            <Drawer.Screen name='MarketplaceHome' component={MarketplaceHome} />
        </Drawer.Navigator>
    )
}

export default function Routes() {

    const insets = useSafeArea()

    return (
        <View style={{ paddingTop: insets.top, flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Preload' screenOptions={{ headerShown: false }} >
                    <Stack.Screen name='Preload' component={Preload} />
                    <Stack.Screen name='Start' component={Start} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='RegisterFirstStep' component={RegisterFirstStep} />
                    <Stack.Screen name='RegisterSecondStep' component={RegisterSecondStep} />
                    <Stack.Screen name='RegisterThirdStep' component={RegisterThirdStep} />
                    <Stack.Screen name='RegisterFourthStep' component={RegisterFourthStep} />
                    <Stack.Screen name='RegisterFifthStep' component={RegisterFifthStep} />
                    <Stack.Screen name='RegisterSixthStep' component={RegisterSixthStep} />
                    <Stack.Screen name='Connected' component={Connected} />
                    <Stack.Screen name='MarketplaceCart' component={MarketplaceCart} />
                    <Stack.Screen name='MarketplaceFavorites' component={MarketplaceFavorites} />
                    <Stack.Screen name='MarketplaceHistory' component={MarketplaceHistory} />
                    <Stack.Screen name='MarketplaceRequest' component={MarketplaceRequest} />
                    <Stack.Screen name='MarketplaceProducts' component={MarketplaceProducts} />
                    <Stack.Screen name='MarketplaceProductDetails' component={MarketplaceProductDetails} />
                    <Stack.Screen name='MarketplaceProductsComments' component={MarketplaceProductsComments} />
                    <Stack.Screen name='MarketplaceProductPayment' component={MarketplaceProductPayment} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}