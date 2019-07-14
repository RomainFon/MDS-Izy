import React from 'react'
import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native'

class HeaderMenu extends React.Component {


    render() {
        return (
                <View style={styles.main_container}>
                    <Text style={styles.outside_line}> </Text>
                    <Text style={styles.inside_line}> </Text>
                    <Text style={styles.outside_line}> </Text>
                </View>
        )
    }
}

export default HeaderMenu

const styles = StyleSheet.create({
    main_container: {
        height: 50,
        width: 50,
        backgroundColor: '#fff',
        position: 'absolute',
        right: 30,
        top: 50,
        zIndex: 1,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    outside_line: {
        height: 1,
        width: 26,
        backgroundColor: '#888'
    },
    inside_line: {
        height: 1,
        width: 26,
        backgroundColor: '#888',
        marginVertical: 10
    }
});