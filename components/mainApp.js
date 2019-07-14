import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import NavigationQuest from '../navigation/navigation'
import NavigationConnect from '../navigation/navigationConnect'
import NavigationTeam from '../navigation/navigationTeam'

class MainApp extends React.Component {

    rendererView(){
        if(this.props.email === ''){
            return <NavigationConnect/>
        }else if(this.props.team === ''){
            return <NavigationTeam/>
        }else{
            return <NavigationQuest/>
        }
    }

    render() {
        //console.log(this.props);
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