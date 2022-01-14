package sc.ccpinvesting.ccpinvestingapi.config;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.oas.annotations.EnableOpenApi;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.Contact;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;


@Configuration
@EnableOpenApi
public class SpringFoxConfig {         
                               
    @Bean
    public Docket api() { 
        ApiInfo apiInfo = new ApiInfoBuilder()
                        .title("CCP Investig API")
                        .description("Documentação da API do projeto CCP Investing")
                        .version("1.0.0")
                        .licenseUrl("https://github.com/chrisAndriotti")
                        .contact(new Contact("CCP Investing", "https://ccpinvesting.com.br", "investingccp@gmail.com"))
                        .build();

        return new Docket(DocumentationType.SWAGGER_2)
            .select()
            .apis(RequestHandlerSelectors.basePackage("sc.ccpinvesting.ccpinvestingapi.controller"))
            // .paths(PathSelectors.any())
            .build()
            .securitySchemes(Arrays.asList(apiKey()))
            .securityContexts(Arrays.asList(securityContext()))
            .apiInfo(apiInfo)
            .useDefaultResponseMessages(false);
        // return new Docket(DocumentationType.SWAGGER_2)
        // .select()
        // .apis(RequestHandlerSelectors.basePackage("sc.ccpinvesting.ccpinvestingapi.controller")).build()
        // .apiInfo(apiInfo);
                                                   
    }
    private ApiKey apiKey() {
        return new ApiKey("JWT", "Authorization", "header");
    }


    private SecurityContext securityContext() {
        return SecurityContext.builder()
                .securityReferences(defaultAuth())
                .build();
    }
    List<SecurityReference> defaultAuth() {
        AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything");
        AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
        authorizationScopes[0] = authorizationScope;

        List<SecurityReference> newSecurityReference = new ArrayList<SecurityReference>();
        SecurityReference securityReference = new SecurityReference("JWT", authorizationScopes);
        newSecurityReference.add(securityReference);

        return newSecurityReference;
    }

}