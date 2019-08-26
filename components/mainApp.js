import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import NavigationQuest from '../navigation/navigation'
import NavigationConnect from '../navigation/navigationConnect'
import NavigationTeam from '../navigation/navigationTeam'

class MainApp extends React.Component {

    rendererView(){
        if(this.props.user.email === null){
            return <NavigationConnect/>
        }else if(this.props.user.team === null){
            return <NavigationTeam/>
        }else{
            return <NavigationQuest/>
        }
    }

    render() {
        return (
            <View style={styles.main_container}>
                { this.rendererView() }
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