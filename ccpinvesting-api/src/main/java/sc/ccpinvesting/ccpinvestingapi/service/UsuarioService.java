package sc.ccpinvesting.ccpinvestingapi.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sc.ccpinvesting.ccpinvestingapi.model.Investidor;
import sc.ccpinvesting.ccpinvestingapi.model.Usuario;
import sc.ccpinvesting.ccpinvestingapi.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    InvestidorService investidorService;
    
    public Usuario cadastrar(Usuario usuario){
        usuario.setAtivo(true);
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> pegarTodos(){
        return usuarioRepository.findAll();
    }

    public Usuario buscarUsuario(String login){
        return usuarioRepository.findByLogin(login).get();
    }

    

}
