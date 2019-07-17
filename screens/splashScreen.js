import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import LinearGradient from "expo/build/effects/LinearGradient";
import MainStyle from "../Style"
import { connect } from "react-redux"
import HttpHelper from "../helpers/HttpHelper";

class SplashScreen extends React.Component {

    devenirApprenty(){
        this.props.navigation.navigate('RegisterScreen');
    }

    rejoindreIzy(){
        this.props.navigation.navigate('ConnectScreen');
    }

    componentDidMount() {
        if(this.props.email !== ''){
            const http = new HttpHelper();
            http.httpRequest("post", "login", {
                email: this.props.email,
                password: this.props.password
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
                ToastAndroid.show("Erreur de connexion automatique : " + error.data.data, ToastAndroid.LONG);
            })
            .finally(() => {
                console.log(this.props);
            })
        }
    }

    render() {
        return (
            <View style={styles.main_container}>
                <LinearGradient colors={['#825FE2', '#322557']} style={styles.main_container}>
                    <View style={styles.sub_container_logo}>
                        <Image
                            source={require('../assets/icon.png')}
                        />
                    </View>
                    <View style={styles.sub_container_button}>
                        <TouchableOpacity style={MainStyle.button} onPress={() => this.devenirApprenty() }>
                            <Text style={MainStyle.button_text}>Devenir Apprenty</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={MainStyle.button} onPress={() => this.rejoindreIzy()}>
                            <Text style={MainStyle.button_text}>Rejoindre Izy</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}

const mapStateToProps = state => {
        return {
            email: state.user.email,
            password: state.user.password
        };
};

export default connect(mapStateToProps)(SplashScreen);

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    sub_container_logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    sub_container_button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});