import AsyncStorage from '@react-native-community/async-storage';

export const saveToken = async (token) => {
    await AsyncStorage.setItem('@disk_ello_partners/token', token)
}

export const getToken = async () => {
    const token = await AsyncStorage.getItem('@disk_ello_partners/token')
    return token
}

export const deleteToken = async () => {
    await AsyncStorage.removeItem('@disk_ello_partners/token')
}