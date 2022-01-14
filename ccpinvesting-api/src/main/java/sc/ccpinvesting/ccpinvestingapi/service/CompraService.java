package sc.ccpinvesting.ccpinvestingapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sc.ccpinvesting.ccpinvestingapi.model.Compra;
import sc.ccpinvesting.ccpinvestingapi.model.Investidor;
import sc.ccpinvesting.ccpinvestingapi.repository.CompraRepository;


@Service
public class CompraService {
    
    @Autowired
    InvestidorService investidorService;
    
    @Autowired
    AcaoService acaoService;
    
    @Autowired
    CompraRepository compraRepository;

    @Autowired 
    InvestimentoService investimentoService;


    public List<Compra> buscarTodos()
    {
        return compraRepository.findAll();
    }

    public Compra buscarCompraPorId(Integer id)
    {
        return compraRepository.findById(id).get();
    }

    public Compra salvar(Compra compra)
    {
        return compraRepository.save(compra);
    }

    public Investidor comprarAcao(Compra compra)
    {
        
        var investidor = investidorService.buscarPorId(compra.getInvestidorId());   
        var investidorId = investidor.getId();

        var investidorCarteira = investidor.getCarteira();
        var investimentos = investidor.getInvestimento();

        var acao = acaoService.buscarPorId(compra.getAcaoId());
        var acaoId = acao.getId();


        var totalCompra = calculoTotalCompra(acao.getId(), compra.getQuantidade());

        //valida o saldo para a compra
        if(investidorCarteira >= totalCompra){
   
            //A lista de investimento não esta vazia
            if(!investimentos.isEmpty()){
                
                var flag = false;

                for(var i = 0; i < investimentos.size(); i++){
                    
                    var investimento = investimentos.get(i);

                    if(investimento.getAcao().getId() == acaoId)
                    {              
                        var valor = investimento.getValor();
                        var idInvestimento = investimento.getId();

                        investimento.setValor(valor + totalCompra);
                        investimento.setAtivo(true);
                        investimentoService.atualizar(idInvestimento, investimento);
                        //investidorService.incluirInvestimento(idInvestidor, investimento, true);
                        flag = true;
                        break;
                    }
                    
                }

                if(!flag){
                    
                    var investimentoNovo = investimentoService.criarComParametros(acao, totalCompra, true);
                    
                    
                    investidorService.incluirInvestimento(investidorId, investimentoNovo, false);

                }

            }
            // A lista de investimentos está vazia
            else{

                var investimentoNovo = investimentoService.criarComParametros(acao, totalCompra, true);

                investidorService.incluirInvestimento(investidorId, investimentoNovo, false);
                
            }

            investidorCarteira -= totalCompra;
            investidor.setCarteira(investidorCarteira);

            salvar(compra);
           
        }

        return investidor;
        
    }

    public Double calculoTotalCompra(Integer idAcao, Integer quantidadeAcao)
    {

        var acao = acaoService.buscarPorId(idAcao);
        var precoAcao = acao.getPreco();

        return precoAcao * quantidadeAcao;
        
    }

}
