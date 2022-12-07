---
sidebar_position: 3
---

# HoneyNets

## ¿Qué es?

Una Honeynet es una herramienta de investigación. Es un tipo de Honeypot que consiste en una red diseñada para ser comprometida por intrusos. Sirve para estudiar las técnicas utilizadas por los intrusos que han comprometido la seguridad de la red. El objetivo principal es conocer al enemigo, aprender de él, en definitiva es una herramienta diseñada con propósitos académicos. 

Una Honeynet no es lo mismo que un sistema trampa tradicional, a continuación se describen las diferencias más significativas: 

Una Honeynet no es un sistema solitario, sino una red. Esta red puede estar compuesta por distintos sistemas trampa, tales como Linux, Windows, Solaris, routers, conmutadores, etc. El hecho de proporcionar un entorno de red aporta un ambiente más creíble, más real desde el punto de vista del intruso, del atacante de la red. Un entorno de sistemas heterogéneos permite además, captar la atención de más intrusos, algunos de los cuales están especializados en atacar determinados sistemas operativos o servicios. Por otra parte, permite aprender un mayor y variado número de tácticas de ataque. 

Los sistemas utilizados en una Honeynet son sistemas de producción, es decir, son sistemas reales, aunque no se utilicen con otro propósito que el de monitorizar su actividad. Ningún sistema o servicio es emulado. Normalmente se instalan sistemas trampa conocidos, con la configuración que traen por defecto, como Linux Red Hat.

Los Honeynets son herramientas de seguridad con un punto de vista diferente al tradicional, que es un comportamiento defensivo,  tradicionalmente se intenta defender de ataques una red, mediante cortafuegos, medios de cifrado o sistemas de detección de intrusos (IDS). Los Honeynets son herramientas diseñadas básicamente para aprender y adquirir experiencia en el área de seguridad. 

## ¿Cómo trabaja una HoneyNet?

Desde el punto de vista técnico, una honeynet es una red de sistemas de producción o servidores, diseñada para ser comprometida y conformada por varias Honeypots. 

El punto crucial que asegura el éxito de la honeynet es la creación de un ambiente que permita monitorizar todos y cada uno de los movimientos que el intruso llegue a realizar dentro de ella. Estos movimientos que realiza el intruso son monitorizados mediante la información que van dejando al utilizar herramientas, mediante las cuales siguen unas tácticas para conseguir algún objetivo que se imponen, hay que saber cuales son los objetivos y que motivos les llevan a ponerse esos objetivos.

![Docs Version Dropdown](/img/data-communication-security/HoneyNet.png)

Identificar y localizar las actividades de los atacantes es el problema más serio, en la medida en que se debe hacer dentro del tráfico producido en la red, realizando un sniffer del tráfico y estudiando los distintos paquetes que utiliza el atacante con el fin de observarlo. 

## ¿Cómo se recolecta información en una HoneyNet?

Una Honeynet debe capturar la mayor cantidad de información para analizar y encontrar nuevas estrategias, herramientas y ataques, sin que el atacante perciba que está siendo observado. Por ello, la captura de datos debe ser muy cuidosa. Lo ideal es hacerlo por capas. Es decir, tener varios elementos que recolecten datos en varios lugares dentro y fuera de la honeynet. Uno de éstos es el firewall, el cual normalmente se coloca a la entrada, para poder capturar la información y seleccionar que tipo de trafico se quiere examinar, además de alertar en el momento de un ataque. Otra de las capas que pueden constituir la captura de datos dentro de la honeynet son los sistemas de detección de intrusos, IDS.

Para conseguir un mejor rendimiento en escenarios con distintas honeynets dispersas por Internet es recomendable que la información capturada se envíe de forma segura a un servidor centralizado para su almacenamiento y análisis. De este modo se puede tener un mayor control sobre los datos recogidos, se pueden reaprovechar experiencias y se puede obtener una imagen más clara de la evolución de los diferentes ataques que se encuentran presentes en la red.