import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1, 
        alignItems: 'center',
    },

    title: {

    },

    logo: {
        flex: 1,
        height: 120,
        width: 150,
        alignSelf: "center",
        margin: 30,
        borderRadius:75
    },

    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#f2f2f2',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,

    },

    button: {
        backgroundColor: '#89c343',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        height: 60,
        marginRight: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        color:"#FFFF"

    },

    buttonTitle: {
        flex: 1,
        alignItems: 'center',
        marginTop: 15,
        fontSize: 20
    },

    footerView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },

    footerText: {
        fontSize: 20,
        color: '#2e2e2d',
        textAlign: 'center',
        marginTop: 20,

    },

    footerLink: {
        fontSize: 20,
        color: '#89c343',
        fontWeight: 'bold',
    },

});