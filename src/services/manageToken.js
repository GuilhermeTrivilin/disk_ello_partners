import AsyncStorage from '@react-native-community/async-storage';

export const saveToken = async (token) => {
    await AsyncStorage.setItem('@welldelivery_app/token', token)
}

export const getToken = async () => {
    const token = await AsyncStorage.getItem('@welldelivery_app/token')
    return token
}

export const deleteToken = async () => {
    await AsyncStorage.removeItem('@welldelivery_app/token')
}