package sc.ccpinvesting.ccpinvestingapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sc.ccpinvesting.ccpinvestingapi.model.Acao;

public interface AcaoRepository extends JpaRepository <Acao, Integer> {
    
}
