---
sidebar_position: 2
---

# Certificado SSL

## ¿Qué es?

**SSL** o **Secure Sockets Layer** es un protocolo de seguridad de Internet basado en el cifrado. Inicialmente fue desarrollado por Netscape en 1995 para garantizar la privacidad, la autenticación y la integridad de los datos en las comunicaciones de Internet. SSL es el predecesor del cifrado TLS moderno que se utiliza hoy en día.

El SSL solo puede ser implementado por sitios web que tengan un certificado SSL (técnicamente un certificado "TLS"). Un certificado SSL es como una tarjeta de identificación o una acreditación que prueba que alguien es quien dice ser. Los certificados SSL son almacenados y mostrados en la web por el servidor de un sitio web o de una aplicación.

![Docs Version Dropdown](/img/web-security/SSL.svg)

## Protocolo TLS

Existe una versión actualizada y más segura del SSL llamada “Transport Layer Security” teniendo como acrónimo TLS. En la actualidad se utilizan las siglas SSL para denominar los certificados de seguridad, debido a que, sigue siendo un término más utilizado.

![Docs Version Dropdown](/img/web-security/TLS.png)

## ¿Cómo funciona SSL/TLS?

- Para ofrecer un alto grado de privacidad, SSL cifra los datos que se transmiten por la web. Por ello, cualquiera que intente interceptar estos datos se encontrará con una mezcla confusa de caracteres, que será muy difícil de descifrar.

- Inicia un proceso de autenticación, conocido como establecimiento de comunicación, entre dos dispositivos que se comunican para garantizar que ambos sean lo que aparentan.

- Firma digitalmente los datos para proporcionar integridad de datos , que verifica que no se hayan manipulado los datos antes de alcanzar al destinatario designado.

## ¿Por qué es importante?

Originalmente, los datos de la web se transmitían en texto no cifrado que cualquiera podía leer si interceptaba el mensaje. El SSL se creó para corregir este problema y proteger la privacidad del usuario. Al cifrar los datos entre un usuario y un servidor web, el SSL garantiza que cualquiera que intercepte los datos solo pueda ver un desorden de caracteres codificado. 

El SSL también detiene ciertos tipos de ataques cibernéticos: autentica los servidores web, lo cual es importante porque los atacantes a menudo intentan crear sitios web falsos para engañar a los usuarios y robar datos. También previene que los atacantes manipulen los datos en tránsito, como el precinto del envase de un medicamento.

![Docs Version Dropdown](/img/web-security/SSL.png)

## ¿Son lo mismo SSL y TLS?

El SSL es el predecesor directo de otro protocolo conocido como **TLS (Transport Layer Security)**. El Grupo de trabajo de ingeniería de Internet (IETF, por sus siglas en inglés) propuso en 1999 una actualización del SSL. Como esta actualización la estaba desarrollando el IETF, y Netscape ya no participaba en el proyecto, se cambió el nombre a TLS. No hay diferencias drásticas entre la versión final de SSL (3.0) y la primera versión de TLS; el nombre simplemente se cambió para indicar el cambio de propietario.

Como están tan estrechamente relacionados, los dos términos se suelen usar indistintamente y con frecuencia se confunden. Algunos todavía usan SSL para referirse al TLS, mientras que otros utilizan el término "cifrado SSL/TLS", porque el nombre SSL es muy conocido.

## ¿Cómo se relaciona SSL/TLS con HTTPS?

Los certificados SSL/TLS al momento de ser instalados se configuran para poder transferir datos haciendo uso de HTTPS, la cual estas dos tecnologías van pegadas una con otra y es necesario que estén juntas para que puedan funcionar adecuadamente.

Las URL  están precedidas con HTTP o HTTPS, lo cual muestra la transmisión de datos desde la información que envías hasta la que recibes. La cual marca la diferencia entre HTTP y HTTPS.

![Docs Version Dropdown](/img/web-security/HTTPS.png)

Es decir, que otra manera de identificar si una página cuenta con un certificado SSL/TLS es observando la URL y localizar HTTP o HTTPS, ya que, como se mencionó anteriormente, estas conexiones necesitan un certificado para que puedan funcionar.