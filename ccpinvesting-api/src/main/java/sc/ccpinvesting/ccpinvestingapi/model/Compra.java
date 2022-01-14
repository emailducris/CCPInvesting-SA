package sc.ccpinvesting.ccpinvestingapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Compra {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer compraId;

    @Column
    private Integer acaoId;
    
    @Column
    private Integer investidorId;
    
    @Column
    private Integer quantidade;
    
    
    public Compra() {
    }
    
    public Compra(Integer compraId, Integer acaoId, Integer investidorId, Integer quantidade) {
        this.acaoId = acaoId;
        this.investidorId = investidorId;
    }

    public Integer getCompraId() {
        return compraId;
    }

    public void setCompraId(Integer compraId) {
        this.compraId = compraId;
    }
    
    public Integer getAcaoId() {
        return acaoId;
    }
    
    public void setAcaoId(Integer acaoId) {
        this.acaoId = acaoId;
    }
    
    public Integer getInvestidorId() {
        return investidorId;
    }
    
    public void setInvestidorId(Integer investidorId) {
        this.investidorId = investidorId;
    }

    public Integer getQuantidade() {
        return quantidade;
    }
    
    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }
    
}
