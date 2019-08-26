import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ToastAndroid, ActivityIndicator} from 'react-native'
import LinearGradient from "expo/build/effects/LinearGradient";
import { connect } from 'react-redux'
import MainStyle from "../Style"
import HttpHelper from "../helpers/HttpHelper";

class ConnectScreen extends React.Component {

    constructor(props){
        super(props);
        this.http = new HttpHelper();
        this.mail = "";
        this.password = "";
        this.state = {
            loading: false
        }
    }

    _submitFormConnect(){
        this.setState({loading: true});
        const action = {
            type: "CONNECT",
            email: 'email',
            password: this.password,
            token: 'token'
        };
        this.props.dispatch(action);

        /*this.http.httpRequest("post", "login", {
            email: this.mail,
            password: this.password
        })
        .then(response => {
            const action = {
                type: "CONNECT",
                email: response.email,
                password: this.password,
                token: response.api_token
            };
            this.props.dispatch(action);
        })
        .catch(error => {
            ToastAndroid.show(error.status === 400 ? "Mauvais email et/ou mot de passe" : error.data.data, ToastAndroid.LONG);
            this.setState({loading: false});
        })*/
    }

    render() {
        let validate;
        if(this.state.loading){
            validate = <ActivityIndicator/>
        } else {
            validate = <TouchableOpacity style={MainStyle.button} onPress={() => this._submitFormConnect()}>
                <Text style={MainStyle.button_text}>Valider</Text>
            </TouchableOpacity>
        }
        return (
            <View style={styles.main_container}>
                <LinearGradient colors={['#825FE2', '#322557']} style={styles.main_container}>
                <View style={styles.title_container}>
                    <Text style={styles.title_screen}>Rejoindre Izy</Text>
                </View>
                <View style={styles.form_container}>
                    <View style={styles.content_form}>
                        <Text style={styles.text_form}>Email/Pseudo</Text>
                        <TextInput style={styles.input_form} keyboardType={"email-address"} onChangeText={text => this.mail = text}/>
                    </View>
                    <View style={styles.content_form}>
                        <Text style={styles.text_form}>Mot de passe</Text>
                        <TextInput style={styles.input_form} secureTextEntry={true} autoCapitalize={"none"} onChangeText={text => this.password = text}/>
                    </View>
                </View>
                <View style={MainStyle.button_container}>
                    {validate}
                </View>
                </LinearGradient>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return state.user
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
};

export default connect(mapStateToProps)(ConnectScreen)

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    title_container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    title_screen: {
        color: '#fff',
        fontSize : 28
    },
    form_container: {
        flex: 1,
        margin: 20
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
    },
    button_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    button:{
        backgroundColor: '#fff',
        marginTop:30,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:14,
    },
    button_text: {
        color: '#888',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

