import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    /* Bouton */
    button_container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 40,
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
    },
    /* Input + Text Form */
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
});