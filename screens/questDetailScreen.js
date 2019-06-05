import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

class QuestDetailScreen extends React.Component {
    render() {
        //console.log(this.props.navigation);
        console.log(this.props);
        return (
            <View style={styles.main_container}>
                <Text>Détail de la quest</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    }
});

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(QuestDetailScreen)