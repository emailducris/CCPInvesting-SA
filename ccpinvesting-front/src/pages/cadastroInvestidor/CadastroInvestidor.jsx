import { useDispatch } from "react-redux";
import  Cadastro  from "../../investidor/Cadastro";
import { cadastrarInvestidor } from "../../redux/investidor/actions";


const CadastroInvestidor = props => {
   
    const dispatch = useDispatch();
   
    const salvarInvestidor =  investidor => {
        console.log('dispatch cadastro',investidor)
         dispatch(cadastrarInvestidor(investidor))
    }

      return (
        <Cadastro salvar={salvarInvestidor}/>
    )
  }
  export default CadastroInvestidor;