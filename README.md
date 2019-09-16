# Hermes Comunicaciones - DevTester

Repositorio base para prueba de ingreso 

## Introducción

El presente test tiene como objetivo servir como prueba técnica para aquellos desarrolladores que quieran formar parte del equipo "Hermes". La idea fundamental es que el postulante maneje conceptos básicos de git, react-native, consumo de API y manejo de bases de datos.

### Paso 1:

Clonar el repositorio

```
https://github.com/hermesadmin/devtester.git
```

### Paso 2:

Utilizando esta estructura base, se solicita lo siguiente:

* Crear archivo .gitignore ad-hoc al proyecto react-native
* El proyecto tiene agregada la librería *react-native-navigation*
* Usando la librería anterior, generar un stack-navigator que conste de 3 screens: Step 1, Step 2 y Step 3
* Step 1: debe ser la screen por defecto y contener un input de texto (name) y un botón para guardar el texto introducido en el input. El botón debe ser redondeado y usar una gradiente de fondo de 2 colores (a elección del desarrollador).
* Step 2: debe mostrar una imagen aleatoria desde la [API de NASA](https://api.nasa.gov/) y dar la bienvenida al usuario, utilizando el texto ingresado en el input de Step 1.
* Step 2: debe contener una lista desplegable que muestre 20 especies de pez, usando la [API de Fishbase](https://fishbaseapi.readme.io/docs/species)
* Step 2: debe además tener un último componente de tipo input de texto. Este input debe autocompletarse con los nombres de Pokémon que se obtienen desde [PokéAPI](https://pokeapi.co/).
* Step 2: debe tener además un botón igual que Step 1, que guarde la data y pase a Step 3
* Step 3: deberá mostrar un resúmen de todos los datos ingresados en Step 1 y Step 2, incluyendo la imagen mostrada en Step 1.

## Paso 3:

Subir un request a este proyecto.

Una vez revisado el código y la aplicación resultante, se enviará el feedback respectivo.