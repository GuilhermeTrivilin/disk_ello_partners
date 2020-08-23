import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

import Modal from 'react-native-modal';

const DefaultModal = ({
    visible,
    closeModal,
    children,
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
                {children}
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default DefaultModal