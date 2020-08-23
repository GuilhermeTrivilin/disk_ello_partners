import React from 'react'
import { TouchableWithoutFeedback, Keyboard, StyleSheet, View } from 'react-native'

import Modal from 'react-native-modal';

const DefaultModal = ({
    visible,
    closeModal,
    children,
    styleContainer
}) => {

    return (
        <Modal
            isVisible={visible}
            onBackdropPress={closeModal}
            animationIn='bounceInLeft'
            animationInTiming={1000}
            animationOut='bounceOutLeft'
            animationOutTiming={1000}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
            useNativeDriver
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[styles.container, styleContainer]}>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        zIndex: 999
    },
})

export default DefaultModal