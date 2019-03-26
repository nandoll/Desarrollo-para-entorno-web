#Backend RoR

#Versiones de los paquetes
sqlite3 --version 
ruby -v
rails -v

#Crear nuevo proyecto
rails new baseDatosSQLite

#Crear la base de datos
>ingresar al directorio bd y ejecutar
>sqlite myBD.sqlite3
#ingresa a la consola
sqlite> CREATE TABLE persona(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    dni VARCHAR(8) NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    apellidos VARCHAR(29) NOT NULL,
    direccion TEXT,
    fecha DATETIME
);
*agregar el nombre de las columnas y para terminar el comando escribir ;*

#ver tablas de una BD
.tables

#ver informacion de una tabla

PRAGMA table_info(persona);
*se verá el comando sin formato*

#para activar el modo del formato con columna (mientrás esté activa la consola)
.mode column

#para actvar las cabeceras
.header on

#Eliminar las tablas
DROP TABLE persona;

#Insertar Datos
INSERT INTO persona VALUES(NULL, '0754219', 'Sergio', 'Hidalgo', 'Av. Principal #401', DATETIME('now') );

#Seleccionar Datos
SELECT * FROM persona;

#Actualizar Datos
UPDATE persona SET nombre='Javier' WHERE id=1;

#Eliminar un registro
DELETE FROM persona WHERE id=2;
