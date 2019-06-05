import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import LinearGradient from "expo/build/effects/LinearGradient";

class CreateTeamScreen extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient colors={['#FCB129', '#F34FC3']} style={styles.main_container}>
                    <Text>Create Team</Text>
                </LinearGradient>
            </View>
        )
    }
}

export default CreateTeamScreen

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
});