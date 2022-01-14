package sc.ccpinvesting.ccpinvestingapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sc.ccpinvesting.ccpinvestingapi.model.Investidor;
import sc.ccpinvesting.ccpinvestingapi.model.Investimento;
import sc.ccpinvesting.ccpinvestingapi.model.Venda;
import sc.ccpinvesting.ccpinvestingapi.repository.VendaRepository;

@Service
public class VendaService {
    
    @Autowired
    VendaRepository vendaRepository;

    @Autowired
    InvestidorService investidorService;

    @Autowired
    InvestimentoService investimentoService;

    public List<Venda> buscarTodos()
    {
        return vendaRepository.findAll();
    }

    public Venda buscarVendaPorId(Integer id)
    {
        return vendaRepository.findById(id).get();
    }

    public Venda salvar(Venda venda)
    {
        return vendaRepository.save(venda);
    }
    
    //Refatorar instanciando uma nova venda.
    public Investidor vendaAcao(Venda venda)
    {

        var investidorId = venda.getIdInvestor();
        var investimentoId = venda.getIdInvestimento();

        //localiza investidor
        var investidorLocalizado = investidorService.buscarPorId(investidorId);
       
        //localiza investimento(dentro do investidor)
        var listaInvestimentos = investidorLocalizado.getInvestimento();  

        var investimentoLocalizado = 0;
        
        for (Investimento investimento : listaInvestimentos) {
            if(investimento.getId() == investimentoId)
            {
                investimentoLocalizado = investimento.getId();
            }
        }

        //procura o investimento dentro
        Investimento investimento = investimentoService.buscarPorId(investimentoLocalizado);

        //valor atual do investimento
        var valorInvestimentoAtual = investimento.getValor();
        
        //pegar carteira
        var carteiraInvestidor = investidorLocalizado.getCarteira();
        
        //soma o valor do investimento com o valor atual na carteira do investidor.
        
        carteiraInvestidor += valorInvestimentoAtual;
        investidorLocalizado.setCarteira(carteiraInvestidor);
        investimento.setAtivo(false);

        investidorService.atualizar(investidorId,investidorLocalizado);
        vendaRepository.save(venda);
        
        return investidorLocalizado;

    }
    
}
