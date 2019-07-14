import React from 'react'
import {StyleSheet, View, Text, Button, Image, TouchableOpacity, TextInput} from 'react-native'
import LinearGradient from "expo/build/effects/LinearGradient";
import {connect} from "react-redux";
import MainStyle from "../Style"

class CreateTeamScreen extends React.Component {


    _submitFormJoinTeam(){
        const action = { type: "UPDATE_TEAM", team: 'nomTeam' }
        this.props.dispatch(action)
    }

    _submitFormCreateTeam(){
        this.props.navigation.navigate('CreateTeamScreen');
    }

    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient colors={['#E939EB', '#528EE5']} style={styles.main_container}>
                    <View style={styles.sub_container_icon_user}>
                        <Image
                            source={require('../assets/icon_user.png')}
                        />
                    </View>
                    <View style={styles.sub_container_form}>
                        <View style={MainStyle.button_container}>
                            <TouchableOpacity style={MainStyle.button} onPress={() => this._submitFormCreateTeam()}>
                                <Text style={MainStyle.button_text}>Former une Tyme</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view_text_separation}>
                            <Text style={styles.text_separation}>ou</Text>
                        </View>
                        <View style={styles.content_form_team}>
                            <TextInput style={styles.input_form_team}/>
                        </View>
                        <View style={MainStyle.button_container}>
                            <TouchableOpacity style={MainStyle.button} onPress={() => this._submitFormJoinTeam()}>
                                <Text style={MainStyle.button_text}>Rejoindre une Tyme</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
};

export default connect(mapStateToProps)(CreateTeamScreen)

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    sub_container_icon_user: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 80
    },
    sub_container_form: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    content_form_team: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    input_form_team: {
        marginLeft: 100,
        marginRight: 100,
        height: 40,
        paddingLeft: 10,
        borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: '#fff',
        flex: 1
    },
    view_text_separation: {
        marginBottom: 40,
    },
    text_separation: {
        color: '#fff',
        fontSize: 20
    }
});