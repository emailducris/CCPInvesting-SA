package sc.ccpinvesting.ccpinvestingapi.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ContaBancaria {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false, length = 6)
    private String agencia;

    @Column(nullable = false, length = 11)
    private String conta;

    @Column(nullable = false)
    private Date validade;

    public ContaBancaria(String agencia, String conta, Date validade) {
        this.agencia = agencia;
        this.conta = conta;
        this.validade = validade;
    }

    public String getAgencia() {
        return agencia;
    }
    public void setAgencia(String agencia) {
        this.agencia = agencia;
    }
    public String getConta() {
        return conta;
    }
    public void setConta(String conta) {
        this.conta = conta;
    }
    public Date getValidade() {
        return validade;
    }
    public void setValidade(Date validade) {
        this.validade = validade;
    } 
}
