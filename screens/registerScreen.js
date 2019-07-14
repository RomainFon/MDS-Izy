import React from 'react'
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'
import LinearGradient from "expo/build/effects/LinearGradient";
import MainStyle from "../Style"
import { connect } from 'react-redux'

class RegisterScreen extends React.Component {

    constructor(props){
        super(props);
    }

    createTeamButton(){
        //this.props.navigation.navigate('CreateTeamScreen');
        const action = {
            type: "CONNECT",
            email: "test",
            password: this.password,
            token: "test"
        };
        this.props.dispatch(action);
    }

    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient colors={['#825FE2', '#322557']} style={styles.main_container}>
                    <View style={styles.form_container}>

                        <View style={styles.content_form}>
                            <Text style={styles.text_form}>Pseudo</Text>
                            <TextInput style={styles.input_form}/>
                        </View>
                        <View style={styles.content_form}>
                            <Text style={styles.text_form}>E-mail</Text>
                            <TextInput style={styles.input_form}/>
                        </View>
                        <View style={styles.content_form}>
                            <Text style={styles.text_form}>Mot de passe</Text>
                            <TextInput style={styles.input_form}/>
                        </View>
                    </View>
                    <View style={MainStyle.button_container}>
                        <TouchableOpacity style={MainStyle.button} onPress={() => this.createTeamButton()}>
                            <Text style={MainStyle.button_text}>Valider</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
};

export default connect(mapStateToProps)(RegisterScreen);

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    form_container: {
        flex: 3,
        margin: 20,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    content_form: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text_form: {
        margin: 15,
        fontSize: 20,
        color: '#fff',
    },
    input_form: {
        margin: 15,
        height: 40,
        paddingLeft: 10,
        borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: '#fff',
        flex: 1
    }
});