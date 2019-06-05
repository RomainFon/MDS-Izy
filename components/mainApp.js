import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import NavigationQuest from '../navigation/navigation'
import NavigationConnect from '../navigation/navigationConnect'

class MainApp extends React.Component {
    render() {
        //console.log(this.props);
        return (
            <View style={styles.main_container}>
                { this.props.pseudo !== '' &&
                    <NavigationQuest/>
                }
                { this.props.pseudo === '' &&
                    <NavigationConnect/>
                }

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

export default connect(mapStateToProps)(MainApp)