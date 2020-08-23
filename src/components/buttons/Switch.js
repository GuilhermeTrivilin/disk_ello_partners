import React from 'react'

import { StyleSheet } from 'react-native'
import { Switch } from 'react-native-switch'

const SwitchButton = ({ isActive, onChange }) => {

    return <Switch
        value={isActive}
        onValueChange={onChange}
        circleSize={20}
        backgroundActive={'green'}
        backgroundInactive={'red'}
        circleActiveColor={'#fff'}
        circleInActiveColor={'#fff'}
        renderActiveText={false}
        renderInActiveText={false}
        innerCircleStyle={styles.switchButton}
    />
}

const styles = StyleSheet.create({
    switchButton: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: '#e1e1e1'
    },
})

export default SwitchButton