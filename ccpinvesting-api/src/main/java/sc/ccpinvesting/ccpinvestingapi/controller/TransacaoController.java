package sc.ccpinvesting.ccpinvestingapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sc.ccpinvesting.ccpinvestingapi.model.Investidor;
import sc.ccpinvesting.ccpinvestingapi.model.Transacao;
import sc.ccpinvesting.ccpinvestingapi.service.InvestidorService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/transacao")
public class TransacaoController {
 
    @Autowired
    InvestidorService investidorService;

    @PostMapping("/depositar")
    public Investidor depositar(@RequestBody Transacao transacao) {
        
        return investidorService.deposito(transacao);

    }

    @PostMapping("/sacar")
    public Investidor sacar(@RequestBody Transacao transacao) {

        return investidorService.saque(transacao);
    }
    
    
}
