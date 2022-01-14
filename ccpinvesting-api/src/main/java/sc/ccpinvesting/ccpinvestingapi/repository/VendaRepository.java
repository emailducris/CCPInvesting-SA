package sc.ccpinvesting.ccpinvestingapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sc.ccpinvesting.ccpinvestingapi.model.Venda;

public interface VendaRepository extends JpaRepository<Venda, Integer> {
    
}
