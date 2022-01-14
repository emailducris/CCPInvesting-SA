package sc.ccpinvesting.ccpinvestingapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sc.ccpinvesting.ccpinvestingapi.model.Compra;

public interface CompraRepository extends JpaRepository <Compra, Integer> {
    
}