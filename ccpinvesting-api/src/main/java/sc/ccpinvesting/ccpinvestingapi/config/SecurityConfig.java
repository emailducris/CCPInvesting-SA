package sc.ccpinvesting.ccpinvestingapi.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import sc.ccpinvesting.ccpinvestingapi.security.AutenticacaoFilter;
import sc.ccpinvesting.ccpinvestingapi.service.AutenticacaoUsuarioService;

@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, jsr250Enabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter{
    
    @Autowired
    private AutenticacaoFilter autenticacaoFilter;

    @Override
    protected void configure(HttpSecurity http) throws Exception{
        
        // > FORMLOGIN
        // http.authorizeRequests()
        //     .anyRequest().authenticated().and().httpBasic().and().formLogin();
    
        http.cors().and().csrf().disable()
            .authorizeRequests()
            .antMatchers(HttpMethod.POST,"/fale-conosco/**").permitAll()
            .antMatchers(HttpMethod.GET,"/fale-conosco/**").permitAll()
            .antMatchers(HttpMethod.GET, "/acao/**").permitAll()
            .antMatchers(HttpMethod.POST, "/acao/**").hasAuthority("ADMIN")
            .antMatchers(HttpMethod.GET, "/compra/**").permitAll()
            .antMatchers(HttpMethod.GET,"investidor/buscar-usuario/**").permitAll()
            .antMatchers(HttpMethod.GET,"investidor/**").hasAnyAuthority("USER")
            .antMatchers("/investidor/cadastrar/**").permitAll()
            .antMatchers("/seguranca/login/**").permitAll()
            .antMatchers("/swagger-resources/**").permitAll()
            .antMatchers("/webjars/**").permitAll()
            .antMatchers("/swagger-ui/**").permitAll()
            .antMatchers("/v2/**").permitAll()
            .anyRequest().authenticated();

        http.addFilterBefore(autenticacaoFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
       auth.userDetailsService(autenticacaoUsuarioService()).passwordEncoder(new BCryptPasswordEncoder());
    }

    @Bean
    public AutenticacaoUsuarioService autenticacaoUsuarioService () {
        return new AutenticacaoUsuarioService();
    }
}
