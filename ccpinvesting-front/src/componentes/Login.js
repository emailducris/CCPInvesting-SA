import { Grid, makeStyles, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';
import '../index.css';
import * as yup from 'yup';
import { usuarioLogado } from '../redux/login/selectors'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import login from '../assets/login.png'

const LOGIN_INICIAL = {
  login: "",
  senha: ""
}

const useStyles = makeStyles((theme) => ({
  container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding:'0 0 0 0 ',
      // background: 'blue'
  },
  divs: {
    // marginLeft: theme.spacing(4),
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    // background: 'green'
  },
  textField: {
    // background:"red",
    width: '300px',
  },
  divBotao: {
    padding: '50px 30px 0 ',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarLogin:{
      border:'solid',
      borderRadius:'50%',
      padding:'10px',
      borderWidth:'3px',
      borderColor:'#f4511e',
      background:'#f4511e'
    
  },
  divAvatarLogin:{
    margin:'80px 0 0 0',
    maxWidth:'160px'
  }

}))
      
const LoginSchema = yup.object().shape({
  login: yup.string().required('Informe o usuário para login').max(50, 'O campo deve ter no máximo 50 carateres'),
  senha: yup.string().required('Informe sua senha').max(50, 'O campo deve ter no máximo 50 carateres'),  
});

const Login = props =>{
  const classes = useStyles();
  const history = useHistory();

  const isUsuarioLogado = useSelector(usuarioLogado);

  const enviarLogin = (login, acoes) => {
    console.log("login",login);
    acoes.setSubmitting(true);
    props.enviar(login);
    acoes.resetForm();
  }
  
  if(isUsuarioLogado){
    history.push("/acao")
  }
  

  return (
    <div>
      <div className={classes.container}>  
        <div className={classes.divAvatarLogin}>
          <div className="thumbnail">
            <img src={login} className={classes.avatarLogin} alt="Christofer"/>
          </div>
        </div>
      </div>
      <Formik
        enableReinitialize
        validateOnMount
        validationSchema={LoginSchema}
        initialValues={ LOGIN_INICIAL }
        onSubmit={(login, acoes) => enviarLogin(login, acoes)}
        render={({values, touched, errors, isSubmitting, setFieldTouched, setFieldValue}) =>{
        return (
          
          <Form className={classes.container}>
            
            <Grid >
              
              <Grid className={classes.divs}>
                <TextField
                className={classes.textField}
                name="login"
                value={values.login}
                item xs={11}
                label="usuario"
                error={touched.login && errors.login}
                helperText={touched.login && errors.login}
                onFocus={() => setFieldTouched('login')}
                onChange={event => setFieldValue('login', event.target.value)}
                />
              </Grid>

              <Grid className={classes.divs}>
                <TextField
                className={classes.textField}
                name="senha"
                value={values.senha}
                item xs={11}
                label="senha"
                type="password"
                error={touched.senha && errors.senha}
                helperText={touched.senha && errors.senha}
                onFocus={() => setFieldTouched('senha')}
                onChange={event => setFieldValue('senha', event.target.value)}
                />
                
              </Grid>


              <Grid className={classes.divBotao}>
                <button 
                className="btn btnLogin"
                color="#f4511e"
                type="submit"
                disabled={isSubmitting}
                >
                  Logar
                </button>
                
              </Grid>
            </Grid>
          </Form>
          
        )}}  
      
      />
    </div>
    
  )
  
}

export default Login;
