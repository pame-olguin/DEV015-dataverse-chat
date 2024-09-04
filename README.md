# Dataverse Chat

## Índice


* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Funcionalidades](#2-funcionalidades)
* [3. Criterios de aceptación mínimos del proyecto](#3-criterios-de-aceptación-mínimos-del-proyecto)


***
## 1. Resumen del proyecto

En este proyecto convertí la aplicación desarrollada
en Dataverse en una
[Single Page Application (SPA)]manteniendo las funcionalidades de visualizar, filtrar, ordenar y calcular alguna estadística, adicionando una nueva vista para consultar información detallada de cada personaje/entidad y agregando la posibilidad de interactuar con un personaje/entidad o todos ellosa través de un sistema de chat impulsado por la
[API de OpenAI].

### Los objetivos generales de este proyecto son los siguientes

* Desarrollar una [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Aplicar los conceptos de responsividad en el desarrollo de las vistas
* Implementar un router para la navegación entre las diferentes
vistas de la aplicación
* Integrar una API externa
* Entender la asincronía en JavaScript
* Crear una suite de pruebas unitarias que permitan testear código asíncrono

### Historias de usuaria

Historia de Usuario 1: Filtrado por Categorías de Campo de Ocupación

Historia de Usuario:

Como usuaria interesada en explorar perfiles específicos,
quiero filtrar las tarjetas por categorías de campo de ocupación (como científica, ingeniera, matemática),
para encontrar fácilmente personajes que se alineen con mi área de interés sin revisar todas las tarjetas.
Criterios Mínimos de Aceptación:

El usuario puede seleccionar una categoría de ocupación de una lista de opciones.
Al seleccionar una categoría, solo se muestran las tarjetas que pertenecen a esa categoría.
Las tarjetas se actualizan dinámicamente sin recargar la página.
Si no hay tarjetas que coincidan con la categoría seleccionada, se muestra un mensaje adecuado o una vista vacía.
Definición de Término:

Categorías de Campo de Ocupación: Etiquetas o clasificaciones que describen la profesión o especialidad de cada personaje, como "Científica", "Ingeniera", o "Matemática".

Historia de Usuario 2: Ordenamiento de Tarjetas

Historia de Usuario:

Como usuaria que desea explorar las tarjetas de manera organizada,
quiero poder ordenar las tarjetas de personajes de manera ascendente o descendente por nombre,
para navegar más eficientemente y comparar personajes similares sin perderme en la lista.
Criterios Mínimos de Aceptación:

El usuario tiene la opción de seleccionar el orden de las tarjetas (ascendente o descendente).
El orden de las tarjetas cambia inmediatamente según la selección del usuario.
El ordenamiento se realiza alfabéticamente por el nombre del personaje.
La funcionalidad de ordenamiento es accesible desde la misma página donde se muestran las tarjetas.
Definición de Término:

Orden Ascendente/Descendente: Ordenar elementos de menor a mayor (ascendente) o de mayor a menor (descendente), en este caso basado en el nombre del personaje.

Historia de Usuario 3: Vista Detallada y Chat con el Personaje

Historia de Usuario:

Como usuaria interesada en conocer más sobre un personaje específico,
quiero hacer clic en una tarjeta para cambiar la vista a una página de detalles del personaje,
para ver información completa y chatear con el personaje usando la funcionalidad de OpenAI, obteniendo respuestas personalizadas como si estuviera hablando con esa persona.
Criterios Mínimos de Aceptación:

Al hacer clic en una tarjeta, la vista cambia a una página de detalles del personaje seleccionado.
La página de detalles muestra información ampliada del personaje (biografía, logros, etc.).
Se despliega un área de chat donde el usuario puede enviar mensajes al personaje.
Las respuestas del personaje son generadas dinámicamente utilizando la API de OpenAI y son relevantes al contexto del personaje.
La transición entre la vista de tarjetas y la vista de detalles es fluida y no requiere recargar la página completa.
Definición de Término:

Vista Detallada: Una sección dedicada que muestra información completa sobre un personaje seleccionado, distinta de la vista general de tarjetas.
Chat con OpenAI: Funcionalidad que permite al usuario interactuar con un asistente virtual basado en la API de OpenAI, simulando una conversación con el personaje seleccionado.
 
## 2. Funcionalidades

Ésta Single Page Application (SPA) permite,además de **visualizar la data, filtrarla, ordenarla y calcular alguna estadística** tal como se hizo en Dataverse, acceder a una página de detalle de cada personaje y poder _interactuar_ con los personajes o entidades del set de data que utilizamos anteriormente.

Aquí definimos en más detalle las funcionalidades mínimas que tiene:

* La aplicación es _responsive_
* La aplicación es una SPA con múltiples vistas:
  - Implementa un sistema de enrutamiento que permita la navegación
    dentro de la aplicación.
  - Cada vista de la aplicación es cargada dinámicamente mediante JavaScript.
  - La aplicación es capaz de cargar la vista correspondiente a
    la URL actual al iniciar la aplicación.
* La aplicación mantiene las funcionalidades de Dataverse: visualizar,
  filtrar, ordenar y calcular estadística de la data.
* Al hacer clic en una tarjeta de personaje/entidad, la aplicación se
  redirige a una vista **con su propia URL** que muestre la información
  detallada sobre ese personaje/entidad en particular
* La aplicación permite a la usuaria configurar la API Key para
  interactuar con la API de Open AI
* Usando la API de Open AI, la aplicación permite al usuario
  interactuar con un personaje/entidad a través de un chat.
 

## 3. Consideraciones técnicas

La lógica del proyecto se implementó completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO se usó librerías o
frameworks.
