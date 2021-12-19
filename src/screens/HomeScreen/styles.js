import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    formContainer: {
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
    heading:{
     fontSize:30,
     fontWeight:"bold",
     color:"#89c343"
    },
    input: {
        height:80,
        width:350,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        marginRight: 5,
        marginTop:30
    },
    button: {
        height:80,
        width:350,
        borderRadius: 5,
        backgroundColor: '#89c343',
        alignItems: "center",
        justifyContent: 'center',
        marginTop:20
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 20,
        color: '#660618'
    }
})