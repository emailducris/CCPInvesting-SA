package sc.ccpinvesting.ccpinvestingapi.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import sc.ccpinvesting.ccpinvestingapi.model.Usuario;
import sc.ccpinvesting.ccpinvestingapi.repository.UsuarioRepository;

public class AutenticacaoUsuarioService implements UserDetailsService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        Optional<Usuario> usuario = usuarioRepository.findByLogin(username);

        if(usuario.isEmpty()) {
            throw new UsernameNotFoundException("Usuário não encontrado");
        }

        return usuario.get();

    }
}
