# **VIDEOGAMES** - Proyecto Individual Henry - Backend

<br />

<h1 align="center"> DESCRIPCIÓN </h1>

Esta es una aplicación backend que utiliza las siguientes tecnologías: **Javascript**, **Node**, **Express** y **Sequelize**, y costa de una base de datos y un servidor.

<br />


<h1 align="center"> ESTRUCTURA Y FUNCIONAMIENTO </h1>

<br />

## **Modelos**



### **Videogame**

Se establecen dos modelos, uno para los videogames con los siguientes capmos:
- Id.
- Imagen.
- Nombre.
- Descripción.
- Plataformas.
- Fecha de lanzamiento.
- Rating.

<br />

Además este modelo cuenta con una validación en el nombre, la que solo permite ingresar letras y espacios.

<br />

### **Genre**

Se establece un modelo para los géneros relacionados con los siguientes campos:
- Id.
- Nombre.

<br />

## **Relaciones**

Estas tablas cuantan con una relación de N a N a través de una tabla intermedia.

<br />

## **Rutas**

Se crea un enrutador general que utiliza dos rutas dos enrutadore secundarios para manejar las solicitudes, uno para videojuegos y otro para géneros.

<br />

### **VideoRouter**

En este enrutador se manejan las solicitudes a la ruta de videogames y tiene los siguientes endpoints:
- Un get que busca enforma global todos los videogames o por name recibido por query.
- Un get que busca por id recibido por params.
- Un post que carga un nuevo videogame a la base de datos. Este endpoint cuenta con dos validaciones, una para la cantidad de letras del nombre y otro es un valor máximo para el rating.

<br />

### **GenreRouer**

En este enrutador se manejan las solicitudes a la ruta de géneros y tiene los siguientes endpoints:
- Un post que primero obtiene los génros de la api rawg y luego los carga a la base de datos, si ésta está vacía.
- Un get trae todos los géneros de la base de datos.

<br />

## **TESTING**

Cuenta con testeos para los modelos y las rutas.



