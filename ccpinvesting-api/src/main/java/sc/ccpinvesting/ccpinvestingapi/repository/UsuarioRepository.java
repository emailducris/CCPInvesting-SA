package sc.ccpinvesting.ccpinvestingapi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import sc.ccpinvesting.ccpinvestingapi.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{
   
    public Optional<Usuario> findByLogin(String login);

    
    
}
