package sc.ccpinvesting.ccpinvestingapi.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sc.ccpinvesting.ccpinvestingapi.model.Investimento;
import sc.ccpinvesting.ccpinvestingapi.model.Permissao;
import sc.ccpinvesting.ccpinvestingapi.model.Transacao;
import sc.ccpinvesting.ccpinvestingapi.model.Usuario;
import sc.ccpinvesting.ccpinvestingapi.model.Investidor;
import sc.ccpinvesting.ccpinvestingapi.repository.InvestidorRepository;
import sc.ccpinvesting.ccpinvestingapi.repository.PermissaoRepository;
import sc.ccpinvesting.ccpinvestingapi.repository.TransacaoRepository;

@Service
public class InvestidorService {
    
    @Autowired
    InvestidorRepository investidorRepository;

    @Autowired
    TransacaoRepository transacaoRepository;

    @Autowired
    InvestimentoService investimentoService;

    @Autowired
    PermissaoRepository permissaoRepository;

    @Autowired
    UsuarioService usuarioService;

    public List<Investidor> buscarTodos()
    {
        return investidorRepository.findAll();
    }

    public Investidor buscarPorId(Integer id)
    {
        return investidorRepository.findById(id).get();
    }

    public Investidor buscarPorLogin(String login){
        var buscarUsuario = usuarioService.buscarUsuario(login);
        var investidorLocalizado = buscarTodos()
                                    .stream()
                                    .filter(i -> i.getUsuario() == buscarUsuario)
                                    .findFirst()
                                    .get();
                                    
                                    

        return investidorLocalizado;    
    } 

    public Investidor cadastrar(Investidor investidor)
    {
        Usuario usuario = new Usuario();
        usuario.setLogin(investidor.getUsuario().getUsername());
        usuario.setSenha(investidor.getUsuario().getSenha());

        Permissao permissao = permissaoRepository.findById(2).get();

        List<Permissao> lista = new ArrayList<>();
        lista.add(permissao);

        usuario.setPermissoes(lista);
        
        usuarioService.cadastrar(usuario);
        
        investidor.setUsuario(usuario);

        return investidorRepository.save(investidor);

    }

    public Investidor atualizar(Integer id, Investidor investidor)
    {
        Investidor investidorLocalizado = buscarPorId(id);
        investidorLocalizado = investidor;

        return investidorRepository.save(investidorLocalizado);
    }

    public void delete(Integer id)
    {
        investidorRepository.deleteById(id);
    }

    //TODO Mudar para investimentoService 
    public void incluirInvestimento (Integer idInvestidor, Investimento investimento, Boolean idAcaoIgual)
    {
        var investidor = buscarPorId(idInvestidor);
        var investimentoExistente = investidor.getInvestimento();

        if(!investimentoExistente.isEmpty() && !idAcaoIgual){
            investimentoExistente.add(investimento);
            investimentoService.atualizar(idInvestidor, investimento);
        }
        // else if(!investimentoExistente.isEmpty() && idAcaoIgual){
        //     investimentoExistente.stream().map(
        //         x -> x.getAcao().getId() == investimento.getAcao().getId())
        //         .map(x -> x = investimento);
        // }
        else
        {
            List<Investimento> novoInvestimento = new ArrayList<Investimento>();
            novoInvestimento.add(investimento);
            investidor.setInvestimento(novoInvestimento);
            investimentoService.salvar(investimento);
        }

        
        atualizar(idInvestidor, investidor);
    }

    public Investidor deposito (Transacao transacao)
    {
        var investidor = transacao.getIdInvestidor();
        var valor = transacao.getValor();

        var localizado = buscarPorId(investidor);
        var saldoEmConta = localizado.getCarteira();
        
        if(saldoEmConta == null)
        {
            saldoEmConta = 0.0;
        }

        if(valor > 0 && saldoEmConta != null)
        {
            localizado.setCarteira(saldoEmConta+valor);   
            transacaoRepository.save(transacao);

            atualizar(investidor, localizado);       
        }
        return localizado;
        
    }

    public Investidor saque (Transacao transacao)
    {
        var investidor = transacao.getIdInvestidor();
        var valor = transacao.getValor();

        var localizado = buscarPorId(investidor);
        var saldoEmConta = localizado.getCarteira();
        
        if(saldoEmConta == null)
        {
            saldoEmConta = 0.0;
        }

        if(valor > 0 && saldoEmConta > 0)
        {
            localizado.setCarteira(saldoEmConta-valor);   
            transacaoRepository.save(transacao);

            atualizar(investidor, localizado);       
        }
        
        return localizado;
        
    }

}
