package sc.ccpinvesting.ccpinvestingapi.service;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sc.ccpinvesting.ccpinvestingapi.model.Acao;
import sc.ccpinvesting.ccpinvestingapi.repository.AcaoRepository;

@Service
public class AcaoService {
    
    @Autowired
    AcaoRepository acaoRepository;

    public List<Acao> buscarTodos()
    {
        return acaoRepository.findAll();
    }

    public Acao buscarPorId(Integer id)
    {
        return acaoRepository.findById(id).get();
    }

    public Acao salvar(Acao acao)
    {
        LocalDateTime registraAtualizacao = LocalDateTime.now();

        DateTimeFormatter horas = DateTimeFormatter.ofPattern("HH:mm:ss");
        String horaFormatada = horas.format(registraAtualizacao);

        String preco = String.format("%.2f",acao.getPreco()).replace(',', '.');
        Double precoFormatado = Double.parseDouble(preco);

        acao.setPreco(precoFormatado);
        acao.setHoraAtualizacao(horaFormatada);

        return acaoRepository.save(acao);
    }
    
    public Acao atualizar(Integer id, Acao acao)
    {
        Acao acaoLocalizada = acaoRepository.findById(id)
        .map(a -> {
            a.setNome(acao.getNome());
            a.setDescricao(acao.getDescricao());
            a.setPreco(acao.getPreco());
            // a.setHoraAtualizacao(horaFormatada);
            return salvar(a);
        })
        .orElseGet(() -> {
            acao.setId(id);
            return salvar(acao);
        });

        return acaoLocalizada;

    }

    public void delete(Integer id)
    {
        acaoRepository.deleteById(id);
    }

}