package sc.ccpinvesting.ccpinvestingapi.security;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JWTTokenHelper {

    @Value("${jwt.secret}")
    private String tokenSecret;

    @Value("${jwt.tempo.vida.token}")
    private Long expiracao;

    // public Boolean validarToken(String token, UserDetails user){
    //     return Boolean.TRUE;
    // }

    public Boolean validarToken(String token) {
        return !recuperarLoginDoToken(token).isEmpty();
    }

    public String recuperarLoginDoToken(String token) {
        return (String) buscarClaimsDoToken(token).get("usuario");
    }

    private Claims buscarClaimsDoToken(String token) {
        return Jwts.parser().setSigningKey(tokenSecret).parseClaimsJws(token).getBody();
    }

    public String gerarToken(UserDetails usuario){
        Map<String, Object> claims = new HashMap<>();
        claims.put("usuario", usuario.getUsername());
        claims.put("created", new Date());
        claims.put("permissoes", usuario.getAuthorities());
        // claims.put("expiration", new Date(System.currentTimeMillis() + 360000000));
        

        return Jwts.builder().setClaims(claims)
                .setExpiration(new Date(System.currentTimeMillis() + expiracao * 1000))
                .signWith(SignatureAlgorithm.HS512, tokenSecret)
                .compact();
    }
    
}