import Toast from 'react-native-root-toast';

export const showToast = (message) => {
    Toast.show(message, {
        duration: Toast.durations.LONG,
        position: -100,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: 'gray'
    })
}