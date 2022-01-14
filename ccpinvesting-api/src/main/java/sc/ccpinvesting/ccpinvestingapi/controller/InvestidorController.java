package sc.ccpinvesting.ccpinvestingapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sc.ccpinvesting.ccpinvestingapi.model.Investidor;
import sc.ccpinvesting.ccpinvestingapi.service.InvestidorService;
import sc.ccpinvesting.ccpinvestingapi.service.UsuarioService;

@RestController 
@RequestMapping("/investidor")
public class InvestidorController {

      @Autowired
      InvestidorService investidorService;

      @Autowired
      UsuarioService usuarioService;

    
      @GetMapping
      public List<Investidor> buscarInvestidores()
      {
         return investidorService.buscarTodos();
      }

      @GetMapping("/{id}")
      public Investidor buscarPorId(@PathVariable Integer id)
      {
         return investidorService.buscarPorId(id);
      }

      @GetMapping("/buscar-usuario/{login}")
      public Investidor buscarPorLogin(@PathVariable String login)
      {
         return investidorService.buscarPorLogin(login);
      }

      @PostMapping("/cadastrar")
      public Investidor cadastrar(@RequestBody Investidor investidor)
      {   
         return investidorService.cadastrar(investidor);
      }

      @PutMapping("/{id}")
      public Investidor atualizaInvestidor(@RequestBody Investidor investidor, @PathVariable Integer id)
      {
         return investidorService.atualizar(id, investidor);
      }

      @DeleteMapping("/{id}")
      void deletarInvestidor (@PathVariable Integer id)
      {
            investidorService.delete(id); 
      }
}



