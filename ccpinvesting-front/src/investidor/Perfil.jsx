import React, { useEffect }  from 'react';
import { Avatar, Button, Collapse, Container, Grid, InputAdornment, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, withStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { loginUsuario } from '../redux/login/selectors';
import { getInvestidor, getInvestimentos } from '../redux/investidor/selectors';
import { buscarInvestidorPorLogin } from '../redux/investidor/actions'
import  InputMask  from "react-input-mask";
import chris from '../assets/chris.jpg';
import { DEPOSITO_INICIAL, VENDA_INICIAL } from '../util/constantes';
import { vender } from '../redux/venda/actions';
import CheckSharpIcon from '@material-ui/icons/CheckSharp';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import { green } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { depositar } from '../redux/transacao/actions';

const StyledGrid = withStyles((theme) => ({
    root: {
        display:'flex',
        justifyContent:'center',
        margin:'40px 0 0',
        padding:'20px',
        // border:'solid',
        // borderWidth:'0.5px',
        // borderColor:'#f4511e',
    }
  }))(TableContainer);

  const StyledTableContainer = withStyles((theme) =>({
    root:{
        padding:'10px',
        border:'solid',
        borderWidth:'0.5px',
        borderColor:'#f4511e',
    }
  }))(TableContainer);

  
  const StyledTableCellAcaoNome = withStyles((theme) => ({
    root: {
      color: '#f4511e',
      fontWeight: '1000',
      font: '400 15px Lato, sans-serif'
    }
  }))(TableCell);
  
  const StyledTableCellAcaoValor = withStyles((theme) => ({
    root: {
      font: '400 14px Lato, sans-serif'
    }
  }))(TableCell);

  const StyledBrightness1IconAtivo = withStyles((theme) =>({
    root:{
        fontSize: '10px',
        color: '#89f41e',

    }
  }))(Brightness1Icon)

  const StyledBrightness1IconInativo = withStyles((theme) => ({
    root:{
        fontSize: '10px',
        color: '#f41e1e',

    }
  }))(Brightness1Icon)

  const StyledButton = withStyles((theme) => ({
    root:{
      border: '0.5px solid #f4511e',
      backgroundColor: '#f4511e !important',
      color: '#fff',
      fontWeight: '700',
      '&:hover': {
        border: '0.5px solid #f4511e',
        backgroundColor: '#ffffff !important',
        color: '#f4511e',
        fontWeight: '700',
     },
    }
  }))(Button);

  const StyledButtonTransacao = withStyles((theme) => ({
    root:{
        border: '0.5px solid #f4511e',
        backgroundColor: '#f4511e !important',
        color: '#fff',
        fontWeight: '700',
        margin:'25px',
        '&:hover': {
          border: '0.5px solid #f4511e',
          backgroundColor: '#ffffff !important',
          color: '#f4511e',
          fontWeight: '700',
       },
      }
  }))(Button);

  const StyledGridButton = withStyles((theme) => ({
    root:{
        display:'flex',
        justifyContent:'center',
    }
  }))(Grid);

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
    },
    divs: {        
        margin: '12px',
        textAlign: 'center',
    },
    gridContainer:{
        margin:'50px 0 0 0',
        background:'#3d2b2b',
        padding:'10px'
    },
    textField: {
        margin:'10px',
        fontSize:'12px',
        width: '25em',
    },
    textFieldValorDeposito: {
        margin:'10px',
        fontSize:'12px',
    },
    botao: {
        padding: '50px 0 0',
        alignSelf:'top'
    },
    resize:{
        fontSize:15
    },
    avatar:{
        width: theme.spacing(6),
        height: theme.spacing(6),
        background:'#f4511e'
    },
    containerCard:{
        display: 'flex',
    },

    divAvatar:{
       margin:'5px 0 0 5px',
    },
    btnEditar:{
        margin:'12px'
    },
    labelCarteira:{
        margin:'5px',
        padding:'0 0 20px 40px',
        
    },
    carteira:{
        margin:'5px'
    },
    btnDepositar:{
        margin:'5px 0 0 10px'
    },
    btnSacar:{
        margin:'5px',
        display:'flex',
        height:'33px',
        justifyContent:'right'
    },
    usuario:{
        margin:'5px 0 0 7px',
        textAlign: 'top',
    },
    carteiraCor:{
        color:'#56f321'
    },
    h4:{
        color:'#ffff'
    },
    containerCollapse:{
        display:'flex',
        justifyContent:'center',
        padding:'20px 0 0 0'
        
    },
    containerCollapseDeposito:{
        display:'flex',
        justifyContent:'center',
        padding:'20px 0 0 0',
    }

}));

