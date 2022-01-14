package sc.ccpinvesting.ccpinvestingapi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sc.ccpinvesting.ccpinvestingapi.model.Usuario;
import sc.ccpinvesting.ccpinvestingapi.security.JWTTokenHelper;
import sc.ccpinvesting.ccpinvestingapi.service.AutenticacaoUsuarioService;
import sc.ccpinvesting.ccpinvestingapi.service.InvestidorService;
import sc.ccpinvesting.ccpinvestingapi.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/seguranca")
public class SecurityController {
    
    @Autowired
    AutenticacaoUsuarioService autenticacaoUsuarioService;

    @Autowired
    InvestidorService investidorService;

    @Autowired
    JWTTokenHelper tokenHelper;

    @Autowired
    UsuarioService usuarioService;

    @PostMapping(value="/login")
    public String buscarToken(@RequestBody Usuario dadosAutenticacao) {
        
        try{
            UserDetails usuario = autenticacaoUsuarioService.loadUserByUsername(dadosAutenticacao.getLogin());
            String senhaUsuario = usuario.getPassword();
    
            String senhaInputada = dadosAutenticacao.getSenha();

            // if(usuario == null || !new BCryptPasswordEncoder().matches(senhaInputada, senhaUsuario)) {
            if(usuario == null || !senhaInputada.contentEquals(senhaUsuario)  ){
                return "Usuário ou senha inválido";
            }

            //recuperar o id para retornar junto ao token
            return tokenHelper.gerarToken(usuario);
        }
        catch(UsernameNotFoundException exception){
            throw exception;
        }

    }

}
