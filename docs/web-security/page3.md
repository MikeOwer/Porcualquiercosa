---
sidebar_position: 3
---

# Tipos de certificados SSL

Existen diferentes tipos de certificados SSL. Los certificados pueden aplicarse a un solo sitio web o a varios, según el tipo:

- **Un solo dominio:** el certificado SSL para un solo dominio se aplica a un solo dominio como www.cloudflare.com.

- **Comodín:** al igual que el certificado de un solo dominio, el certificado SSL comodín se aplica a un solo dominio. Sin embargo, también incluye los subdominios de ese dominio. Por ejemplo, un certificado comodín podría abarcar www.cloudflare.com, blog.cloudflare.com, y developers.cloudflare.com, mientras que un certificado de dominio único solo incluiría el primero.

- **Multidominio:** como su nombre indica, los certificados SSL multidominio pueden aplicarse a varios dominios no relacionados.

Los certificados SSL también cuentan con diferentes niveles de validación. Un nivel de validación es como una revisión de antecedentes, y el nivel cambia dependiendo de la exhaustividad de la revisión.

- **Validación del dominio:** es el nivel de validación menos estricto y el más barato. Lo único que el negocio debe hacer es probar que controla el dominio.

- **Validación de la organización:** es un proceso más práctico; la AC se pone en contacto directamente con la persona o empresa que solicita el certificado. Estos certificados son más fiables.

- **Validación extendida:** requiere una comprobación completa de los antecedentes de una organización antes de que se pueda emitir el certificado SSL.

![Docs Version Dropdown](/img/web-security/multi_domain_SSL.png)

## Video complementario

<iframe width="675" height="380" src="https://www.youtube.com/embed/tHhFQaurGAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>