import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class RankingScreen extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text>Ranking</Text>
            </View>
        )
    }
}

export default RankingScreen

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
});