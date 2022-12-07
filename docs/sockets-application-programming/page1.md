---
sidebar_position: 1
---

# Programación de aplicaciones con sockets

## ¿Qué son los sockets?

Los sockets son mecanismos de comunicación entre procesos que permiten que un proceso emita o reciba información con otro proceso incluso estando en distintas máquinas. 

Es el punto final en una conexión, es decir, un dispositivo o elemento electrónico que se genera gracias al sistema operativo y que permite el envío e información de otros procesos que también hagan uso de estos. 

Para que ocurra el proceso de comunicación entre dos programas, es necesario que uno de los programas pueda localizar o ubicar al otro. De igual forma, ambos programas deben contar con la capacidad de intercambiar entre sí, cualquier secuencia de octetos o de datos que resulten relevantes para sus objetivos.

Además de esto, permite la implementación de una arquitectura basada en el modelo cliente-servidor, donde la comunicación debe iniciarse por parte de uno de los programas «cliente»; mientras tanto, el programa servidor se encuentra a la espera de que el programa cliente inicie la comunicación. Por lo tanto, su función será la de permitir la lectura y escritura de información de los programas servidores y clientes, que posteriormente será transmitida por las diferentes capas de red del sistema.

Un socket es también una dirección de Internet, combinando una dirección IP y un número de puerto.

![Docs Version Dropdown](/img/sockets-application-programming/sockets.png)

## ¿Cómo funciona?

El mecanismo de comunicación vía sockets tiene los siguientes pasos:
- El proceso servidor crea un socket con nombre y espera la conexión.
- El proceso cliente crea un socket sin nombre. 
- El proceso cliente realiza una petición de conexión al socket servidor. 
- El cliente realiza la conexión a través de su socket mientras el proceso servidor mantiene el socket servidor original con nombre.

![Docs Version Dropdown](/img/sockets-application-programming/sockets2.png)

<iframe width="675" height="380" src="https://www.youtube.com/embed/ZEitds5Nnx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>