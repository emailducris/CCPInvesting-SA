package sc.ccpinvesting.ccpinvestingapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Venda {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private Integer idInvestidor;

    @Column
    private Integer idInvestimento;

    public Venda() {
    }

    public Venda(Integer id, Integer idInvestidor, Integer idInvestimento) {
        this.id = id;
        this.idInvestidor = idInvestidor;
        this.idInvestimento = idInvestimento;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdInvestor() {
        return idInvestidor;
    }

    public void setIdInvestor(Integer idInvestor) {
        this.idInvestidor = idInvestor;
    }

    public Integer getIdInvestimento() {
        return idInvestimento;
    }

    public void setIdInvestimento(Integer idInvestimento) {
        this.idInvestimento = idInvestimento;
    }

}
