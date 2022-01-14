package sc.ccpinvesting.ccpinvestingapi.security;

import java.io.IOException;


import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import sc.ccpinvesting.ccpinvestingapi.service.AutenticacaoUsuarioService;

@Component
public class AutenticacaoFilter extends OncePerRequestFilter {
    
    @Autowired
    JWTTokenHelper tokenHelper;

    @Autowired
    private AutenticacaoUsuarioService autenticacaoUsuarioService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = request.getHeader("Authorization");

        if(token == null || !token.startsWith("Bearer")) {
            filterChain.doFilter(request, response);
            return;
        }

        token = token.substring(7);

        if(!tokenHelper.validarToken(token)){//validar token
            throw new ServletException("Token inválido");
        }

        autenticarUsuario(token);

        filterChain.doFilter(request, response);
        
    }

    private void autenticarUsuario(String token){
        UserDetails usuario = autenticacaoUsuarioService.loadUserByUsername(tokenHelper.recuperarLoginDoToken(token));
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(usuario.getUsername(), usuario.getPassword(), usuario.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
