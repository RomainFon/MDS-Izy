import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

class ProfilScreen extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text>Profil</Text>
            </View>
        )
    }
}

export default ProfilScreen

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
});