---
sidebar_position: 1
---

# HTTPS (HTTP Secure - Protocolo de transferencia de hipertexto seguro)

## ¿Qué es HTTPS?

Es una versión segura del protocolo HTTP que utiliza el SSL /TLS protocolo para cifrado y autenticación. HTTPS utiliza el puerto 443 de forma predeterminada en lugar del puerto 80 de HTTP.


Hace posible que los usuarios del sitio web transmitan datos confidenciales como números de tarjetas de crédito, información bancaria y credenciales de inicio de sesión de forma segura a través de Internet. Por esta razón, HTTPS es especialmente importante para asegurar actividades en línea como compras, banca y trabajo remoto.

## ¿Cómo es HTTPS diferente de HTTP?

HTTPS agrega cifrado, autenticación y integridad al protocolo HTTP:

- **Encriptación**: Incluyendo SSL /TLS cifrado, HTTPS evita que los datos enviados a través de internet sean interceptados y leídos por un tercero. La comunicación cifrada se puede configurar de forma segura entre dos partes que nunca se han reunido en persona (por ejemplo, un servidor web y un navegador) mediante la creación de una clave secreta compartida.

- **Autenticación**: Incluye una Llave pública que un navegador web puede usar para confirmar que los documentos enviados por el servidor han sido firmados digitalmente por alguien que posee el correspondiente llave privada.

- **Integridad**: Cada documento enviado a un navegador por un servidor web HTTPS incluye una firma digital que un navegador web puede usar para determinar que el documento no ha sido alterado por un tercero o corrompido de otra manera mientras está en tránsito. El servidor calcula un hash criptográfico del contenido del documento, incluido con su certificado digital, que el navegador puede calcular de forma independiente para demostrar que la integridad del documento está intacta.

![Docs Version Dropdown](/img/web-security/http_https.png)

