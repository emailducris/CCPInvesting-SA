package sc.ccpinvesting.ccpinvestingapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sc.ccpinvesting.ccpinvestingapi.model.Investimento;

public interface InvestimentoRepository extends JpaRepository <Investimento, Integer> {
    
}