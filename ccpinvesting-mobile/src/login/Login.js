import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/login.png'
import { enviarLogin } from '../redux/login/actions';
import { Button } from 'react-native';
import { Pressable } from 'react-native';
import { usuarioLogado } from '../redux/login/selectors';

const styles = StyleSheet.create({
    
    container:{
        padding:150,
    },
    titulo:{
        backgroundColor:'rgba(244, 81, 30, 1)',
        color: 'black',
        fontSize:25
    },
    label:{
        fontSize:35,
        color:'#f41111',
        display:'flex',
        alignItems:'center',
        // width:"30%"
    },
    viewInputs:{
        // margin:'10%',
        // backgroundColor:'black',
        padding:10,
        margin:10,
        marginBottom:10,
        
    },
    avatar:{
        backgroundColor:'rgba(244, 81, 30, 1)',
        // height:'27,1%',
        // width:'10%',
        height:200,
        width:200,
        borderRadius:100,
        padding:20,
        marginTop:30,
        marginLeft:120,
        marginBottom:80,
    },
    input:{
        fontSize:25,
        // backgroundColor:'yellow',
        alignContent:'center',
        // width:"25%",
        // margin:'1%'
        borderBottomWidth:1,
        marginTop:30,
       
        width:400,
        
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
    login:'',
    senha:''
}

const Login = props =>{

    
    const dispatch = useDispatch();
    const isLogado = useSelector(usuarioLogado);
    
    const enviarDados = () =>{
        dispatch(enviarLogin(usuarioLogin))
    }
    
    const [usuarioLogin, setLogin] = useState(LOGIN_INCIAL)

    const atualizarCampo = (valor, campo) =>{
        usuarioLogin[campo] = valor;
        setLogin(usuarioLogin)
    }

    // if(isLogado){  //TODO redirecionar para a tela de perfil

    // }

    return(
        <View style={styles.container}>
            <Avatar
                rounded
                source={logo}
                style={styles.avatar}
            />
            <View style={styles.viewInputs}>
                <TextInput 
                    style={styles.input}
                    placeholder="usuario" 
                    defaultValue={usuarioLogin.login}
                    onChangeText={valor => atualizarCampo(valor,"login")}
                />
            </View>
            <View style={styles.viewInputs}>
                <TextInput 
                    style={styles.input}  
                    placeholder="senha" 
                    secureTextEntry={true}
                    defaultValue={usuarioLogin.senha}
                    onChangeText={valor => atualizarCampo(valor,"senha")}
                />
                
            </View>
            <Pressable
                style={styles.button}
                onPress={() => enviarDados()}
            >
        
                <Text
                    style={styles.text}
                >
                    Enviar
                </Text>
            </Pressable>

        </View>
    )
}

export default Login;