const Perfil = props => {
    const [open, setOpen] = React.useState(false);
    const [openDeposito, setopenDeposito] = React.useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();
    const loginInvestidor = useSelector(loginUsuario)
    const investidor = useSelector(getInvestidor);
    const investimentos = useSelector(getInvestimentos);
    const history = useHistory();
    // const vendaInicial = VENDA_INICIAL;

    useEffect(() =>{
         (buscarInvestidor(loginInvestidor));   
    }, []);

    const buscarInvestidor = async (login) => {
        await dispatch(buscarInvestidorPorLogin(login));
    }

    const venderAcao = async (venda) =>{
        await dispatch(vender(venda));
    }

    const enviarDeposito = async (deposito) => {
        await dispatch(depositar(deposito))
        alert('deposito enviado')
    }

    const montarDeposito = (deposito,acoes) => {
        acoes.setSubmitting(true);
        deposito.idInvestidor=investidor.id
        enviarDeposito(deposito);
        acoes.resetForm();
    }

    const venda = (investimentoId, investidorId, acoes) =>{
        const vendaInicial={
            idInvestimento:investimentoId,
            idInvestor:investidorId

        }
        venderAcao(vendaInicial);
        
    }

    const telaVendas = () => {
        history.push("/acao")
    }

 
    // const investimentos = investidor.investimento;
    const INVESTIMENTOS_VAZIO = "Sem investimentos no momento"
   

    return (
        <div id="perfil">
            <Grid container id="myPage"className={classes.gridContainer} key={investidor.id} >
                <Grid item md={0.5} className={classes.divAvatar}>  
                    <Avatar className={classes.avatar} spacing={1} src={chris} />
                </Grid>
                <Grid item md={9} className={classes.btnEditar}>
                    <button className='btn btnPerfil' href="dados" onClick={() => setOpen(!open)}>Editar perfil</button>
                </Grid>
                <Grid item md={0.5} className={classes.labelCarteira}>
                    <div className={classes.h4}>
                        Saldo:
                    </div>
                </Grid>
                <Grid item md={1} className={classes.carteira}>
                    <b className={classes.carteiraCor}>
                        R$ {investidor.carteira}
                    </b>
                </Grid>
                
                

                <Grid item xs={10} className={classes.usuario}> 
                    <h4 className={classes.h4}>
                        Olá, {investidor.nome}
                    </h4>
                </Grid>
                <Grid item xs={0.5} className={classes.btnDepositar}>
                    <button className='btn btnPerfil' onClick={() => setopenDeposito(!openDeposito)}>Depositar</button>
                </Grid>
                <Grid item xs={0.5} className={classes.btnSacar}>
                    <button className='btn btnPerfil'>Sacar</button>
                </Grid>

           
            </Grid>
            <Collapse in={openDeposito} timeout="auto" unmountOnExit>
                <Grid container xs={12} className={classes.containerCollapseDeposito}>
                    <Grid item xs={5} className="table">
                        
                        <Formik
                            enableReinitialize
                            validateOnMount
                            // validationSchema={InvestidorSchema}
                            validator={() => ({})}
                            initialValues={ DEPOSITO_INICIAL }
                            onSubmit={(deposito,acoes) => montarDeposito(deposito,acoes)}
                            render={({values, touched, errors, isSubmitting, setFieldTouched, setFieldValue}) =>{
                            return (
                                <Form>
                                    <StyledGridButton item xs={12} >
                                        <TextField
                                            className={classes.textFieldValorDeposito}
                                            name="valor"
                                            label="Informe o valor do depósito"
                                            type="number"
                                            value={values.valor}
                                            error={touched.valor && errors.valor}
                                            helperText={touched.valor && errors.valor}
                                            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                            onFocus={() => setFieldTouched('valor')}
                                            InputProps={{
                                            classes: {
                                              input: classes.resize,
                                            },
                                          }}
                                            onChange={event => setFieldValue('valor', event.target.value)}
                                        />

                                       
                                 
                                    {/* <StyledGridButton item xs={3} > */}
                                        <StyledButtonTransacao type="submit" disabled={isSubmitting} >Depositar</StyledButtonTransacao>
                                    </StyledGridButton>
                                </Form>
                            )}}  
                        />
                    </Grid>            
                </Grid>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Grid container xs={12} className={classes.containerCollapse}>
                    <Grid item xs={9} id="dados">
                        <h3>
                            Dados pessoais
                        </h3>
                    
                        <TextField
                            className={classes.textField}
                            name="nome"
                            label="Primeiro nome"
                            type="readonly"
                            value={investidor.nome}
                            InputProps={{
                                classes: {
                                input: classes.resize,
                                },
                            }}
                        />
                
            
                        <TextField
                            className={classes.textField}
                            name="sobrenome"
                            label="Sobrenome"
                            type="text"
                            value={investidor.sobrenome}
                            InputProps={{
                                classes: {
                                input: classes.resize,
                                },
                            }}
                        />
                        <InputMask 
                            mask="999.999.999-99"
                            type="text"
                            value={investidor.cpf}
                            
                        >
                        {() =>  <TextField
                                className={classes.textField}
                                name="cpf"
                                label="CPF"
                                InputProps={{
                                    classes: {
                                        input: classes.resize,
                                    },
                                }}
                            />
                        }       

                        </InputMask>
                        {/* <TextField
                            className={classes.textField}
                            name="cpf"
                            label="CPF"
                            type="text"
                            value={investidor.cpf}
                            InputProps={{
                                classes: {
                                input: classes.resize,
                                },
                            }}
                        /> */}

                        <TextField
                            className={classes.textField}
                            name="celular"
                            label="Telefone"
                            type="text"
                            value={investidor.celular}
                            InputProps={{
                                classes: {
                                input: classes.resize,
                                },
                            }}
                        />
                        
                        <TextField
                            className={classes.textField}
                            name="email"
                            label="Email"
                            type="email"
                            InputProps={{
                                classes: {
                                input: classes.resize,
                                },
                            }}
                            value={investidor.email}
                        />

                        <TextField
                            className={classes.textField}
                            name="nascimento"
                            label="Nascimento"
                            type="date"
                            InputProps={{
                                classes: {
                                input: classes.resize,
                                },
                            }}
                            value={investidor.nascimento}
                        />

                    </Grid> 
                
                    
                    <Grid item xs={9}>
                        <Grid item xs={12}>
                            <h3>
                                Endereço
                            </h3>
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            className={classes.textField}
                            name="pais"
                            label="País"
                            type="text"
                            InputProps={{
                                classes: {
                                input: classes.resize,
                                },
                            }}
                            value={investidor.pais}
                        />

                        <TextField
                            className={classes.textField}
                            name="estado"
                            label="Estado"
                            type="text"
                            InputProps={{
                                classes: {
                                input: classes.resize,
                                },
                            }}
                            value={investidor.estado}
                        />

                        <TextField
                            className={classes.textField}
                            name="cidade"
                            label="Cidade"
                            type="text"
                            InputProps={{
                                classes: {
                                input: classes.resize,
                                },
                            }}
                            value={investidor.cidade}
                        />

                        <TextField
                            className={classes.textField}
                            name="bairro"
                            label="Bairro"
                            type="text"
                            InputProps={{
                                classes: {
                                input: classes.resize,
                                },
                            }}
                            value={investidor.bairro}
                        />

                        <TextField
                            className={classes.textField}
                            name="rua"
                            label="Rua"
                            type="text"
                            InputProps={{
                                classes: {
                                input: classes.resize,
                                },
                            }}
                            value={investidor.rua}
                        />

                        <TextField
                            className={classes.textField}
                            name="numero"
                            label="Número"
                            type="number"
                            InputProps={{
                                classes: {
                                input: classes.resize,
                                },
                            }}
                            value={investidor.numero}
                        />
                        </Grid>
                    </Grid>   
                    
                </Grid>
            </Collapse>
            <Container >
                <StyledGrid container >
                    <Grid item xs={10} >
                    <StyledTableContainer component={Paper}>
                        <Table size="medium">
                            <TableBody >
                            
                            {investimentos.map(investimento =>([
                            
                                <TableRow key={investimento.id} className="table" href="#collapse">
                                    <TableCell>
                                        {investimento.ativo &&
                                            <StyledBrightness1IconAtivo ></StyledBrightness1IconAtivo>
                                        }
                                        {!investimento.ativo &&
                                            <StyledBrightness1IconInativo color="danger"></StyledBrightness1IconInativo>
                                        }
                                    </TableCell>
                                    <StyledTableCellAcaoNome width="20%" align="center">{investimento.acao.nome}</StyledTableCellAcaoNome>
                                    <TableCell width="30%" align="center">{investimento.acao.descricao}</TableCell>
                                    <TableCell width="20%" align="center">{investimento.acao.horaAtualizacao}</TableCell>
                                    <StyledTableCellAcaoValor width="20%" align="center"> {investimento.valor} BRL</StyledTableCellAcaoValor>
                                    <TableCell>
                                    {investimento.ativo &&
                                        <StyledButton className="btn" onClick={() => venda(investimento.id, investidor.id)}>Vender</StyledButton>
                                    }
                                    {!investimento.ativo &&
                                        <StyledButton className="btn" onClick={() => telaVendas()}>Comprar novamente</StyledButton>
                                    }
                                    
                                    </TableCell>
                                </TableRow>
                    
                        
                            ])) || INVESTIMENTOS_VAZIO}
                            
                            </TableBody>
                            
                        
                        </Table>
                    </StyledTableContainer>
                    </Grid>
                </StyledGrid>
            </Container>
        </div>
       
            
            
    )
    

}

export default Perfil;