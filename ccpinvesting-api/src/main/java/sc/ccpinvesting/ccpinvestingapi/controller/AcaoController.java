package sc.ccpinvesting.ccpinvestingapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sc.ccpinvesting.ccpinvestingapi.model.Acao;
import sc.ccpinvesting.ccpinvestingapi.service.AcaoService;

@CrossOrigin(origins = "localhost:3000")
@RestController 
@RequestMapping("/acao")
public class AcaoController {
   
   @Autowired
   AcaoService acaoService;
   
       
     @GetMapping
     public List<Acao> buscarAcoes()
     {
        return acaoService.buscarTodos();
     }

     @GetMapping("/{id}")
     public Acao buscarPorId(@PathVariable Integer id)
     {
        return acaoService.buscarPorId(id);
     }

     @PostMapping
     public Acao salvar(@RequestBody Acao acao)
     { 
        return acaoService.salvar(acao);
     }

     @PutMapping("/{id}")
     public Acao atualizaAcao(@RequestBody Acao acao, @PathVariable Integer id)
     {
        return acaoService.atualizar(id, acao);
     }

     @DeleteMapping("/{id}")
     void deletarAcao (@PathVariable Integer id)
     {
          acaoService.delete(id); 
     }
}
