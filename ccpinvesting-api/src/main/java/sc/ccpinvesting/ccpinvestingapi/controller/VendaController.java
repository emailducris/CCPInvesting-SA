package sc.ccpinvesting.ccpinvestingapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sc.ccpinvesting.ccpinvestingapi.model.Investidor;
import sc.ccpinvesting.ccpinvestingapi.model.Venda;
import sc.ccpinvesting.ccpinvestingapi.service.VendaService;

@RestController
@RequestMapping("/venda")
public class VendaController {
    
    @Autowired
    VendaService vendaService;

    @PostMapping
    public Investidor venderAcao(@RequestBody Venda venda)
    {
        System.out.println(">>>>>>>>>>>>>>>>>>>>>>>venda"+venda.toString());
        return vendaService.vendaAcao(venda);
    }


}
