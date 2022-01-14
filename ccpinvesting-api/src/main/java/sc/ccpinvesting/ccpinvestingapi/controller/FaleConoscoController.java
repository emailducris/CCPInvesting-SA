package sc.ccpinvesting.ccpinvestingapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sc.ccpinvesting.ccpinvestingapi.model.FaleConosco;
import sc.ccpinvesting.ccpinvestingapi.service.FaleConoscoService;

@RestController
@RequestMapping("/fale-conosco")
public class FaleConoscoController {
    
    @Autowired
    FaleConoscoService faleConoscoService;

    @GetMapping
    public List<FaleConosco> buscarTodos()
    {
        return faleConoscoService.buscarTodos();
    }

    @PostMapping("/salvar")
    public String salvar(@RequestBody FaleConosco faleConosco)
    {
        return faleConoscoService.salvar(faleConosco);
    }


}
