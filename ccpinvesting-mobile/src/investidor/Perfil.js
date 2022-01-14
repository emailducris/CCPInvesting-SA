import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import { Header } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import chris from '../../assets/chris.jpg'
import { getInvestidor } from '../redux/investidor/selectors';
import { enviarLogin } from '../redux/login/actions';
import { buscarInvestidorPorLogin } from '../services/investidor';

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',

    },
    avatar:{
        backgroundColor:'rgba(244, 81, 30, 1)',
        // height:'27,1%',
        // width:'10%',
        height:100,
        padding:5,
        width:100,
        borderRadius:10,
        marginTop:30,
        marginBottom:80,
    },
    button:{
        marginTop:80,
        margin:100,
        backgroundColor:'#f4511e',
        padding:20,
        
    },
    text:{
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize:20,
        
    }

})

const LOGIN_INCIAL = {
    login:'admin',
    senha:'admin'
}

const Perfil = props => {

    const dispatch = useDispatch();
    const investidor = useSelector(getInvestidor)

    // useEffect(() =>{
    //     buscarInvestidor()
    // },[]);

    const buscarInvestidor = () =>{
        dispatch(buscarInvestidorPorLogin(LOGIN_INCIAL))
    }

    return(
        <View style={styles.container}>
            <Header style={styles.header}>

            </Header>
            <View>
                <Avatar
                
                    source={chris}
                    style={styles.avatar}
                />
                <Text>
                    {investidor.id}
                </Text>
            </View>
            <Pressable
                style={styles.button}
                onPress={() => buscarInvestidor()}
            >
        
                <Text
                    style={styles.text}
                >
                    Buscar dados
                </Text>
            </Pressable>
          
        </View>
    )

}

export default Perfil;