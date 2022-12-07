---
sidebar_position: 2
---

# Tipos de sockets

## SOCK_DGRAM

El Datagram Socket, se encuentra asociado al Protocolo de Datagramas de Usuario (UDP). El SOCK_DGRAM se encargará del viaje de los paquetes en formato de datagrama. Los paquetes enviados por este tipo de sockets pueden llegar a extraviarse si que el receptor se entere que ocurrió esa pérdida. Es recomendable para la transmisión de datos como video y audio.

## SOCK_STREAM

En el caso del SOCK_STREAM o socket de flujo, se asocia al Transmission Control Protocol (TCP) o Protocolo de Transmisión de informaciones. Este tipo de sockets establece conexión antes de la comunicación y garantiza la consistencia en los bytes de los datos que se reciben y en la secuencia de envío. Además, asegura la recepción sin errores de los datos, así como seguridad a la transmisión y recepción de la información.

![Docs Version Dropdown](/img/sockets-application-programming/TCPvUDP.png)

## SOCK_RAW

Estos sockets nos permiten el acceso a los protocolos de comunicaciones, con la posibilidad de hacer uso o no de protocolos de capa de nivel de red o 4 nivel de transporte, y por lo tanto dándonos el acceso a los protocolos directamente y a la información que recibe en ellos. El uso de sockets de este tipo nos va a permitir la implementación de nuevos protocolos

![Docs Version Dropdown](/img/sockets-application-programming/RAW.jpg)

## SOCK_SEQPACKET

Tiene las características del SOCK_STREAM pero además el tamaño de los mensajes es fijo.
