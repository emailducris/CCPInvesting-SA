package sc.ccpinvesting.ccpinvestingapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Acao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 20)
    private String nome;
    
    @Column(nullable = false, length = 10)
    private Double preco;
    
    @Column(nullable = false, length = 20)
    private String descricao;

    @Column(nullable = false)
    private String horaAtualizacao;

    public Acao(){ }

    public Acao(Integer id, String nome, Double preco, String descricao, String horaAtualizacao) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.horaAtualizacao = horaAtualizacao;
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public Double getPreco() {
        return preco;
    }
    public void setPreco(Double preco) {
        this.preco = preco;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getHoraAtualizacao() {
        return horaAtualizacao;
    }

    public void setHoraAtualizacao(String horaAtualizacao) {
        this.horaAtualizacao = horaAtualizacao;
    }

   
    
}
