import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

const path = {
    star: require('~/assets/star.png'),
    star_empty: require('~/assets/star_empty.png'),
}

const RenderStars = ({ stars_length, size = 10 }) => {

    return (
        <View style={styles.container}>
            {Array.apply(null, { length: stars_length }).map((item, index) => (
                <Image
                    source={path.star}
                    style={[styles.star, { width: size, height: size }]}
                    key={index}
                />
            ))}
            {Array.apply(null, { length: (5 - stars_length) }).map((item, index) => (
                <Image
                    source={path.star_empty}
                    style={[styles.star, { width: size, height: size }]}
                    key={index}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 10,
    },
    star: {
        marginHorizontal: 2
    }
})

export default RenderStars