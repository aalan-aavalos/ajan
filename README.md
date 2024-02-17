# AJAN SHOP
Proyecto basico de una pagina de login y registro.
<br>
Herramientas usadas:
- Angular 17
- NgPrime
- Json-Server

## Datos de autor
- Autor: **Alan de Jesus Avalos Negrete**
- Materia: **Aplicaciones Web para I4.0**
- Unidad: **Unidad II Frameworks para Web empresarial**
- Grupo: **GDS0551**

## Instalación

1. Usa el siguiente comando: `git clone https://github.com/aalan-aavalos/ajan.git`, desde la terminal de git para clonar el proyecto a una carpeta.
2. Ejecuta el comando: `npm install`, desde la terminal de la carpeta del proyecto para instalar las dependencias faltantes

## Ejecución
1. Abre una terminal en el proyecto
2. Ejecuta el comando: `ng serve`, este comando por defecto ejecutara el proyecto por el puerto `4200`.
3. Ejecuta el comando `json-serve --watch db.json` para ejecutar el Json-Server

## Datos guardados en JSON-SERVER
- Usuario: **Alan**
- Email: **a@a.a**
- Contraseña: **1234**

## Uso
1. En el navegador ingresa la ruta `http://localhost:4200/` este por defecto te abrira la pagina de login.
2. Para ingresar un nuevo usuario da click en el enlace llamado `Registrarse`.
3. Ingresa los datos necesarios y presiona el boton de `Registrar`.
4. Ingresa los datos que agregaste en el login y presiona el boton de `Ingresar`.
5. Una vez validados los datos te enviara a la pagina de home donde podras salir con el boton de `Salir`.

## Datos extras
- Si se ingresa una ruta incorrecta la pagina te redireccionara a la pagina de `Ingreso`.
- Si se ingresa la ruta `/home` sin haber ingresado antes la pagina te redireccionara a la pagina de `Ingreso`.
- Cada campo validara que se hallan ingresado datos y en el caso de el registro de contraseñas que estas sean iguales.
