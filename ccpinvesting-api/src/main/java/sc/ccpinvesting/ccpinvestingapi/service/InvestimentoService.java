package sc.ccpinvesting.ccpinvestingapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sc.ccpinvesting.ccpinvestingapi.model.Acao;
import sc.ccpinvesting.ccpinvestingapi.model.Investimento;
import sc.ccpinvesting.ccpinvestingapi.repository.InvestimentoRepository;

@Service
public class InvestimentoService {
    
    @Autowired
    InvestimentoRepository investimentoRepository;


    public List<Investimento> buscarTodos()
    {
        return investimentoRepository.findAll();
    }

    public Investimento buscarPorId(Integer id)
    {
        return investimentoRepository.findById(id).get();
    }

    public Investimento criar()
    {
        var investimento = new Investimento();
        return investimento;
    }

    public Investimento criarComParametros(Acao acao, Double totalCompra, boolean ativo)
    {
        var investimento = criar();

        investimento.setAcao(acao);
        investimento.setValor(totalCompra);
        investimento.setAtivo(ativo);
        
        return investimento;
    }


    //Cada investimento deve ter um id
    public Investimento salvar(Investimento investimento)
    {
        return investimentoRepository.save(investimento);
    }

    
    public Investimento atualizar(Integer id, Investimento investimento)
    {
        Investimento investimentoLocalizado = buscarPorId(id);

        investimentoLocalizado = investimento;

        return salvar(investimentoLocalizado);
    }

    public void delete(Integer id)
    {
        investimentoRepository.deleteById(id);
    }

   
}
