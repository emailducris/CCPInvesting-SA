package sc.ccpinvesting.ccpinvestingapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sc.ccpinvesting.ccpinvestingapi.model.Investidor;

public interface InvestidorRepository extends JpaRepository<Investidor, Integer>
{
    
}