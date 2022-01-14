package sc.ccpinvesting.ccpinvestingapi.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sc.ccpinvesting.ccpinvestingapi.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    
    @Autowired
    UsuarioService usuarioService;

    // @PostMapping("/cadastrar")
    // public Usuario cadastrar(@RequestBody Usuario usuario){

    //     return usuarioService.cadastrar(usuario);
    // }
}
