package sc.ccpinvesting.ccpinvestingapi.service;

import java.util.List;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import sc.ccpinvesting.ccpinvestingapi.model.FaleConosco;
import sc.ccpinvesting.ccpinvestingapi.repository.FaleConoscoRepository;

@Service
public class FaleConoscoService {
    
    @Autowired
    FaleConoscoRepository faleConoscoRepository;

    @Autowired
    JavaMailSender javaMailSender;

    // @Autowired
	// MailSender notificationService;

    public List<FaleConosco> buscarTodos()
    {
        return faleConoscoRepository.findAll();
    }

    public FaleConosco buscarCompraPorId(Integer id)
    {
        return faleConoscoRepository.findById(id).get();
    }

    public String salvar(FaleConosco faleConosco){
        try{

            String nome = faleConosco.getNome();
            String email = faleConosco.getEmail();
            String mensagem = faleConosco.getMensagem();
            String ccpMail = "investingccp@gmail.com";
    
            MimeMessage mail = javaMailSender.createMimeMessage();
    
            MimeMessageHelper helper = new MimeMessageHelper(mail);
            helper.setTo(ccpMail);
            helper.setSubject("API CCP Investing");
            helper.setText("<h3> Mensagem de <b>"
                            +nome+"</b> :</h3> <br>"
                            +mensagem+"<br><br><b>"
                            +email+"</b>"
                            , true);
    
            // MimeMessage mail = mailSender.createMimeMessage();
    
            // MimeMessageHelper helper = new MimeMessageHelper( mail );
            // helper.setTo( "wolmirgarbin@gmail.com" );
            // helper.setSubject( "Teste Envio de e-mail" );
            // helper.setText("<p>Hello from Spring Boot Application</p>", true);
            // mailSender.send(mail);
    
            // notificationService.send(mail);
    
            javaMailSender.send(mail);
            
            faleConoscoRepository.save(faleConosco);

            return "OK";

        }catch (Exception e) {
            e.printStackTrace();
            return "Erro ao enviar e-mail";
        }
    }
}
