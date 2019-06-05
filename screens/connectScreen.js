import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import LinearGradient from "expo/build/effects/LinearGradient";
import { connect } from 'react-redux'

class ConnectScreen extends React.Component {

    _submitFormConnect(){
        const action = { type: "UPDATE_PSEUDO", pseudo: 'Romain' }
        this.props.dispatch(action)
    }

    render() {
        console.log(this.props);
        return (
            <View style={styles.main_container}>
                <LinearGradient colors={['#825FE2', '#322557']} style={styles.main_container}>
                <View style={styles.title_container}>
                    <Text style={styles.title_screen}>Rejoindre Izy</Text>
                </View>
                <View style={styles.form_container}>
                    <View style={styles.content_form}>
                        <Text style={styles.text_form}>Pseudo</Text>
                        <TextInput style={styles.input_form}/>
                    </View>
                    <View style={styles.content_form}>
                        <Text style={styles.text_form}>Mot de passe</Text>
                        <TextInput style={styles.input_form}/>
                    </View>
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity style={styles.button} onPress={() => this._submitFormConnect()}>
                        <Text style={styles.button_text}>Valider</Text>
                    </TouchableOpacity>
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

