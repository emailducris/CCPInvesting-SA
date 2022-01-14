package sc.ccpinvesting.ccpinvestingapi.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Investidor {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(nullable = false, length = 30)
    private String nome;

    @Column(nullable = false, length = 50)
    private String sobrenome;

    @Column(nullable = false, length = 14)
    private String cpf;

    @Column(nullable = false, length = 50)
    private String email;

    @Column(nullable = false, length = 50)
    private String celular;
    

    private LocalDate nascimento;

    @Column(length = 50)
    private String rua;

    @Column(length = 30)
    private String bairro;
   
    @Column(length = 10)
    private Integer numero;

    @Column(length = 25)
    private String cidade;

    @Column(length =  15)
    private String estado;

    @Column(length = 10)
    private String pais;
    
    @Column
    private Double carteira;

    @OneToMany
    @JoinColumn
    private List<Investimento> investimento;
    
    // @OneToOne
    // @JoinColumn
    // private Endereco endereco;
    
    @OneToMany
    @JoinColumn
    private List<ContaBancaria> contaBancaria;

    @OneToOne
    private Usuario usuario;
    
    public Investidor(){}
    
    public Investidor(Integer id, String nome, String sobrenome, String cpf, String email, String celular,
    LocalDate nascimento, Double carteira) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
        this.celular = celular;       
        this.nascimento = nascimento;
        this.carteira = carteira;
        
    }
    
    public Investidor(Integer id, String nome, String sobrenome, String cpf, String email, String celular,
            LocalDate nascimento, String rua, String bairro, Integer numero, String cidade, String estado, String pais,
            Double carteira, List<Investimento> investimento, List<ContaBancaria> contaBancaria, Usuario usuario) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
        this.celular = celular;
        this.nascimento = nascimento;
        this.rua = rua;
        this.bairro = bairro;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
        this.carteira = carteira;
        this.investimento = investimento;
        this.contaBancaria = contaBancaria;
        this.usuario = usuario;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
    
    public List<Investimento> getInvestimento() {
        return investimento;
    }
    
    public void setInvestimento(List<Investimento> investimento) {
        this.investimento = investimento;
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
    public String getSobrenome() {
        return sobrenome;
    }
    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }
    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getCelular() {
        return celular;
    }
    public void setCelular(String celular) {
        this.celular = celular;
    }
  
    public List<ContaBancaria> getContaBancaria() {
        return contaBancaria;
    }
    public void setContaBancaria(List<ContaBancaria> contaBancaria) {
        this.contaBancaria = contaBancaria;
    }

    public LocalDate getNascimento() {
        return nascimento;
    }

    public void setNascimento(LocalDate nascimento) {
        this.nascimento = nascimento;
    }

    public Double getCarteira() {
        return carteira;
    }

    public void setCarteira(Double carteira) {
        this.carteira = carteira;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    

}
